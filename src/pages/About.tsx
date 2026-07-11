import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { site } from '@/data/site';
import { aboutIntro, timeline, startups, credentials } from '@/data/about';

const About = () => {
  return (
    <div className="min-h-screen bg-ink">
      <Seo
        title="About — Daniel Amoo"
        description="I build digital systems for humanitarian organizations — the kind that have to work on a shared phone, over a failing network, in the hands of someone with a hundred more urgent things to do."
        path="/about"
      />
      <Navbar />

      <main id="main" className="pt-16 md:pt-[72px]">
        {/* Intro */}
        <section className="section" aria-labelledby="about-heading">
          <div className="container grid md:grid-cols-[1fr_360px] gap-12 md:gap-16 items-start">
            <div>
              <Reveal>
                <h1 id="about-heading" className="type-display max-w-2xl">
                  {aboutIntro.headline}
                </h1>
              </Reveal>
              <div className="mt-8 space-y-6 max-w-xl">
                {aboutIntro.paragraphs.map((paragraph, i) => (
                  <Reveal key={i} delay={150 + i * 150}>
                    <p className={i === 0 ? 'type-body-lg text-paper/90 text-justify' : 'text-muted-foreground text-justify'}>
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={600}>
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <a href={aboutIntro.cvUrl} className="btn-secondary" download>
                    Download CV
                  </a>
                  <a
                    href={site.bookCallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-signal text-center sm:text-left"
                  >
                    Book a call →
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={300} className="order-first md:order-none">
              <img
                src={aboutIntro.portrait}
                alt="Daniel Amoo"
                className="w-40 md:w-full max-w-[360px] rounded-lg border border-line object-cover grayscale aspect-[4/5]"
              />
            </Reveal>
          </div>
        </section>

        {/* Where I've worked */}
        <section className="section border-t border-line" aria-labelledby="worked-heading">
          <div className="container">
            <Reveal>
              <h2 id="worked-heading" className="type-h1">
                Where I've worked
              </h2>
            </Reveal>
            <div className="mt-10 border-b border-line">
              {timeline.map((entry, i) => (
                <Reveal key={entry.years} delay={Math.min(i, 3) * 100}>
                  <div className="grid md:grid-cols-[160px_280px_1fr] gap-3 md:gap-8 border-t border-line py-8">
                    <p className="type-meta text-muted-foreground">{entry.years}</p>
                    <div>
                      <h3 className="type-h3 text-paper">
                        {entry.orgUrl ? (
                          <a
                            href={entry.orgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-signal transition-colors duration-200"
                          >
                            {entry.org}
                          </a>
                        ) : (
                          entry.org
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{entry.role}</p>
                    </div>
                    <div>
                      <p className="text-paper/90">{entry.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                        {entry.tags.map((tag) => (
                          <li key={tag} className="tag">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Startups + credentials */}
        <section className="section border-t border-line" aria-label="Startups and credentials">
          <div className="container grid md:grid-cols-2 gap-14 md:gap-20">
            <div>
              <Reveal>
                <h2 className="type-h2">Startups &amp; small orgs</h2>
              </Reveal>
              <div className="mt-8 border-b border-line">
                {startups.map((startup, i) => (
                  <Reveal key={startup.name} delay={i * 100}>
                    <div className="border-t border-line py-6 flex items-start justify-between gap-6">
                      <div>
                        <h3 className="font-display font-semibold text-lg text-paper">
                          <a
                            href={startup.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-signal transition-colors duration-200"
                          >
                            {startup.name}
                          </a>
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                          {startup.description}
                        </p>
                      </div>
                      <span className="type-meta text-muted-foreground whitespace-nowrap pt-1">
                        {startup.result}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h2 className="type-h2">Credentials &amp; beyond work</h2>
              </Reveal>
              <div className="mt-8 border-b border-line">
                {credentials.map((credential, i) => (
                  <Reveal key={credential.label} delay={i * 100}>
                    <div className="border-t border-line py-6">
                      <h3 className="type-meta text-muted-foreground">{credential.label}</h3>
                      <p className="mt-3 text-paper/90">
                        {credential.body}
                        {credential.url && (
                          <>
                            {' '}
                            <a
                              href={credential.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-signal text-sm whitespace-nowrap"
                            >
                              {credential.urlLabel}
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
