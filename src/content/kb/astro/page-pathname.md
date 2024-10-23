---
title: 'Astro: How to get the URI path for the current page'
created: 2024-10-20 15:54:55
updated: 2024-10-20 15:55:00
tags: ["astro"]
category: astro
---

```javascript
const pathname = new URL(Astro.request.url).pathname;
```