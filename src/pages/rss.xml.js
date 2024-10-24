import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import siteInfo from '@/site-info.json';
import { getAllArticles } from '@/utilModules/getCollections.mjs'

// export async function GET(context) {
//     const allItems = await getAllArticles();
//     // console.log('[/src/pages/rss.xml.js] allItems length: ', allItems.length, allItems[0])
//     // const { Content, headings } = await allItems[0].render();
//     // console.log('[/src/pages/rss.xml.js] allItems html: ', Content)

//     const rssItems = allItems.map((post) => {
//         // const { Content, headings } = await post.render();
//         const cats = post.data?.category ?? []
//         const tags = post.data?.tags ?? []
//         const allCats = cats.concat(tags)
//         return {
//             title: post.data.title,
//             pubDate: post.data.updated,
//             description: post.data.description ?? post.data.title,
//             link: post.data.path,
//             categories: allCats,
//             author: post.data?.author ?? siteInfo.author,
//             // content: {<Content />}
//         }
//     });
//     console.log('[/src/pages/rss.xml.js] rssItems length: ', rssItems.length, rssItems[0])
//     return rss({
//         title: `${siteInfo.title} | Latest Articles`,
//         description: siteInfo.description,
//         site: context.site,
//         customData: `<language>en-gb</language>`,
//         items: rssItems,
//     });
// }

export async function GET(context) {
    const allItems = await getAllArticles();
    return rss({
        title: `${siteInfo.title} | Latest Articles`,
        description: siteInfo.description,
        site: context.site,
        customData: `<language>en-gb</language>`,
        items: allItems.map((post) => ({
            title: post.data.title,
            pubDate: post.data.updated,
            description: post.data.description ?? post.data.title,
            link: post.data.path,
            // categories: allCats,
            author: post.data?.author ?? siteInfo.author,
        }))
    });
}
