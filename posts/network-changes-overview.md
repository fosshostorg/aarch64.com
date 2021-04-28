---
title: Changes to our network stack
author: nate
date: April 28, 2021 09:00 PM
thumbnail: network-data-center.jpg
---

On December 29, 2020, I [wrote](https://aarch64.com/post/infrastructure-overview) about our unconventional network setup with a large layer 2 mesh. Unfortunately, we weren't able to get a hold of enough IPv4 space to make that work, so we've redesigned the network entirely as IPv6 only.

This raises the question: can they still access AArch64 resources? Some networks are still stuck in the past and are IPv4 only!

The answer is yes, so let's take a look at how we did it.

In short, we're using the very popular combination of NAT64 and DNS64. DNS64 translates a domain name with no AAAA record to a “synthesized” AAAA record, created on-demand, representing the A value packed into a known IPv6 prefix (64:ff9b::/96 in our case). [Tayga](http://www.litech.org/tayga/), an open-source NAT64 daemon running on all our hypervisors, translates packets with a destination within the /96 to the proper IPv4 target. The result is that any VM can access any IPv4 or IPv6 domain!

You can find out more about NAT64 in [RFC6147](https://tools.ietf.org/html/rfc6147).

<img src="../thumbnails/example.png" alt="example image">

On ingress, we have a few options for compatibility with IPv4. The first is an SSH jump box with an egress filter for our VM ranges. Users can authenticate to the jump box, then their VM, to allow for easy SSH access for management.

Our out-of-band management console is also dual-stack and SSH-based. If your VM networking is broken, you can SSH into the serial port and fix the network configuration, irrespective of the address family.

We also have a reverse proxy built into the dashboard for HTTP and HTTPS. When creating a proxy, you specify your domain name and VM, and the proxy hosts will forward HTTP traffic by Host Header, and HTTPS by SNI. This allows you to host a web server on your VM that works with both HTTP and HTTPS, and terminate TLS directly on your machine as if it had IPv4 to begin with.

We already have a few projects as early beta testers. If you're interested in trying out a brand new AArch64-based virtualization platform, please [reach out](https://aarch64.com/contact)!

##### Please take the opportunity to [follow us on Twitter](https://twitter.com/fosshostorg) and share this web page with educational groups, Arm fans, and like-minded individuals.
