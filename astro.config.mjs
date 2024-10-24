import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code'; 
import mdx from '@astrojs/mdx';
import remarkFlexibleContainers from 'remark-flexible-containers'
// import remarkObsidianCallout  from 'remark-obsidian-callout'
// ❌ import remarkAdmonitions from 'remark-admonitions'

// https://astro.build/config
export default defineConfig({
    site: "https://www.totallyinformation.com",
    integrations: [
        // astro-expressive-code - https://expressive-code.com/reference/configuration/
        expressiveCode(),
        // Official MDX support
        mdx(),
        // @astrojs/sitemap - outputs /sitemap-index.xml
        sitemap(),
    ],
    markdown: {
        remarkPlugins: [
            [remarkFlexibleContainers, { /* https://github.com/ipikuka/remark-flexible-containers */
                title: (type, title) => {
                    return `${type}${title ? `: ${title}` : ''}`
                },
            }],
            // [remarkObsidianCallout, { /* https://github.com/escwxyz/remark-obsidian-callout */ }],
        ]
    },
});
