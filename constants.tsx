
import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Cpu, 
  Award, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Leaf 
} from 'lucide-react';
import { Project, Attribute, ProcessStep } from './types';

export const COLORS = {
  warmOffWhite: '#F8F7F4',
  charcoal: '#1A1A1A',
  midnightBlue: '#1E2B3A',
  slateGrey: '#5F6B75',
  tealSteel: '#3C6E71',
  divider: '#E5E5E5'
};

export const PROJECTS: Project[] = [
  {
    id: 'hrdc-uoh',
    name: 'Human Resources Development Centre (HRDC)',
    client: 'University of Hyderabad (CPWD)',
    location: 'Gachibowli, Hyderabad',
    category: 'Institutional',
    status: 'Completed',
    description: 'EPC basis construction of HRDC project including Civil works, internal water supply, sanitary installations, sewerage, and drainage.',
    scope: ['Civil Works', 'Internal MEP', 'Site Development', 'Drainage Systems'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    details: {
      epc: '100% EPC Delivery Model',
      civil: 'Complete structural and finishing works',
      internalSystems: 'Advanced ventilation and water management'
    }
  },
  {
    id: 'lakewood-villas',
    name: 'Lakewood Villas',
    client: 'Saridena Constructions',
    location: 'Gandipet, Hyderabad',
    category: 'Residential',
    status: 'Ongoing',
    description: 'Construction of 6 high-end luxury villas, each spanning a massive 11,000 sft of built-up area.',
    scope: ['Premium Finishes', 'Structural Engineering', 'Landscape Integration'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sancta-maria',
    name: 'Sancta Maria International School',
    client: 'Trisha Infracon Projects Ltd',
    location: 'Shamshabad, Hyderabad',
    category: 'Institutional',
    status: 'Ongoing',
    description: 'Infrastructure development for a premier international educational institution.',
    scope: ['Educational Spaces', 'Safety Systems', 'Large-scale Infrastructure'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'railway-building',
    name: 'Railway Buildings (Nekonda-Warangal)',
    client: 'Zetwerk Manufacturing Private Limited',
    location: 'Warangal, Telangana',
    category: 'Infrastructure',
    status: 'Ongoing',
    description: 'Construction of essential railway buildings along the 3rd line for strategic logistics.',
    scope: ['Railway Infrastructure', 'Strategic Civil Works', 'Structural Rigidity'],
    image: 'https://images.unsplash.com/photo-1449156003053-c2d8244fe3ba?auto=format&fit=crop&q=80&w=1200'
  }
];

export const ATTRIBUTES: Attribute[] = [
  {
    id: 1,
    title: 'Ownership of Outcomes',
    description: 'We don’t just execute; we take responsibility for the final success of the project.',
    icon: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'Early Stage Clarity',
    description: 'Resolving complexities before they become constraints through rigorous planning.',
    icon: 'Target'
  },
  {
    id: 3,
    title: 'Engineering-Driven Leadership',
    description: 'Led by NICMAR alumni, bringing deep technical discipline to every site.',
    icon: 'Cpu'
  },
  {
    id: 4,
    title: 'Execution Excellence',
    description: 'Precision in complex and custom projects where standards are non-negotiable.',
    icon: 'Award'
  },
  {
    id: 5,
    title: 'Communication That Builds Trust',
    description: 'Transparent reporting and proactive issue resolution at every milestone.',
    icon: 'MessageSquare'
  },
  {
    id: 6,
    title: 'Speed with Quality',
    description: 'Optimized resource allocation to ensure timelines are met without cutting corners.',
    icon: 'Zap'
  },
  {
    id: 7,
    title: 'Technology Enabled Tracking',
    description: 'Real-time monitoring and reporting using modern project management software.',
    icon: 'BarChart3'
  },
  {
    id: 8,
    title: 'Sustainability as Core Practice',
    description: 'Minimizing environmental impact through efficient material use and design.',
    icon: 'Leaf'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: 'Concept Alignment', description: 'Deep dive into client vision and site feasibility.' },
  { id: 2, title: 'Detailed Engineering', description: 'Rigorous technical planning and blueprint finalization.' },
  { id: 3, title: 'Resource Optimization', description: 'Strategic procurement and talent allocation.' },
  { id: 4, title: 'Controlled Execution', description: 'Precision building with strict quality checkpoints.' },
  { id: 5, title: 'Transparent Tracking', description: 'Regular updates and data-driven progress monitoring.' },
  { id: 6, title: 'Timely Handover', description: 'Seamless delivery meeting all technical benchmarks.' }
];

export const CLIENTS = [
  'Central Public Works Department (CPWD)',
  'N. Nageswara Rao & Co',
  'Rainbow Children’s Hospital',
  'BirthRight by Rainbow',
  'Sancta Maria International School',
  'Trisha Infracon Projects Pvt Ltd',
  'Saridena Constructions Pvt Ltd',
  'Zetwerk Manufacturing Private Limited'
];
