import React, { useState } from 'react';

/* Code block per the brief: Surface bg, filename header, two-tone syntax —
   Signal keywords, Muted comments. No rainbow highlighting. */

const KEYWORDS = new Set([
  // python
  'def', 'return', 'import', 'from', 'as', 'if', 'elif', 'else', 'for', 'while',
  'in', 'not', 'and', 'or', 'class', 'with', 'try', 'except', 'finally', 'lambda',
  'pass', 'raise', 'yield', 'True', 'False', 'None', 'async', 'await',
  // js/ts
  'const', 'let', 'var', 'function', 'export', 'default', 'new', 'this',
  'interface', 'type', 'extends', 'implements', 'true', 'false', 'null', 'undefined',
]);

function highlightLine(line: string, keyPrefix: string): React.ReactNode[] {
  const commentIdx = (() => {
    const hash = line.indexOf('#');
    const slashes = line.indexOf('//');
    if (hash === -1) return slashes;
    if (slashes === -1) return hash;
    return Math.min(hash, slashes);
  })();

  const codePart = commentIdx === -1 ? line : line.slice(0, commentIdx);
  const commentPart = commentIdx === -1 ? '' : line.slice(commentIdx);

  const tokens = codePart.split(/(\w+)/g).map((token, i) =>
    KEYWORDS.has(token) ? (
      <span key={`${keyPrefix}-${i}`} className="text-signal">
        {token}
      </span>
    ) : (
      <React.Fragment key={`${keyPrefix}-${i}`}>{token}</React.Fragment>
    )
  );

  return [
    ...tokens,
    commentPart ? (
      <span key={`${keyPrefix}-c`} className="text-muted-foreground">
        {commentPart}
      </span>
    ) : null,
  ];
}

interface CodeBlockProps {
  code: string;
  lang?: string;
  title?: string;
}

const CodeBlock = ({ code, title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <figure className="my-10 rounded-lg border border-line bg-surface overflow-hidden">
      <figcaption className="flex items-center justify-between px-4 py-2.5 border-b border-line">
        <span className="font-mono text-[13px] text-muted-foreground">{title || 'code'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="font-mono text-[13px] text-muted-foreground hover:text-paper transition-colors duration-200"
        >
          {copied ? 'copied' : 'copy'}
        </button>
      </figcaption>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-[14px] leading-[24px] text-paper !bg-transparent !border-0 !p-0">
          {code.split('\n').map((line, i) => (
            <div key={i}>{line ? highlightLine(line, `l-${i}`) : ' '}</div>
          ))}
        </code>
      </pre>
    </figure>
  );
};

export default CodeBlock;
