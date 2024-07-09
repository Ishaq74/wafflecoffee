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

const menuCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(),
    category: z.enum(["Gaufres et Crêpes", "Yaourts Glacés", "Cafés et Thés", "Boissons", "Smoothies et Milkshakes"]),
    description: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  menu: menuCollection,
};
