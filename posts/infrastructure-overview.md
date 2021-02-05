---
title: Infrastructure Overview
author: nate
date: December 29, 2020 03:00 PM
thumbnail: digital-binary-data-microchip-with-glow-circuit-board.jpg
---

The network architecture planned for the Fosshost AArch64 deployment is a little different from a conventional "cloud" virtualization system: we have very little layer 3 infrastructure. Instead, the network relies on a large layer 2 domain. Each server acts as both a hypervisor and router, and operates independently of the rest of the network. PoPs can be as small as a single 1U machine or as large as multiple racks, but the servers are all set up identically. On the network side, the servers sit behind a global anycast network with internal layer 2 forwarding in a full mesh, all encapsulated in an encrypted overlay spanning layer 3 and announced to the Internet with BGP.

Each server has four general layers:
- Virtualization: kvm + qemu + libvirt
- Forwarding: [batman-adv iv](https://www.open-mesh.org/projects/batman-adv/wiki/BATMAN_IV) + ethernet bridge
- Overlay: wireguard + gretap
- Routing: bird + [bcg](https://github.com/natesales/bcg)

## Routing
The edge is the only part of the network that varies from PoP to PoP. At small sites, hypervisors peer directly with other AS's, and larger PoPs have discrete routers (or switches) that reflect routes learned via BGP down to the hypervisors. In either case, we're running BGP to the server and announcing the same prefixes from every hypervisor. We then use ECMP to balance flows between multiple upstreams and peers. All our systems run Debian, so the BGP daemon (BIRD) injects routes into the Linux kernel which takes care of flow hashing and act as the boundary between layer 3 and 2. For BGP automation we're using [bcg](https://github.com/natesales/bcg) which takes care of RPKI, IRR, and max-prefix filtering.

## Overlay
Once the routes have been injected into the kernel from BGP, everything is essentially layer 2. Each server has a direct layer 2 connection to every other server in the network, even between sites. We do this with an overlay network based on Wireguard and GRETAP. This is all configured automatically with Ansible, so every server always has a "route" — more accurately, an ARP and NDP entry — to every other server in the network.

## Forwarding
All the GRETAP interfaces, about 50 of them, are delegated to forwarding control by the mesh. We use [batman-adv iv](https://www.open-mesh.org/projects/batman-adv/wiki/BATMAN_IV) as the mesh routing protocol, which is bridged to the hypervisor's VM bridge interface.

## Virtualization
The virtualization system is based on kvm, qemu, and libvirt, all managed by Ansible which pulls configuration data out of an in-house dashboard and automation system.

When a user requests a VM, an entry is created in the database which is then assigned IP addresses and a host hypervisor, depending on estimated resource usage of each server in the requested PoP. Next, that data is converted to a VM configuration profile and pushed out to the selected hypervisor. We also use libvirt-sshd, a custom ssh daemon that runs on each hypervisor to allow users to SSH into their VM's serial console for "offline" access.

## Problems with large layer 2 domains
We typically like to avoid large layer 2 domains because BUM (Broadcast, Unknown Unicast, Multicast) traffic can easily flood the network and cause issues. There is no perfect solution (and this is still a work in progress), but we do a few things to avoid issues with the mesh system:

- Blocking IPv6 SLAAC and DHCP — We don't do any auto-configuration on the network (the provisioning system makes static assignments), so we block this type of traffic on the VM bridges. The last thing we want is for someone to fire up radvd/dhcpd and have all the other VMs end up with a broken network configuration. The VM templates also have sysctl parameters set to ignore these protocols.
- Ratelimiting ARP and NDP — We apply ARP and NDP ratelimits to the hypervisor's bridge interface to dampen broadcast storms.
- ARP and NDP timeouts set by cloud-init to our VM templates — To avoid excessive ARP and NDP traffic, we modify the timeouts in the kernel with cloud-init when a VM is provisioned. That said, the network can do sub-second VM migrations which need to send traffic through the network to allow the mesh to update its forwarding tables. To enable our fast network transition times we have to update the neighbour tables; when a VM is about to migrate, the receiving hypervisor sends gratuitous ARP and NDP responses into the bridge, causing the hosts to update their L2 caches and [batman-adv iv](https://www.open-mesh.org/projects/batman-adv/wiki/BATMAN_IV) with its new forwarding table.
- IP and MAC spoofing protection (BCP38) — Each VM is limited to a single MAC, and IPv4 and IPv6 address. These are all statically set by the provisioning system and any traffic that doesn't originate from the authorized addresses is dropped.

All in all, our infrastructure plan is still under development and more than a little unconventional. It's also a constantly evolving process and subject to change, so stay tuned to the blog to learn more about the latest updates.

If you have any comments, questions or other feedback about this post, feel free to reach out!
