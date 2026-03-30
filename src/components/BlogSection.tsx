import React from 'react';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePublicBlog } from '@/hooks/usePublicBlog';
import type { BlogPost } from '@/hooks/useBlogPosts';
import type { TopicCategory } from '@/sanity/client';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

const CATEGORY_STYLES: Record<TopicCategory, string> = {
  technology: 'bg-blue-50 text-blue-700 border-blue-100',
  ai: 'bg-purple-50 text-purple-700 border-purple-100',
  living: 'bg-green-50 text-green-700 border-green-100',
};

const CATEGORY_LABELS: Record<TopicCategory, string> = {
  technology: 'Technology',
  ai: 'AI',
  living: 'Living',
};

const CategoryBadge = ({ category }: { category: TopicCategory }) => (
  <span
    className={`inline-flex items-center text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border ${CATEGORY_STYLES[category]}`}
  >
    {CATEGORY_LABELS[category]}
  </span>
);

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const inner = (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-200 hover:-translate-y-1 h-full">
      <div className="relative h-48 bg-gray-50 overflow-hidden flex-shrink-0">
        {post.thumbnail ? (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-gray-200" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          {post.category ? (
            <CategoryBadge category={post.category} />
          ) : (
            <span className="inline-flex items-center text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
              {post.source === 'substack' ? 'Substack' : post.source === 'medium' ? 'Medium' : 'Article'}
            </span>
          )}
          <time className="text-xs text-gray-400 tabular-nums">{formatDate(post.pubDate)}</time>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-gray-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
          {post.description}
        </p>

        <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-gray-800 group-hover:gap-2 transition-all duration-200">
          {post.isNative ? (
            <>Read post <ArrowRight className="w-3.5 h-3.5 opacity-70" /></>
          ) : (
            <>Read article <ExternalLink className="w-3.5 h-3.5 opacity-70" /></>
          )}
        </div>
      </div>
    </div>
  );

  if (post.isNative && post.slug) {
    return (
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {inner}
      </Link>
    );
  }

  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </a>
  );
};

const SkeletonCard = () => (
  <div className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-100" />
    <div className="p-6 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="h-5 w-20 bg-gray-100 rounded-full" />
        <div className="h-4 w-24 bg-gray-100 rounded" />
      </div>
      <div className="h-5 w-full bg-gray-100 rounded" />
      <div className="h-5 w-3/4 bg-gray-100 rounded" />
      <div className="h-4 w-full bg-gray-100 rounded mt-1" />
      <div className="h-4 w-5/6 bg-gray-100 rounded" />
    </div>
  </div>
);

const BlogSection = () => {
  const { data: posts, isLoading, isError } = usePublicBlog();
  const latestPosts = posts?.slice(0, 6) ?? [];

  return (
    <section id="blog" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-4">
          <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
            Writing
          </span>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
            Ideas Worth Sharing
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Thoughts on technology, humanitarian innovation, and building products that matter.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {isError && !isLoading && (
          <div className="max-w-lg mx-auto text-center py-16">
            <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 mb-6">Couldn't load posts right now. Read directly on:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://amoodaniel.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-orange-200 text-orange-600 bg-orange-50 hover:bg-orange-100 text-sm font-semibold transition-colors"
              >
                Substack <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://amoodaniel.medium.com/list/amoos-tech-articles-0bccbf7a8830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-sm font-semibold transition-colors"
              >
                Medium <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {!isLoading && !isError && latestPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {latestPosts.map((post, i) => (
              <BlogPostCard key={post.link || i} post={post} />
            ))}
          </div>
        )}

        {!isLoading && !isError && latestPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No posts yet — check back soon.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 border border-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
