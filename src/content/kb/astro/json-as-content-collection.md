---
title: 'How to use a JSON file as an Astro content collection'
created: 2024-11-19 17:29:58
updated: 2024-11-19 17:29:58

description: |
  Learn how to use Astro Markdown to render Markdown content within a JSON file, as Astro does not automatically render JSON files in content collections.
draft: false
tags: ["astro", "markdown", "json", "content-collection", "development"]
category: astro
author: 'Julian Knight'

#cover: './{Filename}.png'
#coverAlt: 'Generic Image'
#subtitle: A subtitle
#language: en
#series:
#  name: 'My Series'
#  number: 1
---

To render Markdown content to HTML, we can use an Astro plugin called [Astro Markdown](<https://github.com/astro-community/md).

To get the best integration, after installing with `npm install @astropub/md --save-dev` change the `astro.config.mjs` file to include the Astro Markdown plugin:

```javascript
import { defineConfig } from 'astro/config';
import markdownIntegration from '@astropub/md'

export default defineConfig({
  plugins: [
    markdownIntegration(),
  ]
});
```

In a .astro file, you can now use the `md` tag to render Markdown content:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { getCollection } from 'astro:content';
import { markdown } from '@astropub/md';

// Get your data collection - this is defined in /src/content/config.ts with a collection type of `data`
// The actual data is in timeline[0].data
const timeline = await getCollection('it-timeline');

---
<BaseLayout frontmatter={pageMeta}>
    <ul>
    {timeline[0].data.map((decade) => (
        <li key={decade.decade}>
            <h3>{decade.decade}</h3>
            <ul>
                {decade.events.map(async (event) => (
                    <li key={event.year}>
                        <!-- This is where we are rendering the Markdown to HTML -->
                        <strong>{event.year}:</strong> {await markdown.inline(event.markdown)}
                    </li>
                ))}
            </ul>
        </li>
    ))}
    </ul>
</BaseLayout>
