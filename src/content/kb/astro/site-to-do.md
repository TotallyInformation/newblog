---
title: 'What needs doing on the site?'
description: |
    As the site is DIY built from scratch with the help of Astro, there is a lot to do to make the site robust, looking good, and usable.
created: 2024-10-21 19:21:40
updated: 2024-10-21 19:36:15
tags: ["config", "to-do"]
category: astro
---

## General

* [ ] Better inline code - not enough differential from standard text.
* [ ] Better font - not liking the current font.
* [ ] Possibly increase the line spacing slightly.
* [ ] Add metadata descriptions for collections, categories and tags.

## Collections

* [ ] Add authors collection

## Collection (Article) Listings

* [ ] Add frontmatter image support.
* [ ] Add category/tag filters to `getAllArticles` module.

### Alternative views

* [ ] Categories - a listing of categories + listings of articles for each category
* [ ] Tags - a listing of tags + listings of articles for each tag
* [ ] Year/month listings

## Article Pages

* [ ] Add Date to metadata.
* [ ] Add frontmatter image support.
* [ ] Add "Back to xxxx" links - e.g. back to categories - may need client-side script.
* [ ] Add Heading links to each `hx` heading.
* [ ] Add a page toc (astro-custom-toc?).
* [ ] Add Page Previous/next

### Markdown

* Better callouts

## Page footer

* [ ] Use article Date to update copyright date.


-----------------------------

## Ideas

### Possible plugins

* [`astro-expressive-code](https://github.com/expressive-code/expressive-code/tree/main/packages/astro-expressive-code) - Extended code blocks with headings, etc.

#### Remark/Rehype

* Diagrams
  * https://github.com/remcohaszing/remark-mermaidjs
  * [remark-simple-plantuml](https://github.com/akebifiky/remark-simple-plantuml) — turn PlantUML code blocks to images
  * remark-graphviz


-----------------------------

## Inspiration

### Themes & Templates

* [Starlight](https://starlight.astro.build/getting-started/) - Official Astro documentation template

### Course & Articles

* [Understanding Astro](https://understanding-astro-webook.vercel.app)
