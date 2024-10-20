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
    schema: z.object({
        title: z.string().max(80),
        created: z.date().transform((str) => new Date(str)),
        updated: z.date().transform((str) => new Date(str)),

        description: z.string().optional(),

        author: z.string().max(50).default("Julian Knight"),
        language: z.enum(['en', ]).default('en'),

        category: z.string().optional(),
        draft: z.boolean().optional(),
        image: z.object({
            src: z.string().url(),
            alt: z.string().max(80),
        }).optional(),
        series: z.object({
            name: z.string().max(80),
            index: z.number(),
        }).optional(),
        subtitle: z.string().max(80).optional(),
        tags: z.array(z.string()).optional(),
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
