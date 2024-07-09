import { defineCollection, z } from "astro:content";

// Collection pour l'identité du site
const siteIdentityCollection = defineCollection({
  type: "content",
  schema: z.object({
    site_author: z.string(),
    site_dev: z.string(),
    site_dev_url: z.string(),
    site_title: z.string(),
    site_logo: z.string(),
    site_logo_alt: z.string(),
    site_address: z.string(),
    site_email: z.string(),
    site_phone: z.string(),
    google_maps: z.string(),
    image_maps: z.string(),
    site_description: z.string(),
    site_keywords: z.string(),
    calendly_link: z.string(),
  }),
});

// Collection pour les horaires d'ouverture
const openingHoursCollection = defineCollection({
  type: "content",
  schema: z.object({
    day: z.string(),
    opens: z.string(),
    closes: z.string(),
  }),
});

// Collection pour les réseaux sociaux
const socialMediaCollection = defineCollection({
  type: "content",
  schema: z.object({
    platform: z.string(),
    icon: z.string(),
    url: z.string(),
  }),
});

// Collection pour "Pourquoi nous choisir" et les statistiques
const whyChooseUsCollection = defineCollection({
  type: "content",
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    button_link: z.string(),
    button_text: z.string(),
    button_aria_label: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })),
    reasons: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      text: z.string(),
    })),
    stats: z.array(z.object({
      icon: z.string(),
      number: z.string(),
      desc: z.string(),
    })),
  }),
});

// Collection pour les articles
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

// Collection pour les menus
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
  siteIdentity: siteIdentityCollection,
  openingHours: openingHoursCollection,
  socialMedia: socialMediaCollection,
  whyChooseUs: whyChooseUsCollection,
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
