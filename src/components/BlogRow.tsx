import React from 'react';
import { Link } from 'react-router-dom';
import { type BlogPost, formatPostDate } from '@/lib/blog';

/* Blog list row per the brief: list rows, not cards — titles carry the page.
   Hover: row tints, title → Signal. */

interface BlogRowProps {
  post: BlogPost;
  showExcerpt?: boolean;
}

const BlogRow = ({ post, showExcerpt = false }: BlogRowProps) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group block border-t border-line py-6 md:py-7 transition-colors duration-200 hover:bg-surface/60 md:px-4 md:-mx-4 rounded-sm"
  >
    <div className="md:grid md:grid-cols-[200px_1fr_auto] md:gap-6 md:items-baseline">
      <p className="type-meta text-muted-foreground">
        {post.category} · {post.readTime} min
        <span className="md:hidden"> · {formatPostDate(post.date)}</span>
      </p>
      <div className="mt-2 md:mt-0">
        <h3 className="type-h3 text-paper group-hover:text-signal transition-colors duration-200">
          {post.title}
        </h3>
        {showExcerpt && <p className="mt-2 text-muted-foreground max-w-2xl">{post.excerpt}</p>}
      </div>
      <p className="hidden md:block type-meta text-muted-foreground whitespace-nowrap">
        {formatPostDate(post.date)}
      </p>
    </div>
  </Link>
);

export default BlogRow;
