---
title: 'What needs doing on this website'
description: |
  As this website is DIY built using Astro and my own layouts, components,
  and styles, there is rather a lot to create and finesse. This page documents
  what is left to do.
created: 2024-10-26 17:16:38
updated: 2024-10-29 16:51:49
tags: ["astro-v4", "website", "development", "web-development"]
category: astro
---

## General

* Category/tag descriptions metadata
* Search
* Related posts

## Content

### **NEW**: Authors

## Specific pages

### Home (index.astro)

* [x] Show latest 5 posts

### Article pages

* Collapsible sections
* [x] Heading anchors - still needs better config - using rehype-slug & rehype-autolink-headings
* Heading underline and colour
* ToC sidebar
* [x] Callouts - uses my custom version of remark-obsidian-callout - still needs tweaking
* [ ] Add reading time
* [ ] Allow mermaid
* [ ] Custom heading ids

## RSS Feeds

* Include full article content - but how?
* Consider per-tag/category feeds - how?
* Add page links to rss feeds

## Ongoing Stylesheet improvements

## Components needed or improvements

### PageHeader

* Fix for mobile sizing. [Ref](https://egghead.io/lessons/css-apply-aspect-ratio-sizing-to-images-with-css-object-fit?af=2s65ms)

### PageNav

* Multi-layer main nav bar
* Add search link
* Consider moving theme-switcher to the navbar (or maybe the footer)
* Fix mobile sizing

### PageMeta

* [x] Add author & updated date to left-hand side
* [x] Make tags list right-aligned

### ThemeChanger

* Change from sun/moon & theme switch to a cog containing theme switch and other controls such as colour, maybe sizing, font, etc.

### ArticlesListNav

* [x] Add some bottom margin
