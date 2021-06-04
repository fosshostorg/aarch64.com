---
title: AArch64 budgeting system for fair resource usage
date: June 04, 2021 02:00 AM
summary: We have implemented a budgeting system, so our tenants can have fair resource usage on the platform
author: hampton
thumbnail: budgeting-system.jpg
---

To guarantee fair resource utilization by our tenants, we implemented a budgeting system on AArch64. Previously, our platform had no limit on the number of resources a project could use when creating virtual machines (VMs) during the beta period. A project would be able to, for example, spin up a fleet of 24vCore VMs across our whole cluster and eat up all the CPU and RAM.

When we initially started adding more tenants to AArch64 after the end of beta, we faced the question of what to do about this. Now that projects rely on the platform, we could not afford a single tenant to monopolize all the resources. To solve it, we initially disabled the ability for tenants to create their virtual machines and, instead, manually created the VMs for them as we do on our x86 offerings. The change was not ideal, as many users wanted to launch ephemeral virtual machines for their build jobs or tests.

As a remedy to this, we created the budgeting system. Each tenant gets assigned a certain amount of vCPU cores that they can use. The tenant can then allocate them how they wish, creating as many VMs as will fit within the vCPU limit.

For example, if a tenant gets a total of 6 vCores allocated, it can spin up a v1.small instance (2 vCPUs, 4GB RAM) and a v1.medium stance (4vCPUs, 8GB RAM). It could also swap out that v1.small with two v1.xsmalls (1 vCPU, 1GB RAM).

The budgeting system can also be used for ephemeral VMs, being created and destroyed at a whim. A tenant with 28 vCores allocated could plan on having a v1.2xlarge (24 vCPU 64GB RAM) instance for build jobs and then spin up v1.xsmall on the fly, using our API, for testing packages.

If the demand for more resources grows, tenants can [reach out](https://aarch64.com/contact) to us and have their vCPU budget increased.

##### Please take the opportunity to [follow us on Twitter](https://twitter.com/fosshostorg) and share this web page with educational groups, Arm fans, and like-minded individuals.
