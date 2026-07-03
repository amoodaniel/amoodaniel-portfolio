import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import { caseStudies, products } from '@/data/work';

const Work = () => {
  return (
    <div className="min-h-screen bg-ink">
      <Seo
        title="Work — Daniel Amoo"
        description="Case studies, not screenshots: the problem, what I built, and what changed. Two humanitarian systems in depth, then selected product work."
        path="/work"
      />
      <Navbar />

      <main id="main" className="pt-16 md:pt-[72px]">
        {/* Header */}
        <section className="section !pb-16" aria-labelledby="work-heading">
          <div className="container">
            <Reveal>
              <h1 id="work-heading" className="type-display">
                Work
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-muted-foreground type-body-lg">
                Case studies, not screenshots: the problem, what I built, and what changed.
                <br className="hidden md:block" /> Two humanitarian systems in depth, then selected
                product work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case studies */}
        {caseStudies.map((study) => (
          <section
            key={study.id}
            id={study.id}
            className="section border-t border-line scroll-mt-16"
            aria-labelledby={`${study.id}-heading`}
          >
            <div className="container">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <p className="type-meta text-signal">Case study {study.number}</p>
                  <p className="type-meta text-muted-foreground">{study.meta}</p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <h2 id={`${study.id}-heading`} className="type-h1 mt-8 max-w-2xl">
                  {study.title}
                </h2>
              </Reveal>
              <Reveal delay={300}>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {study.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
                {study.columns.map((col, i) => (
                  <Reveal key={col.label} delay={i * 150}>
                    <div className="border-t border-line pt-5">
                      <h3 className="type-meta text-muted-foreground">{col.label}</h3>
                      <p className="mt-4 text-paper/90">{col.body}</p>
                      {col.note && (
                        <p className="mt-4 font-mono text-[13px] text-muted-foreground">
                          {col.note}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              {study.metrics && (
                <div className="mt-12 grid md:grid-cols-3 rounded-lg border border-line bg-surface overflow-hidden divide-y md:divide-y-0 md:divide-x divide-line">
                  {study.metrics.map((metric) => (
                    <div key={metric.caption} className="p-6 md:p-8">
                      <p className="font-display font-bold text-[32px] md:text-[40px] leading-none tracking-[-0.02em]">
                        {metric.countTo ? (
                          <CountUp to={metric.countTo} prefix={metric.prefix} suffix={metric.suffix} />
                        ) : (
                          metric.value
                        )}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">{metric.caption}</p>
                    </div>
                  ))}
                </div>
              )}

              {study.press && (
                <div className="mt-10 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
                  <span className="type-meta text-muted-foreground shrink-0">In the press</span>
                  <ul className="flex flex-col md:flex-row gap-3 md:gap-8">
                    {study.press.map((item) => (
                      <li key={item.url}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-signal text-sm"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Products & selected builds */}
        <section className="section border-t border-line" aria-labelledby="products-heading">
          <div className="container">
            <Reveal>
              <h2 id="products-heading" className="type-h1">
                Products &amp; selected builds
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-4 text-muted-foreground max-w-md">
                Things I've built on my own time — shipped products, applied research, and earlier
                client work.
              </p>
            </Reveal>
            <div className="mt-10 border-b border-line">
              {products.map((product, i) => (
                <Reveal key={product.title} delay={Math.min(i, 3) * 100}>
                  <div className="group grid md:grid-cols-[280px_1fr_auto] gap-2 md:gap-8 border-t border-line py-7 items-baseline">
                    <h3 className="type-h3 text-paper">
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-signal transition-colors duration-200"
                      >
                        {product.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground">
                      {product.description}
                      {product.links && (
                        <span className="block mt-2 space-x-4">
                          {product.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-signal text-sm"
                            >
                              {link.label} →
                            </a>
                          ))}
                        </span>
                      )}
                    </p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-muted-foreground hover:text-paper transition-colors duration-200 whitespace-nowrap"
                    >
                      {product.meta} →
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
