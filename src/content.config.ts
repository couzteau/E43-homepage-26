import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    location: z.string().default('Engine 43'),
  }),
});

export const collections = {
  events: eventsCollection,
};
