import { CaseStudyStat } from '@/components/case-study/types';

export type CaseStudyContent = {
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  challenge: string;
  insights: string;
  solution: string;
  beforeList: string[];
  afterList: string[];
  stats: CaseStudyStat[];
  technologiesText: string;
  techStack: string[];
  timeline: string[];
};

const defaultTimeline = [
  'Discovery & Research',
  'Brand + UX Architecture',
  'Component Development',
  'Deployment & Optimization',
];

export const caseStudyContent: Record<string, CaseStudyContent> = {
  humotionai: {
    heroTitle: 'HumotionAI — Full Case Study',
    heroSubtitle:
      'Designing an emotionally intelligent, voice-first destination that wins over enterprise wellness teams.',
    overview:
      'HumotionAI captures micro-shifts in tone, pacing, and sentiment to coach humans in real time. We rebuilt their digital HQ as a cinematic EI narrative—complete with emotion-engine labs, adaptive voice demos, and executive-ready trust proof.',
    challenge:
      'The previous site read like a research paper. Enterprise buyers could not see the EI engine, prospects could not hear the voice intelligence, and compliance pages were buried. Emotion, trust, and product depth never appeared in the same viewport.',
    insights:
      'Stakeholders wanted a site that “breathes like a calm conversation.” Prospects asked for layered explanations—science first, experience second, integration last. Voice demos converted when paired with visual cues and enterprise assurances on the same scroll.',
    solution:
      'We choreographed a story-driven experience: a hero that mirrors emotion waves, a lab sequence unveiling sensor inputs, demo carousels synced to voice cues, and integration grids that translate EI data into enterprise workflows. Every section blends empathy with proof, culminating in CTA blocks for pilots, sandbox access, and EI strategy sessions.',
    beforeList: [
      'Static paragraphs hiding the emotion engine and its differentiators',
      'Voice AI demos locked behind generic forms',
      'Compliance assurances reading like fine print',
      'No connective tissue between EI science, UX, and enterprise outcomes',
    ],
    afterList: [
      'Animated hero that visualizes empathy signals and sets narrative tone',
      'Modular demo gallery with live captions, tone states, and CTA anchors',
      'Dedicated trust storyboard covering governance, security, and data flows',
      'Executive-ready storyline that links EI signals to measurable value',
    ],
    stats: [
      { label: 'Engagement Boost', value: 3, suffix: 'x' },
      { label: 'Enterprise Trust Increase', value: 98, suffix: '%' },
      { label: 'Onboarding Speed', value: 45, suffix: '%' },
    ],
    technologiesText:
      'We paired React + Vite with Framer Motion to deliver fluid EI storytelling, leveraged Tailwind CSS for rapid theming, and wired Supabase edge functions plus Storyblok-ready JSON to power gated demos, analytics, and future campaign sections.',
    techStack: [
      'React + Vite',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Supabase Edge Functions',
      'Storyblok-ready Blocks',
    ],
    timeline: defaultTimeline,
  },
  sochboxai: {
    heroTitle: 'SochBoxAI — Full Case Study',
    heroSubtitle: 'Building the safest creator workflow ecosystem with zero-trust storytelling.',
    overview:
      'SochBoxAI aligns agencies, creators, and brands through an encrypted AI workflow. We transformed their web presence into a high-fidelity command center that dramatizes how assets move, who can touch them, and how AI keeps everything compliant.',
    challenge:
      'Creator teams bounced between shared drives, unsecured approvals, and endless email chains. The former site underplayed the encryption stack, lacked workflow clarity, and made security feel like a blocker instead of a differentiator.',
    insights:
      'Creators trust visuals more than PDFs. Showing how an asset moves from ideation to release—while the system shields it—became the north star. Brand partners needed immediate proof of role-based access plus automation loops that shave days off approvals.',
    solution:
      'We architected animated workflow rails, zero-trust status badges, and scenario-based playbooks. Each module mirrors SochBoxAI’s product: encrypted media vaults, AI assistant callouts, auto-approval ladders, and collaboration heatmaps. The tone stays creative yet enterprise-ready, ending with CTA blocks for security reviews and pilot invites.',
    beforeList: [
      'Leaky collaboration across unsecured storage and chat threads',
      'Opaque approval journeys with no ownership trail',
      'Security copy buried beneath marketing fluff',
      'Hard to explain how AI reduces manual content ops',
    ],
    afterList: [
      'Glowing workflow rails that document every handoff in real time',
      'Zero-trust permission panel exposed above the fold for instant clarity',
      'Encrypted media vault animation explaining watermarking & access guards',
      'Automation showcase proving how AI accelerates creator-brand approvals',
    ],
    stats: [
      { label: 'Unauthorized Access Reduction', value: 99.7, suffix: '%' },
      { label: 'Approval Speed Increase', value: 70, suffix: '%' },
      { label: 'Leak Incidents', value: 0 },
    ],
    technologiesText:
      'We chose React + TypeScript for predictable component modeling, Framer Motion for workflow cinematics, Supabase auth/storage for interactive demos, and Tailwind tokens to maintain the RYT dark enterprise sheen across every module.',
    techStack: [
      'React + TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Supabase Auth & Storage',
      'React Query',
      'Vercel Analytics',
    ],
    timeline: defaultTimeline,
  },
  expensetracker: {
    heroTitle: 'Expense Tracker — Full Case Study',
    heroSubtitle: 'Giving everyday users a fraud-proof, insight-forward financial co-pilot.',
    overview:
      'Expense Tracker empowers households and SMBs with AI coaching, predictive cash flow, and real-time fraud detection. We rebuilt the experience as a calm, data-rich cockpit that makes discipline feel powerful rather than punitive.',
    challenge:
      'The previous interface buried insights behind dense tables. Users could not see the next 30 days of cash flow, fraud alerts looked like generic banners, and mobile flows made budgeting feel like homework.',
    insights:
      'People respond to story-driven guidance: “Here’s what just happened, here’s what to do.” Mobile-first tiles, habit streaks, and predictive banners outperform spreadsheets. Fraud reassurance needs empathetic language paired with technical receipts.',
    solution:
      'RYT designed a responsive insight OS—hero forecasts, anomaly spotlights, categorized spend reels, and bite-sized education cards. AI explanations clarify why each alert fires, while CTA anchors nudge users to automate savings, dispute fraud, or share reports with advisors.',
    beforeList: [
      'Static dashboards with no predictive or narrative context',
      'Hidden fraud indicators that trigger panic instead of clarity',
      'Desktop-biased flows that ignored one-thumb navigation',
      'Financial jargon that alienated new users',
    ],
    afterList: [
      'Forecast-first hero with contextual callouts for cash flow health',
      'Fraud timeline explaining the event, response, and next steps',
      'Mobile-native layout with sticky actions and glanceable tiles',
      'Plain-language insights paired with optional deep-dive data',
    ],
    stats: [
      { label: 'Savings Improved', value: 32, suffix: '%' },
      { label: 'Transactions Secured Monthly', value: 10, suffix: 'M+' },
      { label: 'Fraudulent Withdrawals', value: 0 },
    ],
    technologiesText:
      'We deployed React + Vite with TypeScript for fast iteration, layered in Framer Motion for micro-interactions, used Tailwind for consistent theming, and connected Supabase analytics plus React Query to surface live financial signals.',
    techStack: [
      'React + Vite',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Query',
      'Supabase Analytics',
    ],
    timeline: defaultTimeline,
  },
};


