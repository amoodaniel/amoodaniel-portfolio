import { useQuery } from '@tanstack/react-query';
import { fetchCuratedRss, fetchPosts } from '@/sanity/client';
import type { BlogPost } from './useBlogPosts';

const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json?rss_url=';
const SUBSTACK_FEED = 'https://amoodaniel.substack.com/feed';
const MEDIUM_FEED = 'https://medium.com/feed/@amoodaniel';

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractThumbnail(item: Record<string, unknown>): string {
  if (typeof item.thumbnail === 'string' && item.thumbnail.startsWith('http')) return item.thumbnail;
  const enclosure = item.enclosure as Record<string, string> | undefined;
  if (enclosure?.link) return enclosure.link;
  const content = typeof item.content === 'string' ? item.content : '';
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : '';
}

async function fetchAllRss(): Promise<BlogPost[]> {
  const results = await Promise.allSettled([
    fetch(`${RSS2JSON_API}${encodeURIComponent(SUBSTACK_FEED)}`).then((r) => r.json()),
    fetch(`${RSS2JSON_API}${encodeURIComponent(MEDIUM_FEED)}`).then((r) => r.json()),
  ]);

  const posts: BlogPost[] = [];
  const sources = ['substack', 'medium'] as const;

  results.forEach((result, i) => {
    if (result.status !== 'fulfilled' || result.value.status !== 'ok') return;
    for (const item of result.value.items as Record<string, unknown>[]) {
      posts.push({
        title: typeof item.title === 'string' ? item.title : '',
        pubDate: typeof item.pubDate === 'string' ? item.pubDate : '',
        link: typeof item.link === 'string' ? item.link : '',
        thumbnail: extractThumbnail(item),
        description: stripHtml(typeof item.description === 'string' ? item.description : '').slice(0, 220),
        source: sources[i],
        categories: Array.isArray(item.categories) ? (item.categories as string[]) : [],
        author: typeof item.author === 'string' ? item.author : '',
        category: null,
        isNative: false,
      });
    }
  });

  return posts;
}

/**
 * usePublicBlog — merged feed for the public blog page.
 *
 * Combines:
 *  1. RSS posts (Substack + Medium) filtered to only those curated in Sanity
 *     and tagged with the category the admin assigned.
 *  2. Native posts written and published in Sanity Studio.
 *
 * Sorted by date, newest first.
 */
export function usePublicBlog() {
  return useQuery({
    queryKey: ['public-blog'],
    queryFn: async () => {
      const [allRss, curatedEntries, nativePosts] = await Promise.all([
        fetchAllRss(),
        fetchCuratedRss(),
        fetchPosts(),
      ]);

      // Build a lookup map: rssLink → category
      const curatedMap = new Map(curatedEntries.map((e) => [e.rssLink, e.category]));

      // Filter RSS posts to the curated allowlist and attach category
      const curatedRss: BlogPost[] = allRss
        .filter((p) => curatedMap.has(p.link))
        .map((p) => ({ ...p, category: curatedMap.get(p.link) ?? null }));

      // Map native Sanity posts to BlogPost shape
      const native: BlogPost[] = nativePosts.map((p) => ({
        title: p.title,
        pubDate: p.publishedAt,
        link: `/blog/${p.slug}`,
        thumbnail: p.thumbnail ?? '',
        description: p.excerpt ?? '',
        source: 'native' as const,
        categories: [],
        author: 'Amoo Daniel',
        category: p.category,
        slug: p.slug,
        isNative: true,
      }));

      const all = [...curatedRss, ...native];
      return all.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    },
    staleTime: 1000 * 60 * 15,
    retry: 1,
  });
}
