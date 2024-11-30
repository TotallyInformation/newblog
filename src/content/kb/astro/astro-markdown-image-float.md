---
title: Styling images in Astro content markdown files
created: 2024-11-08 18:19:41
updated: 2024-11-23 13:03:57
description: |
  Markdown has no native way to pass styles to elements. This presents a workaround specifically for styling images. Mostly used to add a class for floating the image left or right on the page.
draft: false
tags:
  - markdown
  - style
  - css
  - formatting
category: astro
author: Julian Knight
---

> [!Note]
> Thanks are given to Goetz Buerkle for documenting this workaround.
> 
> [How to control image positioning and alignment with Markdown in Astro](https://www.readrepeat.net/tech/markdown-image-positioning-alignment-astro/)

This is an easy, if hacky workaround.

Simply wrap the image link in `<span></span>` HTML tags. You can add classes and manual styles to the span.

I've used CSS styles like this:

```css
span.imgright {
    display:block;
    float: right;
    border:1px solid silver;
    margin:.3rem;
    padding:0;
}
```

To float an image to the right of the page, allowing the text to wrap around it.

```markdown
<span class="imgright">![copilot vscode editor prompt](./copilot-ctrl-i.png)</span>
```

Obviously, this could be used with other block types as well.

> [!Tip]
> The `&lt;span>` tag appears to be allowed in Astro's Markdown, you cannot use `&lt;div>`.
