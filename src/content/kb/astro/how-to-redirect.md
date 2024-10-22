---
title: 'Astro: How to redirect a route'
created: 2024-10-21 16:26:07
updated: 2024-10-21 16:52:46

description: |
  Sometimes you need to redirect a page or sub-section of a site from one place to another. While this is often done in the web server configuration,
  you may want to do it in Astro.
draft: true
tags: ["astro-v4", "routing", "redirect", "how-to"]
category: astro

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

One specific Astro use-case is where you are using dynamic routing for the pages in a paginated list of entries. 

In this case, you use a file named `[page].astro` which, in conjunction with the [`paginate()`](https://docs.astro.build/en/reference/api-reference/#paginate) method, dynamically creates pages from 1 to the maximum number needed.

However, that leaves you without an index page for that part of the website.

You could use `[...page].astro` instead, this creates an index page but no page `/1` which is inconsistent.

So instead, use the first form and create an `index.astro` page containing:

```astro
---
/** Redirect to page 1 */
const path = new URL(Astro.request.url).pathname
const redirectToUrl = `${path}1`
// console.log('[/src/pages/articles/indext.astro] redirect', redirectToUrl)
---
<head>
    <meta http-equiv="refresh" content={ `0; url=${ redirectToUrl }` } />
</head>
```

Which simply forces the browser to change location immediately. 

Alternatively, use the 2nd form and create a `1.astro` file that does the redirect.
