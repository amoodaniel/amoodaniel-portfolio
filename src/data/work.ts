/* Case studies and product/selected-build rows for the Work page and Home cards. */

export interface CaseStudyColumn {
  label: string;
  body: string;
  note?: string;
}

export interface CaseStudyMetric {
  value: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
  caption: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  meta: string;
  title: string;
  tags: string[];
  columns: CaseStudyColumn[];
  metrics?: CaseStudyMetric[];
  press?: { label: string; url: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'anenasawa',
    number: '01',
    meta: 'ISRAAID · SOUTH SUDAN · 2024–PRESENT',
    title: 'WhatsApp reporting system — case reporting for GBV outreach workers',
    tags: ['Chatbot', 'Python', 'Streamlit', 'Airtable', 'Funded by Elrha'],
    columns: [
      {
        label: 'The problem',
        body: 'The first, most time-sensitive steps of GBV case identification run on paper — slow, hard to supervise, and vulnerable to privacy breaches and data loss. Existing digital tools target later phases of case management, leaving frontline reporting disconnected in exactly the places with the worst connectivity.',
      },
      {
        label: 'What I built',
        body: 'A WhatsApp bot that guides outreach workers through structured flows for activity reporting and sensitive disclosures, designed for low digital literacy and unreliable networks — plus a supervisor dashboard that tracks every case from disclosure to referral in real time. Field-tested and iterated directly with outreach teams.',
      },
      {
        label: 'What changed',
        body: 'Disclosures rose more than 90% over paper-based reporting in the first deployment phase. Case managers gained full visibility of status and assignments, and outreach workers spend their time with survivors instead of on paperwork.',
      },
    ],
    metrics: [
      { value: '+90%', countTo: 90, prefix: '+', suffix: '%', caption: 'disclosures vs. paper-based reporting' },
      { value: '7,080', countTo: 7080, caption: 'beneficiaries — 880 direct, 6,200 indirect' },
      { value: 'Real-time', caption: 'case tracking from disclosure to referral' },
    ],
    press: [
      {
        label: 'AP News — Technology helps combat GBV in crisis regions →',
        url: 'https://apnews.com/article/technology-gender-based-violence-south-sudan-sexual-assault-981be393459e5c0724e1dc1793e4d0e6',
      },
      {
        label: 'Elrha — project profile →',
        url: 'https://www.elrha.org/projects/anenasawa-gbv-sms-bot-for-community-outreach-workers',
      },
    ],
  },
  {
    id: 'maji-monitor',
    number: '02',
    meta: 'TURKANA WEST, KENYA · IN DEVELOPMENT',
    title: 'Community water reporting system — community-triggered water infrastructure reporting',
    tags: ['WASH', 'AI voice', 'Field reporting'],
    columns: [
      {
        label: 'The problem',
        body: 'Communities in water-scarce, conflict-affected Turkana West depend on NGO maintenance rounds to keep water points running. Breakdowns wait for the next visit — delaying repairs, skipping quality testing, and deepening scarcity.',
      },
      {
        label: "What I'm building",
        body: 'A reporting system that lets community members flag water access issues directly, routed to WASH teams in real time.',
        note: '[ Detail withheld while in development — full write-up to follow pilot ]',
      },
      {
        label: 'The target',
        body: '50,000+ community members across 20 underserved communities, with response times measured in hours instead of maintenance cycles.',
      },
    ],
  },
];

/* Home page "Selected work" cards — whole card is the link, metric is mandatory. */
export const selectedWork = [
  {
    id: 'anenasawa',
    label: '01 — ISRAAID · SOUTH SUDAN',
    title: 'WhatsApp reporting system — case reporting for GBV outreach',
    description:
      'Structured disclosure flows for frontline workers in low-connectivity settings, with a real-time case dashboard for supervisors.',
    metric: { value: '+90%', caption: 'disclosures vs. paper-based reporting' },
    tags: ['Chatbot', 'Python', 'Case management'],
  },
  {
    id: 'maji-monitor',
    label: '02 — TURKANA WEST, KENYA · IN DEVELOPMENT',
    title: 'Community water reporting system — reporting water access issues in real time',
    description:
      'A community reporting system that moves water-point maintenance from NGO-dependent rounds to citizen-triggered response.',
    metric: { value: '50,000+', caption: 'community members across 20 communities' },
    tags: ['WASH', 'AI voice', 'Field reporting'],
  },
];

export interface ProductRow {
  title: string;
  description: string;
  /* inline links rendered inside the description area */
  links?: { label: string; url: string }[];
  meta: string;
  url: string;
}

export const products: ProductRow[] = [
  {
    title: 'Invoice Nomad',
    description:
      'Invoicing app for freelancers and small businesses — generate, manage, and track invoices. Live product.',
    meta: 'React · TypeScript',
    url: 'https://invoicenomad.com',
  },
  {
    title: 'LLM hiring system analysis',
    description:
      'Audit of the Pariti LLM hiring model: applicant demographics, stage bottlenecks, and how well the model filters qualified candidates.',
    meta: 'Python · Data analysis',
    url: 'https://github.com/amoodaniel/LLM-hiring-system-analysis',
  },
  {
    title: 'Twitter-data recommender system',
    description:
      'Research prototype solving cold-start in e-commerce recommendations by combining collaborative filtering with social network analysis — 75% user satisfaction in tests.',
    meta: 'Python · NetworkX',
    url: 'https://github.com/amoodaniel/Recommendation-system-using-twitter-data',
  },
  {
    title: 'Sales analysis with PySpark',
    description:
      "Distributed sales-data analysis using PySpark's parallel processing for scalable analytics.",
    meta: 'PySpark',
    url: 'https://github.com/amoodaniel/Sales-Analysis-with-Pyspark',
  },
  {
    title: 'AI PDF summarizer',
    description: 'Extracts and summarizes long PDF documents into digestible briefs.',
    meta: 'Python',
    url: 'https://github.com/amoodaniel/AI-PDF-summarizer',
  },
  {
    title: 'Web builds for institutions',
    description:
      'Smart CU and RCE Ogun for Covenant University, Scheme Royal Limited — WordPress builds serving thousands of students and clients.',
    links: [
      { label: 'Smart CU', url: 'https://smartcu.covenantuniversity.edu.ng/' },
      {
        label: 'RCE Ogun',
        url: 'https://web.archive.org/web/20240810094026/http://rceogun.covenantuniversity.edu.ng/',
      },
      { label: 'Scheme Royal', url: 'https://schemeroyal.com' },
    ],
    meta: 'WordPress',
    url: 'https://smartcu.covenantuniversity.edu.ng/',
  },
];
