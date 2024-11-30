/** Produce a site-wide RSS feed
 * TODO
 * - Work out how to include content - probably requires Astro v5
 */

import rss, { getRssString } from '@astrojs/rss';
import siteInfo from '@/site-info.json';
import { getAllArticles } from '@/utilModules/getCollections.mjs'
// import { markdown } from '@astropub/md'

export async function GET(context) {
    const allItems = await getAllArticles();
    return rss({
        title: `${siteInfo.name} | Latest Articles`,
        description: siteInfo.description,
        site: context.site,
        customData: `<language>en-gb</language>`,
        items: allItems.map((post, i) => ({
            title: post.data.title,
            pubDate: post.data.updated,
            description: post.data?.description ?? post.data.title,
            link: post.data.path,
            // categories: allCats,
            author: post.data?.author ?? siteInfo.author,
        }))
    });
}
