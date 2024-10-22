/** Return entries from 1 or more collections. Sorted new->old. Optionally including drafts. */
import { getCollection } from 'astro:content';

/**
 * 
 * @param {Array<string>} collections Astro collections to include
 * @param {boolean} includeDraft If true, include draft entries. If false, include drafts for non-prod only
 * @returns {Promise<CollectionEntry>} Sorted collection (newest->oldest)
 */
export async function getAllArticles(collections = ['posts', 'kb'], includeDraft = false) {
    let allArticles = []
    for (const collection of collections) {
        let list
        try {
            list = await getCollection(collection, ( entry ) => {
                if (!entry.data.path) entry.data.path = `/${collection}/${entry.slug}` // make sure we have a path to use
                if (!entry.data.collection) entry.data.collection = collection

                if (includeDraft) return true
                else return import.meta.env.PROD ? entry.data.draft !== true : true;
            })
        } catch (e) {
            throw new Error(`[utilModules/getCollection.mjs] getCollection failed. ${e.message}`);
        }
        // console.log(collection, list.length)
        allArticles = allArticles.concat(list)
        // console.log(collection, list.length, allArticles.length)
    };
    // Sort on updated date - NEW to OLD
    return allArticles.sort( (a, b) => {
        // NB: updated dates are mandatory
        if (a.data.updated < b.data.updated) return 1
        else if (a.data.updated > b.data.updated) return -1
        else return 0
    })
    // }).slice(startPost, startPost + numPosts)
    // console.log(allArticles.length, {startPost, numPosts}, startPost + numPosts)
}
