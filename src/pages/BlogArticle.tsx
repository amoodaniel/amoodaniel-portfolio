import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { site } from '@/data/site';
import { getPostBySlug, getRelatedPosts, formatPostDate } from '@/lib/blog';
import { renderMarkdown, extractHeadings } from '@/lib/markdown';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-ink">
        <Navbar />
        <main id="main" className="pt-16 md:pt-[72px]">
          <div className="container section">
            <h1 className="type-h1">Article not found</h1>
            <p className="mt-6 text-muted-foreground">
              This piece doesn't exist — it may have moved.
            </p>
            <Link to="/blog" className="link-signal mt-8 inline-block">
              ← All writing
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const headings = extractHeadings(post.body).filter((h) => h.depth === 2);
  const related = getRelatedPosts(post.slug);

  return (
    <div className="min-h-screen bg-ink">
      <Seo
        title={`${post.title} — Daniel Amoo`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
      />
      <Navbar />

      <main id="main" className="pt-16 md:pt-[72px]">
        <article className="section">
          <div className="container max-w-4xl">
            <Link to="/blog" className="link-signal font-mono text-[13px]">
              ← All writing
            </Link>

            <header className="mt-10">
              <p className="flex flex-wrap items-center gap-3">
                <span className="tag tag-selected">{post.category}</span>
                <span className="type-meta text-muted-foreground">
                  {post.readTime} min read · {formatPostDate(post.date)}
                </span>
              </p>
              <h1 className="type-h1 mt-8">{post.title}</h1>
            </header>

            {/* Contents */}
            {headings.length > 1 && (
              <nav
                className="mt-10 rounded-lg border border-line bg-surface p-5 md:p-6 md:max-w-xs"
                aria-label="Contents"
              >
                <p className="type-meta text-muted-foreground">Contents</p>
                <ul className="mt-4 space-y-2">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-sm text-paper/90 hover:text-signal transition-colors duration-200"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="article-body mt-12">{renderMarkdown(post.body)}</div>

            {/* Author */}
            <aside className="mt-16 rounded-lg border border-line bg-surface p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="/lovable-uploads/headshot 2.png"
                alt="Daniel Amoo"
                className="w-16 h-16 rounded-full object-cover border border-line grayscale"
              />
              <div>
                <p className="font-display font-semibold text-lg text-paper">{site.name}</p>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  Digital Information Officer building frontline data systems for humanitarian
                  organizations. Writes on AI, humanity, and career.
                </p>
                <p className="mt-4 flex gap-6">
                  <Link to="/about" className="link-signal text-sm">
                    About →
                  </Link>
                  <a
                    href={site.bookCallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-signal text-sm"
                  >
                    Book a call →
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-line py-16" aria-labelledby="related-heading">
            <div className="container max-w-4xl">
              <h2 id="related-heading" className="type-meta text-muted-foreground">
                Related
              </h2>
              <div className="mt-6 grid md:grid-cols-3 gap-8">
                {related.map((rel) => (
                  <Link key={rel.slug} to={`/blog/${rel.slug}`} className="group block">
                    <p className="type-meta text-muted-foreground">
                      {rel.category} · {rel.readTime} min
                    </p>
                    <h3 className="mt-3 font-display font-semibold text-lg leading-snug text-paper group-hover:text-signal transition-colors duration-200">
                      {rel.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;
