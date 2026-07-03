import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/* Entrance per the brief: 0.7s translateY(18px)→0 + fade, run once on
   scroll-into-view, staggered via `delay` (150ms steps). Reduced motion is
   handled globally in index.css. */

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Reveal = ({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(visible ? 'animate-rise' : 'opacity-0', className) as string}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children as React.ReactNode}
    </Tag>
  );
};

export default Reveal;
