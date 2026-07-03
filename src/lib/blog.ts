/* Blog content pipeline: markdown files with frontmatter in src/content/blog,
   loaded eagerly at build time via Vite. Adding a post = committing a .md file. */

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  readTime: number; // minutes
  excerpt: string;
  cover?: string;
  canonical?: string;
  canonicalLabel?: string;
  featured?: boolean;
  body: string;
}

const files = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: raw.slice(match[0].length) };
}

const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { data, body } = parseFrontmatter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '1970-01-01',
      category: data.category ?? 'Notes',
      readTime: Number(data.readTime) || 5,
      excerpt: data.excerpt ?? '',
      cover: data.cover || undefined,
      canonical: data.canonical || undefined,
      canonicalLabel: data.canonicalLabel || undefined,
      featured: data.featured === 'true',
      body: body.trim(),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

const CATEGORY_ORDER = ['AI', 'Field notes', 'Innovation', 'Career', 'Personal'];

export function getCategories(): string[] {
  const present = new Set(posts.map((p) => p.category));
  const ordered = CATEGORY_ORDER.filter((c) => present.has(c));
  const extras = [...present].filter((c) => !CATEGORY_ORDER.includes(c)).sort();
  return [...ordered, ...extras];
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return posts.slice(0, count);
  const sameCategory = posts.filter((p) => p.slug !== slug && p.category === current.category);
  const others = posts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}

export function formatPostDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
