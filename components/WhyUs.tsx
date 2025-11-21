import React from 'react';
import { Heart, Zap, GraduationCap, Wallet, Users, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: <Heart className="h-8 w-8 text-zzs-red" />,
    title: "People First",
    desc: "U nás nejste číslo. Vaše well-being, rozvoj a work-life balance jsou naše priorita."
  },
  {
    icon: <Zap className="h-8 w-8 text-zzs-orange" />,
    title: "Modernizace",
    desc: "Pracujte s nejnovějším vybavením. Digitalizace, telemetrie, elektronická dokumentace."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
    title: "Rozvoj & Kariéra",
    desc: "Zlínská záchranná akademie, mentoring, kariérní růst. Investujeme do vašeho vzdělávání."
  },
  {
    icon: <Wallet className="h-8 w-8 text-green-600" />,
    title: "Férové ohodnocení",
    desc: "Konkurenceschopné mzdy, benefity, příspěvky na stravenky, penzijní pojištění."
  },
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    title: "Tým & Podpora",
    desc: "Vstupujete do rodiny profesionálů. Psychosociální podpora, otevřené dveře vedení."
  },
  {
    icon: <MapPin className="h-8 w-8 text-red-500" />,
    title: "Zlínský kraj",
    desc: "Žijte a pracujte v krásném regionu s tradicí, kulturou a skvělou komunitou."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zzs-dark mb-4">Proč pracovat pro ZZS Zlínského kraje?</h2>
          <div className="w-24 h-1 bg-zzs-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-zzs-red/20 group"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-zzs-dark mb-3 group-hover:text-zzs-red transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#team" 
            className="inline-flex items-center text-zzs-red font-bold hover:text-red-800 transition-colors text-lg"
          >
            Poznejte náš tým
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;