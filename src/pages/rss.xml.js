import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Totally Information | Blog',
        description: 'All things related to Digital Technology and Information, and perhaps some social and moral commentary as well',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob(['./**/*.md', './**/*.mdx', '!./**/_*.md', '!./**/_*.mdx',])),
        customData: `<language>en-gb</language>`,
    });
}
