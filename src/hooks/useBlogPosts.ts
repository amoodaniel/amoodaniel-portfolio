import { useQuery } from '@tanstack/react-query';

export interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  source: 'substack' | 'medium';
  categories: string[];
  author: string;
}

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
  if (typeof item.thumbnail === 'string' && item.thumbnail.startsWith('http')) {
    return item.thumbnail;
  }
  const enclosure = item.enclosure as Record<string, string> | undefined;
  if (enclosure?.link) return enclosure.link;
  const content = typeof item.content === 'string' ? item.content : '';
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/);
  if (match) return match[1];
  return '';
}

async function fetchFeed(feedUrl: string, source: 'substack' | 'medium'): Promise<BlogPost[]> {
  const response = await fetch(`${RSS2JSON_API}${encodeURIComponent(feedUrl)}`);
  if (!response.ok) throw new Error(`Failed to fetch ${source} feed`);
  const data = await response.json();
  if (data.status !== 'ok') throw new Error(`Invalid response from ${source} feed`);

  return (data.items as Record<string, unknown>[]).map((item) => ({
    title: typeof item.title === 'string' ? item.title : '',
    pubDate: typeof item.pubDate === 'string' ? item.pubDate : '',
    link: typeof item.link === 'string' ? item.link : '',
    thumbnail: extractThumbnail(item),
    description: stripHtml(typeof item.description === 'string' ? item.description : '').slice(0, 220),
    source,
    categories: Array.isArray(item.categories) ? (item.categories as string[]) : [],
    author: typeof item.author === 'string' ? item.author : '',
  }));
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const [substackResult, mediumResult] = await Promise.allSettled([
        fetchFeed(SUBSTACK_FEED, 'substack'),
        fetchFeed(MEDIUM_FEED, 'medium'),
      ]);

      const posts: BlogPost[] = [];
      if (substackResult.status === 'fulfilled') posts.push(...substackResult.value);
      if (mediumResult.status === 'fulfilled') posts.push(...mediumResult.value);

      return posts.sort(
        (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );
    },
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });
}
