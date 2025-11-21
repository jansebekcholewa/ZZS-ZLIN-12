import React from 'react';
import { CheckCircle } from 'lucide-react';

const Values: React.FC = () => {
  return (
    <section id="values" className="py-20 bg-zzs-dark text-white relative overflow-hidden scroll-mt-28">
       {/* Decorative background elements */}
       <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-zzs-red rounded-full opacity-10 blur-3xl"></div>
       <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-zzs-orange rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 mb-6 border border-zzs-red rounded-full text-zzs-red font-bold bg-zzs-red/10">
              People First
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              People First není slogan. <br />
              <span className="text-gray-400">Je to náš způsob vedení.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Od 1. prosince 2025 vede ZZS Zlínského kraje Mgr. Jan Šebek Cholewa, MBA. 
              Jeho vize je jednoduchá: Lidé jsou na prvním místě.
            </p>
            
            <div className="space-y-4">
              {[
                "Váš hlas má váhu – pravidelná setkávání a zpětná vazba",
                "Investujeme do vašeho rozvoje a kariéry",
                "Work-life balance – respektujeme váš život mimo práci",
                "Uznání za každou směnu, ne jen za hrdinství",
                "Transparentnost = důvěra"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zzs-orange flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
               <a href="https://www.zzszk.cz/vedeni" target="_blank" rel="noreferrer" className="text-white underline hover:text-zzs-orange transition-colors">
                 Více o vedení ZZS &rarr;
               </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-zzs-red to-transparent rounded-2xl transform rotate-3 opacity-50"></div>
            <img 
              src="https://picsum.photos/id/1074/600/700" // Placeholder for Director portrait
              alt="Mgr. Jan Šebek Cholewa, MBA" 
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-zzs-dark p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="italic font-medium text-lg mb-2">"Mým cílem je vytvořit prostředí, kde se budete cítit bezpečně, uznávaně a motivovaně."</p>
              <p className="text-sm font-bold text-zzs-red">- Jan Šebek Cholewa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;