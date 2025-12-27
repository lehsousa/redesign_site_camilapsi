import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';
// Importamos o Button, mas vamos usar tags <a> estilizadas para ser mais rápido
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
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  // URL Direta da API (Mais rápida que wa.me no desktop)
  const message = "Olá! Acessei o site e gostaria de agendar uma sessão.";
  const phoneNumber = "5511958131645";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <Container className="flex items-center justify-between relative">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-secondary hover:text-primary transition-colors absolute left-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group mx-auto md:mx-0">
          <img src="/img/logo horizontal.png" alt="Camila Conceição Psicóloga" className="h-10 w-auto md:h-12 object-contain group-hover:opacity-90 transition-opacity" />
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
          
          {/* BOTÃO TURBINADO (Link direto <a>) */}
          {/* Usamos as mesmas classes visuais do Button, mas é um link nativo */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Agendar
          </a>
        </nav>

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
          
          {/* Botão Mobile Turbinado */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center rounded-full mt-4 py-3 bg-primary text-white font-medium shadow-md active:scale-95 transition-all"
          >
            Agendar Sessão
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;