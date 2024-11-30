---
title: What needs doing on this website
description: |
  As this website is DIY built using Astro and my own layouts, components,
  and styles, there is rather a lot to create and finesse. This page documents
  what is left to do.
created: 2024-10-26 17:16:38
updated: 2024-11-23 13:28:12
tags:
  - astro-v4
  - website
  - development
  - web-development
  - config
  - to-do
category: astro
---

## General

* Category/tag descriptions metadata
* Related posts
* In scripts/fetchSoFlair.mjs, allow for other author names
* Consider replacing default code formats with Prism
* Consider fallback site image/alt in site-info.json and PageMeta
* Consider moving to [rehype-callouts](https://github.com/lin-stephanie/rehype-callouts)
* Consider allowing custom banner images - would need to add new frontmatter

## Content

### **NEW**: Authors

* [ ] Make page profile links dependent on matching author meta
* [ ] Add author meta types available to page meta
* [ ] Get author additional meta from Authors content

### Article pages

* Add status to frontmatter and show on page
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

### PageFooter

* Move inline SVG to files

### ThemeChanger

* Consider moving theme-switcher to the the footer
* Change from sun/moon & theme switch to a cog containing theme switch and other controls such as colour, maybe sizing, font, etc.
