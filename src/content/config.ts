import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const menuCollection = (name: string) => defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  big_bubble: menuCollection("big-bubble"),
  pancakes: menuCollection("pancakes"),
  crepes_sucrees: menuCollection("crepes-sucrees"),
  yaourts_glaces: menuCollection("yaourts-glaces"),
  cafes: menuCollection("cafes"),
  thes: menuCollection("thes"),
  boissons: menuCollection("boissons"),
  smoothies: menuCollection("smoothies"),
  milkshakes: menuCollection("milkshakes"),
};
