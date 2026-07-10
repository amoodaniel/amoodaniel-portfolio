import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import WorkCard from '@/components/WorkCard';
import BlogRow from '@/components/BlogRow';
import Seo from '@/components/Seo';
import { site, orgs, whatIDo, homeMetrics } from '@/data/site';
import { selectedWork } from '@/data/work';
import { getAllPosts } from '@/lib/blog';

const Index = () => {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-ink">
      <Seo
        title="Daniel Amoo — Data systems for the frontline of humanitarian response"
        description="WhatsApp-based case management, AI voice agents, and field dashboards — built with and for INGOs, UN agencies, and the outreach workers who use them where connectivity fails."
        path="/"
      />
      <Navbar />

      <main id="main" className="pt-16 md:pt-[72px]">
        {/* Hero */}
        <section className="section" aria-labelledby="hero-heading">
          <div className="container">
            <Reveal>
              <p className="type-meta text-muted-foreground">
                Daniel Amoo — Digital Information Officer · Humanitarian Tech
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h1 id="hero-heading" className="type-display mt-8 max-w-3xl">
                I build data systems for the frontline of humanitarian response.
                <span
                  aria-hidden="true"
                  className="inline-block w-[0.07em] h-[0.75em] ml-2 bg-signal animate-cursor-blink align-baseline"
                />
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 text-muted-foreground type-body-lg max-w-xl">
                From chat-based case management systems to AI voice agents, built with and for INGOs,
                UN agencies, and the field staff who rely on them where connectivity fails.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <a
                  href={site.bookCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a 30-min call →
                </a>
                <Link to="/work" className="link-signal text-center sm:text-left">
                  See the work →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Org strip — infinite marquee with masked edges */}
        <section className="border-y border-line py-6" aria-label="Organizations I have built with">
          <div className="container flex items-center gap-8">
            <span className="type-meta text-muted-foreground shrink-0">Built with</span>
            <div
              className="overflow-hidden flex-1 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
              aria-hidden="true"
            >
              <div className="flex w-max animate-marquee items-center">
                {[...orgs, ...orgs].map((org, i) => (
                  <span
                    key={`${org.domain}-${i}`}
                    className="whitespace-nowrap px-10 flex items-center"
                  >
                    <img
                      src={
                        org.logo ??
                        `https://img.logo.dev/${org.domain}?token=${import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY}&size=200`
                      }
                      alt={`${org.name} logo`}
                      loading="lazy"
                      className={`w-auto object-contain opacity-80 hover:opacity-100 transition-opacity brightness-0 invert ${org.className ?? 'h-8'}`}
                    />

                  </span>
                ))}
              </div>
            </div>
            <span className="sr-only">{orgs.map((o) => o.name).join(', ')}</span>
          </div>
        </section>

        {/* Metrics */}
        <section className="section !pt-16 !pb-16" aria-label="Impact metrics">
          <div className="container grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-line">
            {homeMetrics.map((metric, i) => (
              <Reveal key={metric.value} delay={i * 150} className="md:px-10 md:first:pl-0 md:last:pr-0">
                <p className="font-display font-bold text-[40px] md:text-[48px] leading-none tracking-[-0.02em]">
                  {metric.countTo ? (
                    <CountUp to={metric.countTo} prefix={metric.prefix} suffix={metric.suffix} />
                  ) : (
                    metric.value
                  )}
                </p>
                <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                  {metric.caption}
                  {metric.link && (
                    <>
                      {' '}
                      <a
                        href={metric.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-signal"
                      >
                        {metric.link.label}
                      </a>
                    </>
                  )}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section className="section border-t border-line" aria-labelledby="selected-work-heading">
          <div className="container">
            <Reveal>
              <div className="flex items-baseline justify-between gap-4">
                <h2 id="selected-work-heading" className="type-h1">
                  Selected work
                </h2>
                <Link to="/work" className="link-signal whitespace-nowrap text-sm md:text-base">
                  All case studies →
                </Link>
              </div>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {selectedWork.map((work, i) => (
                <Reveal key={work.id} delay={i * 150}>
                  <WorkCard
                    to={`/work#${work.id}`}
                    label={work.label}
                    title={work.title}
                    description={work.description}
                    metric={work.metric}
                    tags={work.tags}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What I do */}
        <section className="section border-t border-line" aria-labelledby="what-i-do-heading">
          <div className="container">
            <Reveal>
              <h2 id="what-i-do-heading" className="type-h1">
                What I do
              </h2>
            </Reveal>
            <div className="mt-10">
              {whatIDo.map((service, i) => (
                <Reveal key={service.title} delay={i * 150}>
                  <div className="grid md:grid-cols-[80px_280px_1fr] gap-2 md:gap-6 border-t border-line py-8 last:border-b">
                    <span className="type-meta text-signal">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="type-h3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Writing */}
        <section className="section border-t border-line" aria-labelledby="writing-heading">
          <div className="container">
            <Reveal>
              <div className="flex items-baseline justify-between gap-4">
                <h2 id="writing-heading" className="type-h1">
                  Writing
                </h2>
                <Link to="/blog" className="link-signal whitespace-nowrap text-sm md:text-base">
                  All articles →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10 border-b border-line">
                {latestPosts.map((post) => (
                  <BlogRow key={post.slug} post={post} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
