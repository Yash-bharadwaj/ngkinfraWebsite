import { Project, Attribute, ProcessStep, ClientBrand } from './types';
import {
  PROJECT_IMAGE_HRDC,
  PROJECT_IMAGE_LAKEWOOD,
  PROJECT_IMAGE_SANCTA_MARIA
} from './projectImages';

export const COLORS = {
  warmOffWhite: '#F8F7F4',
  charcoal: '#1A1A1A',
  midnightBlue: '#1E2B3A',
  slateGrey: '#5F6B75',
  tealSteel: '#3C6E71',
  divider: '#E5E5E5'
};

/** Primary business email (site-wide). */
export const PRIMARY_EMAIL = 'Shiva@ngkinfra.co.in';
export const PRIMARY_EMAIL_HREF = `mailto:${PRIMARY_EMAIL}`;
export const SITE_WEB_URL = 'https://www.ngkinfra.co.in';

/** Office phone — display and tel: href */
export const COMPANY_PHONE_DISPLAY = '+91 96763 88678';
export const COMPANY_PHONE_TEL = 'tel:+919676388678';

/** +91 96763 88678 — digits only for wa.me */
export const WHATSAPP_PHONE_E164 = '919676388678';
export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_PHONE_E164}`;

export const PROJECTS: Project[] = [
  {
    id: 'hrdc-uoh',
    name: 'Human Resources Development Centre (HRDC)',
    client: 'N. Nageswara Rao & Co with CPWD — University of Hyderabad',
    location: 'Gachibowli, Hyderabad',
    category: 'Institutional',
    status: 'Completed',
    description:
      'Full EPC delivery for the HRDC block at the University of Hyderabad: civil works, internal water supply and sanitary installations, sewerage, drainage, and site development — roughly 42,000 sq. ft. of built-up area coordinated end-to-end.',
    scope: ['Civil & RCC', 'Water supply & sanitation', 'Sewerage & drainage', 'Site development'],
    image: PROJECT_IMAGE_HRDC,
    year: '2023',
    details: {
      epc: 'Design & build EPC',
      civil: 'Structure through finishes',
      internalSystems: 'Wet services and external works integrated with civil delivery'
    }
  },
  {
    id: 'lakewood-villas',
    name: 'Lakewood Villas',
    client: 'Saridena Constructions',
    location: 'Gandipet, Hyderabad',
    category: 'Residential',
    status: 'Ongoing',
    description:
      'Six premium villas for a combined programme of about 66,000 sq. ft., each villa designed to a high-end residential standard with coordinated structure, envelope, and interior-ready shell delivery.',
    scope: ['Luxury villas', 'Structural quality', 'Finishes coordination'],
    image: PROJECT_IMAGE_LAKEWOOD
  },
  {
    id: 'sancta-maria',
    name: 'Sancta Maria International School',
    client: 'Trisha Infracon Projects (P) Ltd',
    location: 'Shamshabad, Hyderabad',
    category: 'Institutional',
    status: 'Ongoing',
    description:
      'Large-format institutional build for an international school — classrooms, circulation, and services planned for heavy daily use, with safety and durability treated as non-negotiables across roughly 94,000 sq. ft.',
    scope: ['Academic blocks', 'Safety & compliance', 'High-traffic educational spaces'],
    image: PROJECT_IMAGE_SANCTA_MARIA
  },
  {
    id: 'railway-building',
    name: 'Railway buildings — Nekonda to Warangal (3rd line)',
    client: 'Zetwerk Manufacturing Private Limited',
    location: 'Warangal, Telangana',
    category: 'Infrastructure',
    status: 'Ongoing',
    description:
      'Railway-related buildings along the third line between Nekonda and Warangal, executed to the tighter tolerances and coordination rhythms typical of transport infrastructure work alongside a manufacturing-led client team.',
    scope: ['Rail-adjacent civil buildings', 'Coordinated handoffs', 'Site execution discipline'],
    image: 'https://images.unsplash.com/photo-1449156003053-c2d8244fe3ba?auto=format&fit=crop&q=80&w=1200'
  }
];

export const ATTRIBUTES: Attribute[] = [
  {
    id: 1,
    title: 'Ownership of outcomes',
    description: 'We stand behind delivery — not just activity on site, but the result you can occupy and operate.',
    icon: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'Early clarity',
    description: 'Scope, interfaces, and risk are surfaced early so execution stays predictable.',
    icon: 'Target'
  },
  {
    id: 3,
    title: 'Engineering-led leadership',
    description: 'NICMAR-trained leadership keeps technical decisions and site reality aligned.',
    icon: 'Cpu'
  },
  {
    id: 4,
    title: 'Execution discipline',
    description: 'Structured supervision, inspections, and handover standards on every project.',
    icon: 'Award'
  },
  {
    id: 5,
    title: 'Transparent communication',
    description: 'Plain-spoken reporting and milestone tracking stakeholders can rely on.',
    icon: 'MessageSquare'
  },
  {
    id: 6,
    title: 'Speed without shortcuts',
    description: 'Lean resourcing and sequencing that protect quality and safety.',
    icon: 'Zap'
  },
  {
    id: 7,
    title: 'Technology-enabled control',
    description: 'Digital tools for quantities, cost visibility, and progress — including BIM where the job demands it.',
    icon: 'BarChart3'
  },
  {
    id: 8,
    title: 'Sustainability in practice',
    description: 'Material efficiency, waste discipline, and sensible energy choices baked into execution.',
    icon: 'Leaf'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: 'Pre-construction planning', description: 'Scope, budget, resources, and risk mapped before mobilisation.' },
  { id: 2, title: 'Engineering & procurement', description: 'Drawings, specifications, and vendor packages aligned to site reality.' },
  { id: 3, title: 'Controlled execution', description: 'Daily site rhythm, labour and vendor coordination, timeline adherence.' },
  { id: 4, title: 'Monitoring & control', description: 'Milestone tracking, inspections, and course corrections in real time.' },
  { id: 5, title: 'Quality & safety gates', description: 'Material certification, NBC-oriented checks, and zero-harm culture on site.' },
  { id: 6, title: 'Delivery & handover', description: 'Snag-led closure and documentation you can archive with confidence.' }
];

/** Partner / client names (shown as text on the site). */
export const CLIENT_BRANDS: ClientBrand[] = [
  { name: 'Central Public Works Department (CPWD)' },
  { name: 'N. Nageswara Rao & Co' },
  { name: "Rainbow Children's Hospital" },
  { name: 'BirthRight by Rainbow' },
  { name: 'Sancta Maria International School' },
  { name: 'Trisha Infracon Projects (P) Ltd' },
  { name: 'Saridena Constructions' },
  { name: 'Zetwerk' }
];
