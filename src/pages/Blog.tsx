import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import BlogRow from '@/components/BlogRow';
import Seo from '@/components/Seo';
import { cn } from '@/lib/utils';
import { getAllPosts, getCategories, formatPostDate } from '@/lib/blog';

const PAGE_SIZE = 6;

const Blog = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const posts = getAllPosts().filter(
    (p) => !['Personal', 'Career'].includes(p.category)
  );
  const categories = ['All', ...getCategories().filter(
    (c) => !['Personal', 'Career'].includes(c)
  )];
  const featured = posts.find((p) => p.featured);

  const filtered = useMemo(
    () => (filter === 'All' ? posts : posts.filter((p) => p.category === filter)),
    [filter, posts]
  );

  /* featured is rendered as its own block when unfiltered */
  const rows =
    filter === 'All' && featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;
  const visibleRows = rows.slice(0, visibleCount);

  const selectFilter = (category: string) => {
    setFilter(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="min-h-screen bg-ink">
      <Seo
        title="Writing — Daniel Amoo"
        description="Technology in humanitarian contexts, AI and its consequences, and field notes from deployments."
        path="/blog"
      />
      <Navbar />

      <main id="main" className="pt-16 md:pt-[72px]">
        <section className="section !pb-12" aria-labelledby="writing-heading">
          <div className="container">
            <Reveal>
              <h1 id="writing-heading" className="type-display">
                Writing
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-muted-foreground type-body-lg max-w-xl">
                Technology in humanitarian contexts, AI and its consequences, and field notes from
                deployments.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => selectFilter(category)}
                    aria-pressed={filter === category}
                    className={cn('tag tag-interactive', filter === category && 'tag-selected')}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-16 md:pb-24" aria-label="Articles">
          <div className="container">
            {/* Featured post — larger variant up top */}
            {filter === 'All' && featured && (
              <Reveal>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="group block border-t border-line py-10 md:py-12"
                >
                  <p className="type-meta text-signal">Featured</p>
                  <div className="mt-6 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                      <h2 className="type-h2 md:!text-[40px] md:!leading-[46px] text-paper group-hover:text-signal transition-colors duration-200">
                        {featured.title}
                      </h2>
                      <p className="mt-5 text-muted-foreground max-w-lg">{featured.excerpt}</p>
                      <p className="mt-6 type-meta text-muted-foreground">
                        {featured.category} · {featured.readTime} min
                        <span className="mx-3 text-line">|</span>
                        {formatPostDate(featured.date)}
                      </p>
                    </div>
                    {featured.cover && (
                      <img
                        src={featured.cover}
                        alt=""
                        loading="lazy"
                        className="rounded-lg border border-line object-cover w-full aspect-[16/10]"
                      />
                    )}
                  </div>
                </Link>
              </Reveal>
            )}

            <Reveal delay={150}>
              <div className="border-b border-line">
                {visibleRows.map((post) => (
                  <BlogRow key={post.slug} post={post} showExcerpt />
                ))}
                {visibleRows.length === 0 && (
                  <p className="border-t border-line py-10 text-muted-foreground">
                    No articles in this topic yet.
                  </p>
                )}
              </div>
            </Reveal>

            {rows.length > visibleCount && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
