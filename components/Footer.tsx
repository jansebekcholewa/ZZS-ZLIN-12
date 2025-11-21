import React from 'react';
import { Heart, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zzs-dark text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="p-2 bg-zzs-red rounded-full mr-3">
              <Heart className="text-white h-5 w-5 fill-current" />
            </div>
            <span className="font-bold text-white text-lg">ZZS Zlínského kraje</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/zzszk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={24} /></a>
            <a href="https://www.instagram.com/zzs_zk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="https://www.linkedin.com/company/zdravotnick%C3%A1-z%C3%A1chrann%C3%A1-slu%C5%BEba-zl%C3%ADnsk%C3%A9ho-kraje" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.zzszk.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Hlavní web ZZSZK</a>
            <a href="https://www.zzszk.cz/gdpr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ochrana osobních údajů</a>
            <a href="https://www.zzszk.cz/prohlaseni-o-pristupnosti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Přístupnost</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Zdravotnická záchranná služba Zlínského kraje</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;