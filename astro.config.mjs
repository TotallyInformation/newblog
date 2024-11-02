import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import remarkFlexibleContainers from 'remark-flexible-containers'
import remarkObsidianCallout from 'remark-obsidian-callout'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

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
            [remarkFlexibleContainers, {
                /* Custom containers using `::: [type] [title]`
                   https://github.com/ipikuka/remark-flexible-containers
                 */
                title: (type, title) => {
                    return `${type}${title ? `: ${title}` : ''}`
                },
            }],
            [remarkObsidianCallout, { 
                /** Using my own custom version. `> [!NOTE]`, etc.
                 *  https://github.com/escwxyz/remark-obsidian-callout
                 *  https://github.com/TotallyInformation/remark-obsidian-callout-fixed
                 *  Only use note, tip and warning to overlap with gitub, obsidian and docsify
                 *  obsidian://open?vault=Obsidian%20Vault&file=Programming%2Fuibuilder%2FDocs%20-%20Alerts%20%26%20Callouts
                 */
            }],
        ],
        rehypePlugins: [
            rehypeSlug, [
                rehypeAutolinkHeadings, {
                    /* Makes MD headings into links
                       https://github.com/rehypejs/rehype-autolink-headings
                     */
                    behavior: 'wrap',
                    // content: {
                    //     type: 'element',
                    //     tagName: 'i',
                    //     properties: {},
                    //     children: [{type: 'text', value: ' 🔗'}]
                    // },
                    headingProperties: {
                        class: 'linkedheading'
                    },
                }
            ],
        ],
    },
});
