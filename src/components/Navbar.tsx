import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';

/* Fixed nav, Ink bg with 1px Line bottom border on scroll.
   Active page = Paper + underline; inactive = Muted, hover Paper.
   Mobile: wordmark + hamburger → full-screen overlay, same states. */

const navLinks = [
  { title: 'Work', href: '/work' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'text-base transition-colors duration-200',
      isActive
        ? 'text-paper underline underline-offset-8 decoration-1'
        : 'text-muted-foreground hover:text-paper'
    );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 bg-ink border-b transition-colors duration-200',
        isScrolled ? 'border-line' : 'border-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <Link
          to="/"
          className="font-display font-bold tracking-[-0.02em] text-lg text-paper"
          onClick={() => setIsOpen(false)}
        >
          {(() => {
            const mark = site.wordmark;
            const idx = mark.indexOf('.');
            if (idx === -1) return mark;
            return (
              <>
                {mark.slice(0, idx)}
                <span className="text-signal">.</span>
                {mark.slice(idx + 1)}
              </>
            );
          })()}
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.title} to={link.href} className={linkClasses}>
              {link.title}
            </NavLink>
          ))}
          <a
            href={site.bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2 text-sm"
          >
            Book a call
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          className="md:hidden text-paper p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-ink z-40 flex flex-col">
          <nav className="container flex flex-col gap-2 pt-8" aria-label="Primary mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'type-h2 py-3 transition-colors duration-200',
                    isActive ? 'text-paper underline underline-offset-8' : 'text-muted-foreground'
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
            <a
              href={site.bookCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
              onClick={() => setIsOpen(false)}
            >
              Book a call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
