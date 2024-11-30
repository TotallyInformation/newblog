---
title: "Astro: How to output a paginated list of article summaries"
description: |
  While the Astro docs talk about pagination, it is buried in amongst other things and hard to comprehend at the start.
created: 2024-10-21 19:58:19
updated: 2024-11-23 13:03:57
tags:
  - astro-v4
  - how-to
category: astro
---

When you have a lot of data to display, it is common to want to limit how much is shown on a single page. Partly for readability and partly for efficiency and speed of the web pages.

Astro supports pagination from data collections out of the box. However, it is not well documented in a way that someone just starting out with Astro could get their heads around.

The secrets first lie in understanding Astro dynamic routing. This is where you create an Astro page component with an id in square brackets such as `[page].astro`, `[...slug].astro`, etc. In these cases the Astro build process creates a new page for each entry. In the case of `[...slug]`, that is for a single collection entry. In the case of `[page]` or `[...page]`, that is for a page of collection items.

## Example 

Here is an example from this site. This page appears in `/src/pages/articles/[page].astro`. The articles list is a bit unusual in that I list articles from multiple collections (the knowledgebase and the general blog post collections). There are similar pages for the individual collections and further pages for categories and tags.

```astro title="/src/pages/articles/[page].astro"
---
/** Articles/Posts index page */

import siteInfo from '@/site-info.json';
// Page metadata from a static site configuration data file
const pageMeta = siteInfo.pages.filter( (pg) => pg.path === new URL(Astro.request.url).pathname)[0] ?? {};
pageMeta.path = new URL(Astro.request.url).pathname
// Allows us to locally override the config data file
pageMeta.title = "All Articles";
pageMeta.subtitle = "All knowledge and general articles by date (newest first)";

import BaseLayout from '@/layouts/BaseLayout.astro'
import ArticlesList from '@/components/ArticlesList.astro';
import { getAllArticles } from '@/utilModules/getCollections.mjs'

import type { GetStaticPaths } from 'astro';

// Exporting this makes it available to the getStaticPaths function below
export const articleListSize = siteInfo.articleListSize ? siteInfo.articleListSize : 5;

// Pass the merged list of articles for the selected collections to the paginate method
export const getStaticPaths: GetStaticPaths = async ({ paginate }) => {
    // Gets the merged and sorted list of articles
    const posts = await getAllArticles(['posts', 'kb'])
    // Returns the list wrapped in paginated chunks - becomes available to this page as Astro.props.page
    return paginate(posts, { pageSize: articleListSize });
};

// Reference the paginated list from above
const page = Astro.props.page;

---
<BaseLayout frontmatter={pageMeta}>
    <ArticlesList page={page} label={pageMeta.subtitle} LabelTag="h2" />
</BaseLayout>
```

The actual list of articles to process is derived from a separate module and the list is displayed using a separate Astro component.

## `[page].astro` vs `[...page].astro`

`[page].astro` will produce `/articles/1`, `/articles/2`, etc. but it will not produce the default index page`/articles/`. To make up for this, you can use a simple `index.astro` page that redirects to `/articles/1` in the same folder.

`[...page].astro` will produce `/articles/`, `/articles/2`, etc but it will not produce `/articles/1`. In this case create a redirect astro page as `1.astro` in the same folder.

## Data produced by the paginate method

The `paginate` method used in `getStaticPaths` automatically wraps your collection of articles with some additional data to allow you to display forward/backward, etc navigation through the list. It also lets you set the number of articles in each page. It calculates the number of pages needed and creates URL's to access them.

```
{
    data: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    start: 0,
    end: 9,
    size: 10,
    total: 13,
    currentPage: 1,
    lastPage: 2,
    url: {
      current: '/articles/1',
      next: '/articles/2',
      prev: undefined,
      first: undefined,
      last: '/articles/2'
    }
  }
}
```

Each of the `[Object]` entries is a single collection entry for the current page. In the above case, the page size has been set to 10 so there are 10 articles in the current page which is the initial page and therefore that are no previous or first url entries.
