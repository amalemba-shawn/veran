import { Stethoscope, HeartPulse, Brain, Microscope, Baby, UserCheck } from 'lucide-react';
import { ServiceItem, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Patients', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'General Practice',
    description: 'Comprehensive medical care for individuals and families, focusing on prevention and wellness.',
    icon: Stethoscope
  },
  {
    id: '2',
    title: 'Cardiology Support',
    description: 'Monitoring and management of heart health, blood pressure, and cholesterol levels.',
    icon: HeartPulse
  },
  {
    id: '3',
    title: 'Mental Wellness',
    description: 'Integrative approach to mental health including stress management and anxiety relief.',
    icon: Brain
  },
  {
    id: '4',
    title: 'Lab Diagnostics',
    description: 'On-site blood work and diagnostic testing for rapid and accurate results.',
    icon: Microscope
  },
  {
    id: '5',
    title: 'Pediatric Care',
    description: 'Specialized care for infants, children, and adolescents in a friendly environment.',
    icon: Baby
  },
  {
    id: '6',
    title: 'Preventative Screenings',
    description: 'Regular health checkups and cancer screenings to detect issues early.',
    icon: UserCheck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Emily R.',
    text: "Dr. veran actually listens. I've never felt rushed during an appointment, and her diagnosis was spot on.",
    role: 'Patient since 2019'
  },
  {
    id: 't2',
    name: 'Michael T.',
    text: "The clinic is spotless and the staff is incredibly welcoming. The mobile booking system makes my life so much easier.",
    role: 'Patient since 2021'
  },
  {
    id: 't3',
    name: 'Sarah L.',
    text: "I appreciate the holistic approach. She doesn't just treat symptoms but looks for the root cause.",
    role: 'Patient since 2022'
  }
];

export const CLINIC_INFO = {
  phone: "+254796850074",
  address: "melany homes syokimau",
  email: "veranakamah18@gmail.com"
};