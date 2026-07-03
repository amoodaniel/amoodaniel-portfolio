import React from 'react';
import { Link } from 'react-router-dom';

/* Project card per the brief: whole card is the link, metric is mandatory.
   Hover: border + surface lighten. Active: border Paper. */

interface WorkCardProps {
  to: string;
  label: string;
  title: string;
  description: string;
  metric: { value: string; caption: string };
  tags: string[];
}

const WorkCard = ({ to, label, title, description, metric, tags }: WorkCardProps) => (
  <Link
    to={to}
    className="group flex flex-col rounded-lg border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:border-[#3a3a3a] hover:bg-[#1a1a1a] active:border-paper"
  >
    <div className="flex items-center justify-between gap-4">
      <span className="type-meta text-muted-foreground">{label}</span>
      <span aria-hidden="true" className="text-muted-foreground group-hover:text-paper transition-colors duration-200">
        →
      </span>
    </div>
    <h3 className="type-h3 mt-5 text-paper">{title}</h3>
    <p className="mt-3 text-muted-foreground flex-1">{description}</p>
    <p className="mt-6">
      <span className="font-display font-bold text-[32px] leading-none tracking-[-0.01em] text-paper">
        {metric.value}
      </span>{' '}
      <span className="text-sm text-muted-foreground">{metric.caption}</span>
    </p>
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  </Link>
);

export default WorkCard;
