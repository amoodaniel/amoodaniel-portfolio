/* Central place for identity, links, and shared copy. */

export const site = {
  name: 'Daniel Amoo',
  wordmark: 'AMOO.DEV',
  role: 'Digital Information Officer · Humanitarian Tech',
  email: 'danielamoo35@gmail.com',
  bookCallUrl: 'https://cal.com/danielamoo/30min',
  url: 'https://amoo.dev',
};

export const socials = [
  { label: 'GitHub', url: 'https://github.com/amoodaniel' },
  /* TODO(daniel): verify LinkedIn handle */
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/amoodaniel/' },
  { label: 'Medium', url: 'https://amoodaniel.medium.com/' },
  { label: 'YouTube', url: 'https://www.youtube.com/@amoodaniel' },
];

export const writingPlatforms = {
  medium: 'https://amoodaniel.medium.com/list/amoos-tech-articles-0bccbf7a8830',
  substack: 'https://amoodaniel.substack.com',
};

/* "BUILT WITH" org strip — rendered as a text marquee per the brief */
export const orgs = [
  'UNHCR',
  'IsraAID',
  'Global Protection Cluster',
  'Second Tree',
  'Elrha',
];

export const whatIDo = [
  {
    title: 'Frontline data systems',
    description:
      'Case management, reporting, and monitoring tools built for low-connectivity field realities — WhatsApp bots, offline-first flows, supervisor dashboards.',
  },
  {
    title: 'Technology strategy',
    description:
      'Roadmaps and tool selection for humanitarian programs — grounded in what actually survives deployment, not vendor decks.',
  },
  {
    title: 'Training & capacity building',
    description:
      'Handover that sticks: training programs and documentation so field teams own the tools after I leave.',
  },
];

export const homeMetrics = [
  {
    value: '+90%',
    countTo: 90,
    prefix: '+',
    suffix: '%',
    caption:
      'more GBV disclosures recorded vs. paper-based reporting, first deployment phase',
  },
  {
    value: '7,080',
    countTo: 7080,
    caption: 'beneficiaries reached through the Anenasawa system in South Sudan',
  },
  {
    value: 'AP News',
    caption: 'international coverage of the work —',
    link: {
      label: 'read the story →',
      url: 'https://apnews.com/article/technology-gender-based-violence-south-sudan-sexual-assault-981be393459e5c0724e1dc1793e4d0e6',
    },
  },
];
