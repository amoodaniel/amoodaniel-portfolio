import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { site, socials } from '@/data/site';

/* The footer IS the contact section — on every page, per the brief. */

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container section">
        <Reveal>
          <p className="type-meta text-signal">
            Available for consulting · Advisory · Speaking
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="type-h1 mt-6">
            Building something
            <br /> for the frontline?
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href={site.bookCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a 30-min call
            </a>
            <a href={`mailto:${site.email}`} className="btn-primary">
              Send an Email
            </a>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} Daniel Amoo
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Social links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-muted-foreground hover:text-paper transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
            <Link
              to="/privacy"
              className="font-mono text-[13px] text-muted-foreground hover:text-paper transition-colors duration-200"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
