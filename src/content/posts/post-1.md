---
title: 'Astro: Markdown Test'
description: |
  Testing out what can be done in Astro Markdown
created: 2023-02-12 02:23:54
updated: 2024-10-21 19:04:24
author: 'Julian Knight'
image:
    src: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro-v4", "testing", "markdown", "testing"]
category: astro
---
# My First Blog Post

Published on: {frontmatter.updated}
{{$page.title}}

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

## GFM

### Autolink literals

www.example.com, https://example.com, and contact@example.com.

### Footnote

A note[^1]

[^1]: Big note.

### Strikethrough

~one~ or ~~two~~ tildes.

### Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

### Tasklist

* [ ] to do
* [x] done

### Expressive Code

```js title="my-test-file.js"
console.log('Title attribute example')
```

```html
<!-- src/content/index.html -->
<div>File name comment example</div>
```

```bash
echo "This terminal frame has no title"
```

```powershell title="PowerShell terminal example"
Write-Output "This one has a title!"
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
```


### Containers

::: warning title
My paragraph with **bold text**
:::

::: info {section#foo.myclass} Title Of Information {span#baz.someclass}
Some content

And some more
:::

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
