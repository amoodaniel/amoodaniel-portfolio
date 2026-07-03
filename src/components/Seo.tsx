import { useEffect } from 'react';
import { site } from '@/data/site';

/* Per-page document metadata for a client-rendered SPA: title, description,
   OG/Twitter tags, and canonical URL, restored on unmount. */

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const Seo = ({ title, description, path = '/', image, type = 'website' }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    const url = `${site.url}${path}`;
    const ogImage = image
      ? image.startsWith('http')
        ? image
        : `${site.url}${encodeURI(image)}`
      : undefined;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', url);
    if (ogImage) setMeta('property', 'og:image', ogImage);
    setMeta('name', 'twitter:card', 'summary_large_image');
    if (ogImage) setMeta('name', 'twitter:image', ogImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, image, type]);

  return null;
};

export default Seo;
