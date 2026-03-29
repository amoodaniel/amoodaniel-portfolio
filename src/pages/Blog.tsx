import React, { useState } from 'react';
import { ExternalLink, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useBlogPosts, type BlogPost } from '@/hooks/useBlogPosts';

type FilterSource = 'all' | 'substack' | 'medium';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

const SourceBadge = ({ source }: { source: 'substack' | 'medium' }) => {
  if (source === 'substack') {
    return (
      <span className="inline-flex items-center text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
        Substack
      </span>
    );
  }
  return (
    <span className="inline-flex items-center text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
      Medium
    </span>
  );
};

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-250 hover:-translate-y-1"
  >
    <div className="relative h-52 bg-gray-50 overflow-hidden flex-shrink-0">
      {post.thumbnail ? (
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <BookOpen className="w-10 h-10 text-gray-200" />
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
        <SourceBadge source={post.source} />
        <time className="text-xs text-gray-400 tabular-nums">{formatDate(post.pubDate)}</time>
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-gray-600 transition-colors line-clamp-2">
        {post.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
        {post.description}
      </p>

      <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-gray-800 group-hover:gap-2 transition-all duration-200">
        Read article
        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
      </div>
    </div>
  </a>
);

const SkeletonCard = () => (
  <div className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden animate-pulse">
    <div className="h-52 bg-gray-100" />
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

const FilterButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
      active
        ? 'bg-gray-900 text-white shadow-sm'
        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const Blog = () => {
  const [filter, setFilter] = useState<FilterSource>('all');
  const { data: posts, isLoading, isError } = useBlogPosts();

  const filtered = posts
    ? filter === 'all'
      ? posts
      : posts.filter((p) => p.source === filter)
    : [];

  const substackCount = posts?.filter((p) => p.source === 'substack').length ?? 0;
  const mediumCount = posts?.filter((p) => p.source === 'medium').length ?? 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero header */}
      <div className="bg-white border-b border-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>

            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Writing
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              All Articles
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              Thoughts on technology, humanitarian innovation, and building products that matter —
              pulled live from Substack and Medium.
            </p>

            {/* Source links */}
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <a
                href="https://amoodaniel.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-200 text-orange-600 bg-orange-50 hover:bg-orange-100 text-sm font-semibold transition-colors"
              >
                Follow on Substack <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://amoodaniel.medium.com/list/amoos-tech-articles-0bccbf7a8830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-sm font-semibold transition-colors"
              >
                Read on Medium <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filter tabs + grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Filter row */}
          {!isError && (
            <div className="flex items-center gap-2 mb-10 flex-wrap">
              <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
                All {posts ? `(${posts.length})` : ''}
              </FilterButton>
              <FilterButton active={filter === 'substack'} onClick={() => setFilter('substack')}>
                Substack {substackCount > 0 ? `(${substackCount})` : ''}
              </FilterButton>
              <FilterButton active={filter === 'medium'} onClick={() => setFilter('medium')}>
                Medium {mediumCount > 0 ? `(${mediumCount})` : ''}
              </FilterButton>
            </div>
          )}

          {/* Loading skeletons */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Error state */}
          {isError && !isLoading && (
            <div className="text-center py-20">
              <BookOpen className="w-14 h-14 text-gray-200 mx-auto mb-5" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Couldn't load posts
              </h3>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                There was a problem fetching the feeds. You can read directly on the platforms:
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://amoodaniel.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-orange-200 text-orange-600 bg-orange-50 hover:bg-orange-100 text-sm font-semibold transition-colors"
                >
                  Substack <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://amoodaniel.medium.com/list/amoos-tech-articles-0bccbf7a8830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-sm font-semibold transition-colors"
                >
                  Medium <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* Posts grid */}
          {!isLoading && !isError && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogPostCard key={post.link || i} post={post} />
              ))}
            </div>
          )}

          {/* Empty state after filtering */}
          {!isLoading && !isError && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No posts found.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
