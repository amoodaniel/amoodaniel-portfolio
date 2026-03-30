import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchPostBySlug, urlFor, type SanityPostFull, type TopicCategory } from '@/sanity/client';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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

// Portable Text component overrides — matches the site's typography
const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4 leading-tight">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-9 mb-3 leading-tight">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-gray-900 mt-7 mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed text-lg mb-5">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-5 my-6 text-gray-600 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          className="w-full rounded-lg"
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-5 space-y-1 text-gray-700 text-lg">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-5 space-y-1 text-gray-700 text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['native-post', slug],
    queryFn: () => fetchPostBySlug(slug!),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {isLoading && (
        <div className="pt-32 pb-20 container mx-auto px-4 max-w-2xl animate-pulse">
          <div className="h-4 w-32 bg-gray-100 rounded mb-10" />
          <div className="h-6 w-24 bg-gray-100 rounded-full mb-5" />
          <div className="h-10 w-3/4 bg-gray-100 rounded mb-3" />
          <div className="h-10 w-1/2 bg-gray-100 rounded mb-8" />
          <div className="h-64 w-full bg-gray-100 rounded-lg mb-10" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-5 w-full bg-gray-100 rounded mb-3" />
          ))}
        </div>
      )}

      {isError && !isLoading && (
        <div className="pt-40 pb-20 text-center">
          <BookOpen className="w-14 h-14 text-gray-200 mx-auto mb-5" />
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Post not found</h1>
          <p className="text-gray-500 mb-8">This post may have been removed or the link is incorrect.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 border border-gray-800 px-5 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
        </div>
      )}

      {!isLoading && !isError && post && (
        <>
          {/* Hero */}
          <div className="pt-32 pb-10 border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all posts
              </Link>

              {post.category && (
                <span
                  className={`inline-flex items-center text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border mb-5 ${CATEGORY_STYLES[post.category]}`}
                >
                  {CATEGORY_LABELS[post.category]}
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-5">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-gray-500 leading-relaxed mb-6">{post.excerpt}</p>
              )}

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <time>{formatDate(post.publishedAt)}</time>
              </div>
            </div>
          </div>

          {/* Thumbnail */}
          {post.thumbnail && (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-10">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full rounded-xl object-cover max-h-[480px]"
              />
            </div>
          )}

          {/* Body */}
          <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl py-12">
            {post.body && (
              <PortableText value={post.body as any} components={portableTextComponents} />
            )}
          </article>

          {/* Footer nav */}
          <div className="border-t border-gray-100 py-10">
            <div className="container mx-auto px-4 max-w-2xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> All posts
              </Link>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
