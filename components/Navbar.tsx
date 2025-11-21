import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-zzs-red text-white' : 'bg-white text-zzs-red'}`}>
                <Heart className="h-6 w-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-none transition-colors ${isScrolled ? 'text-zzs-dark' : 'text-white'}`}>
                  ZZS Zlínského kraje
                </span>
                <span className={`text-xs font-medium tracking-wider uppercase transition-colors ${isScrolled ? 'text-gray-500' : 'text-gray-200'}`}>
                  Kariéra
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-zzs-red ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#jobs"
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-zzs-red text-white hover:bg-red-700'
                  : 'bg-white text-zzs-red hover:bg-gray-100'
              }`}
            >
              Volné pozice
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-zzs-red hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#jobs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-md font-bold bg-zzs-red text-white hover:bg-red-700"
              >
                Volné pozice
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;