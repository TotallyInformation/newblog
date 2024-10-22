---
title: 'JavaScript: Async Loops'
created: 2024-10-20 19:43:49
updated: 2024-10-20 19:43:54

description: |
  array.forEach does not work as expected when the callback is async, we need to work around that.
draft: true
tags: ["javascript"]
category: 'Web Development'

#subtitle: A subtitle
#author: 'Astro Learner'
#image:
#  src: 'https://docs.astro.build/assets/rose.webp'
#  alt: 'The Astro logo on a dark background with a pink glow.'
#language: en
#series:
#  name: 'My Series'
#  number: 1
---

Remember, you cannot use an `array.forEach` when the callback is async unless you don't need to wait for it to finish.

Instead use a normal `for (const x of y) { ... }`.
