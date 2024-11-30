---
title: "JavaScript: Async Loops"
created: 2024-10-20 19:43:49
updated: 2024-11-23 13:03:57
description: |
  array.forEach does not work as expected when the callback is async, we need to work around that.
draft: true
tags:
  - javascript
category: Web Development
---

Remember, you cannot use an `array.forEach` when the callback is async unless you don't need to wait for it to finish.

Instead use a normal `for (const x of y) { ... }`.
