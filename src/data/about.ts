/* About page content. Copy comes from the redesign brief; org URLs carried over
   from the previous site so nothing is lost. */

export const aboutIntro = {
  headline: "Technology that holds up where it's hardest to build.",
  paragraphs: [
    "I'm Daniel Amoo. I build digital systems for humanitarian organizations — the kind that have to work on a shared phone, over a failing network, in the hands of someone with a hundred more urgent things to do.",
    'My path ran from web development and backend engineering in Nigeria, through applied research on recommender systems, to UNHCR in Geneva and now IsraAID — where I lead the development of WhatsApp-based case management for GBV outreach in South Sudan. Along the way I’ve helped startups grow and shipped products of my own.',
    'The throughline: data systems that respect the people at both ends — the field teams who use them and the communities they serve.',
  ],
  portrait: '/lovable-uploads/headshot 2.png',
  /* TODO(daniel): drop the CV pdf into public/ under this name */
  cvUrl: '/daniel-amoo-cv.pdf',
};

export interface TimelineEntry {
  years: string;
  org: string;
  orgUrl?: string;
  role: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineEntry[] = [
  {
    years: '2024 — now',
    org: 'IsraAID',
    orgUrl: 'https://www.israaid.org/',
    role: 'Digital Information Officer',
    description:
      'Digital tools for field operations. Lead developer of the Anenasawa WhatsApp system for GBV outreach in South Sudan — from field research to deployment and training.',
    tags: ['Python', 'Turn.io', 'Streamlit', 'Airtable', 'Twilio'],
  },
  {
    years: '2023 — 24',
    org: 'UNHCR — Geneva',
    orgUrl: 'https://www.unhcr.org/',
    role: 'Communications, Global Protection Cluster',
    description:
      'Managed and rebuilt web content for the Global Protection Cluster, including rescuing a deprecating Drupal platform. Turned field reports into donor-facing content and rolled out a consistent brand system.',
    tags: ['Drupal', 'AWS', 'InDesign'],
  },
  {
    years: '2022 — 23',
    org: 'Nugi Technologies',
    orgUrl: 'https://nugitech.com/',
    role: 'Software Engineer',
    description:
      'Backend for Fuel Plug, a platform helping drivers find fuel during shortages. Led updates to auth and payment microservices, built inter-service APIs, documented everything.',
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
  },
  {
    years: '2020 — 21',
    org: 'Covenant University',
    orgUrl: 'https://www.covenantuniversity.edu.ng/',
    role: 'Software Researcher',
    description:
      'Built a recommender-system prototype tackling cold-start by combining collaborative filtering with Twitter social data — 75% user satisfaction in testing.',
    tags: ['Python', 'Django', 'NetworkX'],
  },
  {
    years: '2018 — 20',
    org: 'CSIS & freelance',
    role: 'Web development · IT support',
    description:
      'University portals (Smart CU, RCE Ogun) and small-business websites — payments, SEO, social growth. Where I learned to ship for non-technical users.',
    tags: ['WordPress', 'JavaScript', 'Paystack'],
  },
];

export const startups = [
  {
    name: 'Techstart HQ',
    url: 'https://web.archive.org/web/20220808161022/https://techstarthq.com/',
    description: 'Growth strategy and launch campaigns for the ed-tech startup.',
    result: '+37% revenue',
  },
  {
    name: 'Symble Live',
    url: 'https://web.archive.org/web/20230411125654/https://symble.live/',
    description: 'Piloted the app at a live music show — first users, core features validated.',
    result: 'first users',
  },
  {
    name: 'Second Tree',
    url: 'https://secondtree.org/',
    description: 'Identified engagement data pain points for the refugee-education NGO.',
    result: 'data strategy',
  },
];

export const credentials: { label: string; body: string; url?: string; urlLabel?: string }[] = [
  {
    label: 'Education',
    /* TODO(daniel): degree, institution, year — from your CV */
    body: 'B.Sc., Covenant University.',
  },
  {
    label: 'In the press',
    body: 'Anenasawa covered by AP News and profiled by Elrha.',
  },
  {
    label: 'Volunteering',
    body: 'ICONS CUP — partnered with 10 schools in Ogun State to bridge public/private school divides through sport (SDG 4).',
    url: 'https://edutorial.ng/bells-secondary-school-wins-maiden-icons-football-competition/',
    urlLabel: 'Coverage →',
  },
  {
    label: 'Content',
    body: '"Tech for Good" on YouTube · essays on Medium and Substack.',
  },
];
