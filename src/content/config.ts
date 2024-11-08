/** Define Data Collections
 * TODO
 * - Default dates
 */

// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// .default(new Date())

const STATUSES = ["Complete", "Incomplete", "Draft", "TBC"] as const;

// TODO - Add lookups for categories and tags

// 2. Define your collection(s)
// https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema
// https://github.com/colinhacks/zod?tab=readme-ov-file#basic-usage

const categoriesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        category: z.string().max(50),
        title: z.string().max(50),
        description: z.string().optional(),
    }),
});

// Define a function to validate category based on the categories collection
const validateCategory = async (category: string) => {
    const categories = await import.meta.glob('/src/content/categories/*.md');
    const categoryTitles = Object.keys(categories).map((key) => key.split('/').pop()?.replace('.md', ''));
    return categoryTitles.includes(category);
};

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
        // category: z.string().optional().refine(async (category) => await validateCategory(category), {
        //     message: 'Invalid category, see the src/content/categories directory for valid categories',
        // }),
        tags: z.array(z.string()).optional(),

        draft: z.boolean().optional(),
        status: z.enum(STATUSES).default('Draft'),
        author: z.string().max(50).default("Julian Knight"),
        language: z.enum(['en',]).default('en'),
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
