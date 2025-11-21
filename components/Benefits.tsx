import React from 'react';
import { Banknote, Utensils, GraduationCap, HeartPulse, Palmtree, Ambulance, LucideIcon, ArrowRight } from 'lucide-react';
import { BENEFITS_DATA } from '../constants';

// Map icon names to components
const iconMap: { [key: string]: LucideIcon } = {
  Banknote,
  Utensils,
  GraduationCap,
  HeartPulse,
  Palmtree,
  Ambulance
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zzs-dark">Co od nás dostanete?</h2>
          <p className="text-gray-500 mt-4 text-lg">Kromě smysluplné práce nabízíme i skvělé zázemí.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BENEFITS_DATA.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || HeartPulse;
            return (
              <div key={benefit.id} className="flex items-start p-6 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm text-gray-400 group-hover:text-zzs-red transition-colors">
                  <Icon size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-zzs-dark mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-zzs-red text-white text-lg font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all transform hover:-translate-y-1"
          >
            Chci se přihlásit
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;