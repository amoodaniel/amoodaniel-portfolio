import React from 'react';
import CodeBlock from '@/components/CodeBlock';

/* Minimal markdown → React renderer, deliberately dependency-free.
   Covers the constructs used by articles in src/content/blog: headings (##/###),
   paragraphs, fenced code blocks (```lang title), blockquotes, lists, links,
   emphasis, inline code, images, and horizontal rules. If authoring needs
   outgrow it, swapping in react-markdown only touches this file. */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export interface Heading {
  depth: 2 | 3;
  text: string;
  id: string;
}

export function extractHeadings(md: string): Heading[] {
  const headings: Heading[] = [];
  let inFence = false;
  for (const line of md.split('\n')) {
    if (line.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = line.match(/^(#{2,3})\s+(.*)$/);
    if (match) {
      const text = match[2].trim();
      headings.push({ depth: match[1].length as 2 | 3, text, id: slugify(text) });
    }
  }
  return headings;
}

/* --- inline ---------------------------------------------------------- */

const INLINE_PATTERN =
  /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function renderInline(text: string, keyPrefix = 'i'): React.ReactNode[] {
  const parts = text.split(INLINE_PATTERN);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{renderInline(part.slice(2, -2), key)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={key}>{renderInline(part.slice(1, -1), key)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={key}>{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = /^https?:\/\//.test(link[2]);
      return (
        <a
          key={key}
          href={link[2]}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {renderInline(link[1], key)}
        </a>
      );
    }
    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

/* --- blocks ---------------------------------------------------------- */

export function renderMarkdown(md: string): React.ReactNode[] {
  const lines = md.split('\n');
  const nodes: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const nextKey = () => `b-${key++}`;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    /* fenced code: ```python flows/disclosure.py */
    if (line.startsWith('```')) {
      const fence = line.slice(3).trim();
      const [lang, ...titleParts] = fence.split(/\s+/);
      const title = titleParts.join(' ');
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        code.push(lines[i]);
        i++;
      }
      i++; // closing fence
      nodes.push(
        <CodeBlock key={nextKey()} code={code.join('\n')} lang={lang} title={title} />
      );
      continue;
    }

    const heading = line.match(/^(#{2,3})\s+(.*)$/);
    if (heading) {
      const text = heading[2].trim();
      const id = slugify(text);
      nodes.push(
        heading[1].length === 2 ? (
          <h2 key={nextKey()} id={id}>
            {renderInline(text)}
          </h2>
        ) : (
          <h3 key={nextKey()} id={id}>
            {renderInline(text)}
          </h3>
        )
      );
      i++;
      continue;
    }

    if (/^(---|\*\*\*)\s*$/.test(line)) {
      nodes.push(<hr key={nextKey()} />);
      i++;
      continue;
    }

    if (line.startsWith('>')) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith('>')) {
        quote.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      nodes.push(
        <blockquote key={nextKey()}>{renderInline(quote.join(' '))}</blockquote>
      );
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''));
        i++;
      }
      nodes.push(
        <ul key={nextKey()}>
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      nodes.push(
        <ol key={nextKey()}>
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (image) {
      nodes.push(<img key={nextKey()} src={image[2]} alt={image[1]} loading="lazy" />);
      i++;
      continue;
    }

    /* paragraph: consume until blank line or block start */
    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{2,3}\s|```|>|[-*]\s|\d+\.\s|!\[)/.test(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    nodes.push(<p key={nextKey()}>{renderInline(para.join(' '))}</p>);
  }

  return nodes;
}
