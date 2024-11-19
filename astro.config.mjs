import { defineConfig } from 'astro/config';

import fs from 'fs';
import path from 'path';

import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import remarkFlexibleContainers from 'remark-flexible-containers'
import remarkObsidianCallout from 'remark-obsidian-callout'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import {h} from 'hastscript'
import markdownIntegration from '@astropub/md'

// ❌ import remarkAdmonitions from 'remark-admonitions'

/**
 * Recursively gets all .md and .mdx files in a directory.
 * @param {string} dir - The directory to search.
 * @returns {string[]} - An array of file paths.
 */
const getAllMarkdownFiles = (dir) => {
    const files = fs.readdirSync(dir)
    let markdownFiles = []

    files.forEach(file => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)

        if (stat.isDirectory()) {
            markdownFiles = markdownFiles.concat(getAllMarkdownFiles(filePath))
        } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
            markdownFiles.push(filePath)
        }
    })

    return markdownFiles
}

/**
 * Generates a list of new content pages.
 * @returns {Promise<void>}
 * @throws {Error} If there is an issue reading the content directory or writing the output file.
 */
const generateNewContentList = async () => {
    const contentDir = path.join(process.cwd(), 'src/content')
    const date = new Date().toISOString().split('T')[0]
    const outputFilePath = path.join(process.cwd(), `src/generated/new-${date}.json`)
    const previousOutputFilePath = path.join(process.cwd(), 'src/generated/previousContentList.json')

    const files = getAllMarkdownFiles(contentDir)
    const contentList = files.map(file => ({
        title: path.basename(file, path.extname(file)),
        url: file.replace(process.cwd(), '').replace(/\\/g, '/').replace('/src/content', '').replace(/\.[^/.]+$/, '')
    }))

    let previousContentList = []
    if (fs.existsSync(previousOutputFilePath)) {
        previousContentList = JSON.parse(fs.readFileSync(previousOutputFilePath, 'utf-8'))
    }

    const newContentList = contentList.filter(
        content => !previousContentList.some(prevContent => prevContent.url === content.url)
    )

    let existingNewContentList = []
    if (fs.existsSync(outputFilePath)) {
        existingNewContentList = JSON.parse(fs.readFileSync(outputFilePath, 'utf-8'))
    }

    const updatedNewContentList = [...existingNewContentList, ...newContentList]

    fs.writeFileSync(outputFilePath, JSON.stringify(updatedNewContentList, null, 2))
    fs.writeFileSync(previousOutputFilePath, JSON.stringify(contentList, null, 2))
}

/** A quick and dirty Astro integration to run hooks.
 * astro:config:setup
 * astro:config:done
 * astro:server:setup
 * astro:server:start
 * astro:server:done
 * astro:build:start
 * astro:build:setup
 * astro:build:generated
 * // astro:build:ssr
 * astro:build:done
 */
const tiHooks = {
    name: 'ti-hooks',
    hooks: {
        'astro:build:start': async () => {
            console.log('[astro:build:start] >> ', process.cwd, process.env)
        },
        // 'astro:build:done': async () => {
        //     console.log('[astro:build:done] Generating new content list')
        //     await generateNewContentList()
        // }
    }
}

// https://astro.build/config
export default defineConfig({
    site: "https://www.totallyinformation.net",
    scopedStyleStrategy: 'class',

    integrations: [
        tiHooks,
        // astro-expressive-code - https://expressive-code.com/reference/configuration/
        expressiveCode(),
        // Official MDX support
        mdx(),
        // @astrojs/sitemap - outputs /sitemap-index.xml
        sitemap({
            filter: (page) => page !== 'https://www.totallyinformation.net/tests/',
            // serialize: (item) => {
            //     console.log(item)
            //     return item
            // },
        }),
        markdownIntegration(),
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
                    headingProperties: (node) => {
                        return {
                            class: 'linkedheading',
                            title: node.tagName,
                            'data-level': node.tagName[1],
                        }
                    },
                }
            ],
        ],
    },
});
