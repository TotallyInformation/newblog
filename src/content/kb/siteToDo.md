---
title: 'What needs doing on this website'
description: |
  As this website is DIY built using Astro and my own layouts, components,
  and styles, there is rather a lot to create and finesse. This page documents
  what is left to do.
created: 2024-10-26 17:16:38
updated: 2024-11-01 17:07:56
tags: ["astro-v4", "website", "development", "web-development"]
category: astro
---

## General

* Category/tag descriptions metadata
* Search
* Related posts
* Site map (PageMeta)
* [ ] oEmbed and OpenGraph tags
* Add article share buttons: https://developer.x.com/en/docs/x-for-websites/tweet-button/overview
* Consider replacing default code formats with Prism
* Consider fallback site image/alt in site-info.json and PageMeta
* Consider moving to [rehype-callouts](https://github.com/lin-stephanie/rehype-callouts)

## Content

### **NEW**: Authors

### Article pages

* Collapsible sections
* ToC sidebar
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

### PageFooter

* Move inline SVG to files

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
