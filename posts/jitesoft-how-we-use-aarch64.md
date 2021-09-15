---
title: How we use AArch64 - Jitesoft
date: September 15, 2021 04:30 PM
summary: How Jitesoft runs docker builders on IPv6 AArch64 machines
author: bruno
thumbnail: how-we-use-aarch64/pipeline-tess.webp
---

#### We invited our tenants to write about using our platform for a blog post series we named "How we use AArch64". This will give an insight into how our platform is used and how the projects who accepted our invite work

I was recently invited by AArch64, a provider where my company has FOSS projects hosted, to write a short blog post about my project and usage at their platform, something I gladly do!

AArch64 is a part of the [Fosshost](https://fosshost.org/). Fosshost is a non-profit organisation that provides open-source projects with both *x86_64* and *aarch64* machines. My company, [Jitesoft](https://jitesoft.com/), uses both platforms to host a few of the GitLab runners that build our docker images.

## AArch64/ARM64

AArch64 is a common name for the 64-bit version of the ARM architecture. All Jitesoft Docker images are built for both *arm64* and *x86_64*  - and, if possible, others as well.  

When we build an image with compiled binaries, we try to use the correct architecture for the builders. By doing that, we don't have to set up a toolchain, and we don't have to use *Qemu* or similar software to emulate the builds. When the binary is built, we mount it with the help of *buildkit* and copy it over to the image during the image build phase. This way, we can keep the image layers small without having to squash them and allowing us to build for many platforms.

<img src="../thumbnails/how-we-use-aarch64/pipeline-php.webp" alt="Pipeline for jitesoft/php docker images">

Initially, we built them all during the image creation, with *x86_64* machines only, but compiling larger projects using *Qemu* (which is, or at the least was at the time, single-core) made the compile times span over 10+ hours per architecture for some projects. Ten hours compile time was not feasible, so real Arm-based hardware was required.

## The before times

When we started to build binaries for the ARM architecture, on real Arm-based hardware, the CI runners were deployed to machines at Scaleway (back then, they had pretty cheap Arm-based machines), but they ended this offering about a year ago. Linaro accepted us as a tenant on their ARM labs for a while, but they discontinued it a while back as well.

When we lost our runners at Linaro, we had to find something new, which was hard. Arm-based providers are not always cheap, and most of the ones we evaluated were quite a bit over our budget for an open-source project. We didn't want to stop building the docker images, so a couple of Raspberry Pis were bought to run as dedicated CI servers.

RPi's are pretty good for their price and size, but they are far from as powerful as a "real" machine, so the compilations were again taking way too much time. And then AArch64.com was launched!

## Working with AArch64 (and ipv6)

The machine we run at AArch64.com is a lovely 8 core, 16GB RAM machine. The storage is sparse but, with a simple cronjob to clear the docker images stored on disk every now and then, that's not an issue. But, we are using an IPv6 only network. I could have requested an IPv4 from Fosshost, but seeing that the machine doesn't need an IP (more than for ssh), I figured it would not be necessary. Taking up an IPv4 for something that will just run without any access to the external network is not something one should do.

The machines themselves are already set up to use Cloudflares' IPv6 DNS, so package downloading and such works out of the box! On our build servers, we only install the most necessary software: *docker*, the *buildx docker-cli plugin*, *gitlab-runner* (as [GitLab](https://gitlab.com) is where we host our code, run our CI and initially publish our images) and any required dependencies. IPTables is set up to allow any outgoing traffic and only accept SSH in.

I'm not used to working with IPv6 at all! I wasn't even aware of the fact that I didn't have IPv6 at home. If a machine uses ipv6 and your ISP does not support it, you might have to connect through a so-called "jump-host" (which AArch64.com provides!), which I figured out quickly thanks to the documentation on the platform. Running Docker with IPv6, though... that took a bit more work to figure out!

Some people use Docker and IPv6, but reading through the net made me feel that it's not something many people do. The steps to take are not extreme: the changes are made to the *docker daemon*, and some tweaks should be done to the firewall as well.  It's nothing complex, but without prior knowledge, it was a bit tricky!

First of all, the *docker daemon* has to be updated (create or edit the `/etc/docker/daemon.json` file)

```json
{
    "ipv6": true,
    "fixed-cidr-v6": "fd5f:a3e1:47c8:c8f4::/64"
}
```

The `ipv6: true` flag will enable IPv6 in *docker*, but we also have to set a CIDR for the *docker* network to use. The value you add there should be a private ipv6 range; use any you wish, or even the above, as it was randomly generated! The size of 64 might not be needed, but a few IP addresses are available, so it should be quite fine.

Now, by restarting the *docker daemon* (`systemctl restart docker`) the default network for *docker* should be using IPv6! This will enable IPv6 on the internal *docker* networks and for incoming/outgoing traffic.

Finally, we need to mask the traffic for *docker*. To do this, we need to add a postrouting rule on the IPv6 table, as docker does not do this itself:

```bash
ip6tables -t nat -A POSTROUTING -s fd00::/80 ! -o docker0 -j MASQUERADE
```

A simple reconfigure of the iptables-persist (or installation) and we are ready to reboot if wanted!

## Final words

Our pipelines are set up to only share the *docker socket* on protected branches, branches only maintainers are allowed to merge and push to, so we allow our *docker* images to build privileged. This is unsafe if the builders are running on branches that are not protected. If you plan to do such things, make sure you read up on rootless docker and how that works, as it will allow you to configure docker without root privileges. Further, other OCI image builders do not require root, such as *podman*.

Protecting your servers and build environments against potential attacks is extremely important. If you are compromised and you accidentally publish images with malware or security holes, there are potentially thousands of people who might be at risk.

Building open-source is wonderful; the knowledge that people like and use the things you create is excellent. We are very grateful to Fosshost and the AArch64.com project for their contribution of server power to allow us to keep on doing it.

##### Would you mind taking the opportunity to [follow us on Twitter](https://twitter.com/aarch64org) and share this web page with educational groups, Arm fans, and like-minded individuals?
