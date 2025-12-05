import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum AppointmentType {
  CONSULTATION = 'Initial Consultation',
  FOLLOW_UP = 'Follow-up Visit',
  CHECKUP = 'Annual Checkup',
  TELEHEALTH = 'Telehealth Video Call'
}