import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
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
