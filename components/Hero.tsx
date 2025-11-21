import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          // Using a placeholder that resembles emergency/medical context
          src="https://picsum.photos/id/1047/1920/1080" 
          alt="Záchranáři v akci"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zzs-dark/90 via-zzs-dark/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-block px-3 py-1 mb-4 border border-zzs-orange/50 rounded-full bg-zzs-orange/10 backdrop-blur-sm">
            <span className="text-zzs-orange font-semibold text-sm tracking-wide uppercase">People First</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Zachraňuj životy. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zzs-red to-zzs-orange">
              Rozvíjej se.
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed">
            Zdravotnická záchranná služba Zlínského kraje hledá profesionály s velkým srdcem. 
            Přidejte se k týmu, kde jste vy na prvním místě.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#jobs"
              className="flex items-center justify-center px-8 py-4 bg-zzs-red text-white text-lg font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all transform hover:-translate-y-1"
            >
              Volné pozice
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#why-us"
              className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              Proč ZZS Zlín?
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;