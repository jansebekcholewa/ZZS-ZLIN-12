import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-zzs-red font-bold tracking-wider uppercase text-sm">Náš tým</span>
          <h2 className="text-3xl md:text-4xl font-bold text-zzs-dark mt-2">Lidé, kteří tvoří ZZS Zlín</h2>
          <p className="text-xl text-gray-500 mt-4 font-light">Není to jen práce. Je to poslání.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((person) => (
            <div key={person.id} className="group relative">
              {/* Image container */}
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <Quote className="h-8 w-8 text-zzs-orange mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
                  <p className="text-white text-lg italic mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    "{person.quote}"
                  </p>
                  <h3 className="text-white text-2xl font-bold">{person.name}</h3>
                  <p className="text-zzs-orange font-medium">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;