---
title: 'Comparison of remote service access services'
created: 2024-11-01 11:10:11
updated: 2024-11-01 11:10:11

description: |
  Busnesses, especially large ones, can afford to provide security infrastructure that lets them provide
  secure access to their digital services. For small busnesses and non-professional uses however, while
  still possible to do, it can be daunting. This article examines the various options open to people who
  may wish to provide secure access to services at minimal cost and complexity.
draft: false
tags: ["remote", "remote access", "security", "vpn", "cloud"]
category: security
author: 'Julian Knight'

#subtitle: A subtitle
#image:
#  src: 'https://docs.astro.build/assets/rose.webp'
#  alt: 'The Astro logo on a dark background with a pink glow.'
#language: en
#series:
#  name: 'My Series'
#  number: 1
---

> [!WARNING] Disclaimer
> Information provided here is only my own view. It must not be treated as professional guidance.
>
> Specifically, I take no responsibilities for issues or loss if you use this information.

> [!NOTE]
> This article is currently a stub and will be expanded as time permits.

In this article (which I will likely update from time-to-time), I will cover the following remote service access tools:

* Cloud services
  * Cloudflare Zero Trust
  * Tailscale
  * NGROK
* On-premise services
  * Virtual Private Networks (VPN's)
  * Proxy/Security services

Please [let me know](https://github.com/TotallyInformation/newblog/issues) if there is another service you think should be covered here.

## Cloud services

These are services run by 3rd-party vendors that you configure for your own use. The important thing to remember is that you MUST trust the vendor because they are acting as a man-in-the-middle between your Internet-connected users and your private services.

Also note that these are not VPN's in any traditional sense. They all use a small server service that runs in your local network that facilitates access. As such, they also do not require local firewall changes. This makes them typically much easier to set up than on-premise services.

### Cloudflare Zero Trust

TBC

### Tailscale



### NGROK

TBC

## On-premise services

On-premise services are applications you run on your own site and infrastructure as opposed to running in a vendor cloud platform.

### Virtual Private Networks

VPN's connect two or more **_TRUSTED_** networks together into a single network. It is considered "virtual" because the VPN is overlayed on one or more **_UNTRUSTED_** network (typically the Internet).

The critical thing to remember about VPN's is that the whole network can only ever be as secure as the **_WEAKEST_** link.

For example, if you extend your VPN to a laptop and that laptop is left exposed somewhere or is compromised by malware, _your whole network is potentially exposed_.

For this reason I strongly advise avoiding VPN's unless you really know what you are doing and have the resources to properly configure and maintain both the network and _all_ of the devices connected to it.

### Proxy and security services

TBC
