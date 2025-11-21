import { JobPosition, Testimonial, BenefitItem, StatItem } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Proč my', href: '#why-us' },
  { name: 'Tým', href: '#team' },
  { name: 'Pozice', href: '#jobs' },
  { name: 'Benefity', href: '#benefits' },
  { name: 'Kontakt', href: '#contact' },
];

export const STATS: StatItem[] = [
  { id: 'bases', value: 16, suffix: '', label: 'Výjezdových základen' },
  { id: 'employees', value: 500, suffix: '+', label: 'Zaměstnanců' },
  { id: 'time', value: 20, suffix: ' min', label: 'Garantovaná dojezdová doba' },
  { id: 'lives', value: 1000, suffix: '+', label: 'Zachráněných životů ročně' },
];

export const BENEFITS_DATA: BenefitItem[] = [
  { id: '1', title: 'Konkurenceschopná mzda', description: 'Férové ohodnocení dle kvalifikace a zkušeností.', iconName: 'Banknote' },
  { id: '2', title: 'Stravenky & příspěvky', description: 'Příspěvek na stravování, penzijní připojištění.', iconName: 'Utensils' },
  { id: '3', title: 'Vzdělávání', description: 'Zlínská záchranná akademie, konference, certifikace.', iconName: 'GraduationCap' },
  { id: '4', title: 'Zdravotní péče', description: 'Programy na prevenci vyhoření, psychologická podpora.', iconName: 'HeartPulse' },
  { id: '5', title: 'Work-life balance', description: 'Flexibilní směny, 5 týdnů dovolené.', iconName: 'Palmtree' },
  { id: '6', title: 'Moderní technika', description: 'Nové vozy a špičková zdravotnická technika.', iconName: 'Ambulance' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Petra Nováková',
    role: 'Zdravotnická záchranářka',
    quote: 'Každý den vím, že moje práce má smysl. ZZS Zlín mi dává prostor růst, podporuje mě a má otevřené dveře.',
    image: 'https://picsum.photos/id/338/400/400', // Placeholder
  },
  {
    id: '2',
    name: 'MUDr. Jan Svoboda',
    role: 'Lékař výjezdové skupiny',
    quote: 'Profesionalita kolegů a moderní vybavení mi umožňují dělat medicínu na nejvyšší úrovni přímo v terénu.',
    image: 'https://picsum.photos/id/1062/400/400', // Placeholder
  },
  {
    id: '3',
    name: 'Tomáš Kučera',
    role: 'Řidič vozidla ZZS',
    quote: 'Jsme tu jeden pro druhého. Když jde o vteřiny, vím, že se na svůj tým můžu stoprocentně spolehnout.',
    image: 'https://picsum.photos/id/823/400/400', // Placeholder
  },
];

export const JOBS_DATA: JobPosition[] = [
  {
    id: 'rescuer',
    title: 'Zdravotnický záchranář',
    locations: ['Zlín', 'Vsetín', 'Kroměříž'],
    type: 'Plný úvazek',
    shortDescription: 'Poskytujete přednemocniční neodkladnou péči, pracujete v týmu, zachraňujete životy.',
    requirements: ['Odborná způsobilost k výkonu povolání', 'Řidičský průkaz sk. B', 'Zdravotní způsobilost', 'Trestní bezúhonnost'],
    benefits: ['Náborový příspěvek', '5 týdnů dovolené', 'Systém celoživotního vzdělávání'],
    contact: { name: 'Personální oddělení', phone: '+420 577 056 935', email: 'kariera@zzszk.cz' }
  },
  {
    id: 'doctor',
    title: 'Lékař/ka ZZS',
    locations: ['Celý Zlínský kraj'],
    type: 'Plný úvazek',
    shortDescription: 'Lékařská péče v urgentních stavech. Vedení výjezdového týmu.',
    requirements: ['VŠ vzdělání v oboru všeobecné lékařství', 'Specializovaná způsobilost v oboru urgentní medicína (výhodou)', 'Komunikativnost a odolnost vůči stresu'],
    benefits: ['Nadstandardní platové ohodnocení', 'Podpora dalšího vzdělávání', 'Ubytování pro mimoregionální'],
    contact: { name: 'MUDr. Vedoucí Lékař', phone: '+420 577 056 999', email: 'kariera@zzszk.cz' }
  },
  {
    id: 'driver',
    title: 'Řidič vozidla ZZS',
    locations: ['Uherské Hradiště', 'Valašské Meziříčí'],
    type: 'Plný úvazek',
    shortDescription: 'Bezpečná přeprava posádky a pacienta, technická pomoc při ošetřování.',
    requirements: ['Kurz řidiče ZZS', 'Řidičský průkaz sk. C', 'Fyzická zdatnost'],
    benefits: ['Jistota stabilního zaměstnání', 'Moderní vozový park', 'Příspěvky na stravování'],
    contact: { name: 'Technické oddělení', phone: '+420 577 056 935', email: 'kariera@zzszk.cz' }
  }
];
