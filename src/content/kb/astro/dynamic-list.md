---
title: "Astro: How to create a dynamic list in an Astro component"
created: 2024-10-20 15:54:55
updated: 2024-11-23 13:03:57
tags:
  - astro
category: astro
---

```astro
---
import siteInfo from '../site-info.json';

const pathname = new URL(Astro.request.url).pathname;
const pages = siteInfo.pages;
---
<nav class="nav-main">
    <ul>
        {pages.map(page => (
            <li class={pathname === page.path ? "active" : ""}><a href={page.path}>{page.name}</a></li>
        ))}
        <slot />
    </ul>
</nav>
```
