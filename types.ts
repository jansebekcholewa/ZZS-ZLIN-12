export interface JobPosition {
  id: string;
  title: string;
  locations: string[];
  type: 'Plný úvazek' | 'Částečný úvazek' | 'Dohoda';
  shortDescription: string;
  requirements: string[];
  benefits: string[];
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}