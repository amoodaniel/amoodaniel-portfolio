import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);

// ─── Types ──────────────────────────────────────────────────────────────────

export type TopicCategory = 'technology' | 'ai' | 'living';

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  category: TopicCategory;
  excerpt: string;
  thumbnail: string | null;
  publishedAt: string;
}

export interface SanityPostFull extends SanityPost {
  body: unknown[]; // PortableText blocks
}

export interface CuratedRssEntry {
  rssLink: string;
  category: TopicCategory;
}

// ─── GROQ Queries ────────────────────────────────────────────────────────────

/** All published native posts (listing) */
export const POSTS_QUERY = `
  *[_type == "post" && published == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    "thumbnail": thumbnail.asset->url,
    publishedAt
  }
`;

/** Single published native post by slug (detail page) */
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug && published == true][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    "thumbnail": thumbnail.asset->url,
    body,
    publishedAt
  }
`;

/** All curated RSS post entries */
export const CURATED_RSS_QUERY = `
  *[_type == "featuredRssPost"] {
    rssLink,
    category
  }
`;

// ─── Fetch helpers ───────────────────────────────────────────────────────────

export const fetchPosts = (): Promise<SanityPost[]> =>
  sanityClient.fetch(POSTS_QUERY);

export const fetchPostBySlug = (slug: string): Promise<SanityPostFull | null> =>
  sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });

export const fetchCuratedRss = (): Promise<CuratedRssEntry[]> =>
  sanityClient.fetch(CURATED_RSS_QUERY);
