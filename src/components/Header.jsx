import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Especialidades', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <Container className="flex items-center justify-between relative">
        {/* Mobile Menu Button - Left on Mobile */}
        <button 
          className="md:hidden p-2 text-secondary hover:text-primary transition-colors absolute left-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo - Centered on Mobile, Left on Desktop */}
        <a href="#" className="flex items-center gap-3 group mx-auto md:mx-0">
          <img src="/img/logo horizontal.png" alt="Camila Conceição" className="h-10 w-auto md:h-12 object-contain group-hover:opacity-90 transition-opacity" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-secondary/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="rounded-full px-6" onClick={() => window.open('https://forms.gle/q21UQB7dF5dYxUZv6', '_blank')}>
            Agendar
          </Button>
        </nav>

        {/* Placeholder for right side on mobile to balance the menu button if needed, or just keep logo centered */}
        <div className="w-10 md:hidden"></div> 
      </Container>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-secondary font-medium py-3 border-b border-gray-50 hover:text-primary transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full rounded-full mt-4 py-3" onClick={() => window.open('https://forms.gle/q21UQB7dF5dYxUZv6', '_blank')}>
            Agendar Sessão
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
