/** Define Data Collections
 * TODO
 * - Default dates
 */

// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// .default(new Date())

// 2. Define your collection(s)
const templateCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        // Minimum required
        title: z.string().max(80),
        created: z.date().transform((str) => new Date(str)),
        updated: z.date().transform((str) => new Date(str)),
        // Recommended
        description: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),

        draft: z.boolean().optional(),
        author: z.string().max(50).default("Julian Knight"),
        language: z.enum(['en', ]).default('en'),
        cover: image().optional(),
        coverAlt: z.string().max(80).optional(),
        // image: z.object({
        //     src: z.string(), //.url(),
        //     alt: z.string().max(80),
        // }).optional(),
        series: z.object({
            name: z.string().max(80),
            index: z.number(),
        }).optional(),
        subtitle: z.string().max(80).optional(),

        // These are added dynamically at build-time, not to be included in entry frontmatter
        collection: z.string().optional(),
        // slug: z.string().optional(),
        path: z.string().optional(),
    }),
});
const postsCollection = templateCollection; // general articles
const kbCollection = templateCollection; // knowledgebase

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'posts': postsCollection,
  'kb': kbCollection,
};
