import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Footwear Design',
      'Product Design',
      'Woodworking',
      'Selected Work',
    ]),
    year: z.number(),
    heroImage: z.string(),
    heroVideo: z.string().optional(),
    summary: z.string(),
    order: z.number(),
    featured: z.boolean().default(true),
    tools: z.array(z.string()).optional(),
    client: z.string().optional(),
  }),
});

export const collections = { projects };
