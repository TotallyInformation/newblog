---
title: 'Comparison of remote service access services'
created: 2024-11-01 11:10:11
updated: 2024-11-01 17:06:30

description: |
  Businesses, especially large ones, can afford to provide security infrastructure that lets them provide
  secure access to their digital services. For small businesses and non-professional uses however, while
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
> In addition, you should not treat anything on this page as a professional recommendation.
>
> Specifically, I take no responsibilities for issues or loss if you use this information.

> [!NOTE]
> This article is currently a stub and will be expanded as time permits.

In this article (which I will likely update from time-to-time), I will cover the following remote service access tools:

* Cloud services
  * Cloudflare Zero Trust
  * Tailscale
  * NGROK
  * Zerotier
  * Twingate
* On-premise services
  * Virtual Private Networks (VPN's)
  * Proxy/Security services

Please [let me know](https://github.com/TotallyInformation/newblog/issues) if there is another service you think should be covered here.

## Cloud services

These are services run by 3rd-party vendors that you configure for your own use. The important thing to remember is that you MUST trust the vendor because they are acting as a man-in-the-middle between your Internet-connected users and your private services.

Also note that these are not VPN's in any traditional sense. They all use a small server service that runs in your local network that facilitates access. As such, they also do not require local firewall changes. This makes them typically much easier to set up than on-premise services.

### Cloudflare Zero Trust/Cloudflare Access

[Website](https://www.cloudflare.com/en-gb/zero-trust/), [Documentation](https://www.twingate.com/docs/).

Cloudflare Zero Trust is a full edge-security solution that includes a number of components: Zero Trust Network Access (ZTNA), Cloud Access Security Broker (CASB), Secure Web Gateway (SWG), Firewall as a Service, WAN as a Service. This makes it significantly more comprehensive than the other products mentioned here. However, it can also be a little more complex to set up. 

Not all of the components need to be configured in order to implement remote service access, mostly just the ZTNA and SWG. Without configuration, many of the other features have sensible defaults so you still benefit from CF's extensive threat management.

Free tier:
* Up to 50 users. External authentication providers available.
* No limit on networks, endpoints or apps protected.
* Non-web support for SSH, VNC, RDP, TCP and UDP traffic.
* ZTNA, SWG.
* Limited CASB (2 read-only API integrations) and data loss protection (pre-defined policies).
* Access control using groups, geolocation, device posture, session duration, external API's, etc.
* Clientless (browser) access to web apps, SSH and VNC.
* Split tunnelling.
* Token authentication for services.
* Internal DNS support for local service access.
* Threat protection: filtering, AV inspection, threat intelligence, IP6 support, SSH proxy, network-level physical location policies (up to 3).
* Upload/download controls.
* Global interconnects (Cloudflare has one of the largest global networks).
* Full DNS integration - especially when using CF for DNS.
* [And a lot more](https://www.cloudflare.com/en-gb/plans/zero-trust-services/).

Paid tiers: Pay-as-you-go US$7 per user per month. Contract plans.

### Tailscale

Node-RED contributor Bart Butenaers has [a good write-up of using Tailscale with Node-RED](https://discourse.nodered.org/t/tailscale/92474/21).

### NGROK

TBC

### Zerotier

TBC

### Twingate

[Website](https://www.twingate.com), [Documentation](https://www.twingate.com/docs/).

> [!QUOTE]
> Keep private resources and internet traffic protected with Zero Trust security tools built for the modern world of work.

Free tier:
* Up to 5 users. Up to 5 devices per user. 1 admin user.
* Up to 10 remote networks. Up to 20 resources (individual network addresses).
* MacOS, Windows, Linux, and iOS, Android
* Enterprise peer-to-peer connections
* Split tunneling
* Conditional access controls (network and resource)
* MFA support. Biometrics & security keys via WebAuthn.

Paid tiers at US$5 or $10 per user per month

## On-premise services

On-premise services are applications you run on your own site and infrastructure as opposed to running in a vendor cloud platform.

### Virtual Private Networks

VPN's connect two or more **_TRUSTED_** networks together into a single network. It is considered "virtual" because the VPN is overlayed on one or more **_UNTRUSTED_** network (typically the Internet).

The critical thing to remember about VPN's is that the whole network can only ever be as secure as the **_WEAKEST_** link.

For example, if you extend your VPN to a laptop and that laptop is left exposed somewhere or is compromised by malware, _your whole network is potentially exposed_.

For this reason I strongly advise avoiding VPN's unless you really know what you are doing and have the resources to properly configure and maintain both the network and _all_ of the devices connected to it.

### Proxy and security services

TBC
