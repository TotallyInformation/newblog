---
title: "SITE: Markdown Test"
description: |
  Testing out what can be done in Astro Markdown
created: 2023-02-12 02:23:54
updated: 2024-11-23 13:03:57
author: Julian Knight
cover: "@/resources/brimham-rocks-1200x279.jpg"
coverAlt: Picture of Brimham Rocks, Yorkshire, UK
tags:
  - astro-v4
  - testing
  - markdown
  - testing
category: astro
---

We can't get dynamic data on a plain markdown page, use an MDX page for that:

Published on: {frontmatter.updated}
{{$page.title}}

> [!Tip]
> Headings have auto-links - hover over them to see them.

## GFM

### Autolink literals

www.example.com, https://example.com, and contact@example.com.

### Footnote

A footnote[^1]

[^1]: The bigger bit of the footnote.

```markdown
A footnote[^1]

[^1]: The bigger bit of the footnote.
```

### Strikethrough

~one~ or ~~two~~ tildes.

```markdown
~one~ or ~~two~~ tildes.
```

### Table

| a  | b  |  c |  d  |
| -  | :- | -: | :-: |
| a1 | b1 | c1 | d1  |

```markdown
| a  | b  |  c |  d  |
| -  | :- | -: | :-: |
| a1 | b1 | c1 | d1  |
```

### Tasklist

* [ ] to do
* [x] done

```markdown
* [ ] to do
* [x] done
```

### Expressive Code

```js title="my-test-file.js"
console.log('Title attribute example')

\\ ```js title="my-test-file.js"
```

```html
<!-- src/content/index.html -->
<div>File name comment example with hidden HTML comment</div>
```

```bash
echo "This terminal frame (bash) has no title"
```

```powershell title="PowerShell terminal example"
Write-Output "This one has a title! (powershell)"
```

```js {1, 4, 7-8}
// Line 1 - targeted by line number
// Line 2
// Line 3
// Line 4 - targeted by line number
// Line 5
// Line 6
// Line 7 - targeted by range "7-8"
// Line 8 - targeted by range "7-8"

// Highlighted lines {1, 4, 7-8}
```

### Obsidian/GitHub Callouts

We only use NOTE, TIP, and WARNING to be in keeping with all of Obsidian, GitHub, Docsify and Typora.

> [!NOTE] This is a custom title
> This is a note

> [!TIP]
> This is a tip

> [!WARNING]
> This is a WARNING

> A blockquote, not a callout

But the plugin supports:

* **note**: pencilIcon,
* **tip**/hint/important: flameIcon,
* **warning**/attention/caution: alertTriangleIcon,

#

* abstract/summary/tldr: clipboardListIcon,
* info: infoIcon,
* todo: checkCircleIcon,
* success/check/done: checkIcon,
* question/help/faq: helpCircleIcon,
* failure/missing/fail: xIcon,
* danger/error: zapIcon,
* bug: bugIcon,
* example: listIcon,
* quote/cite: quoteIcon,


### Containers

Note that these may not yet be properly styled...

::: warning title
My paragraph with **bold text**
:::

::: info {section#foo.myclass} Title Of Information {span#baz.someclass}
Some content

And some more
:::

