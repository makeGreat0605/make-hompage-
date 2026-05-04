import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    endDate: z.string().optional(),
    image: z.string().optional(),
    badge: z.string().optional(),
    color: z.string().default('#ffffff'),
    textColor: z.string().default('#000000'),
  }),
});

export const collections = {
  'events': events,
};
