import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import Container from './Container';

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

  // Bloqueio de Scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Trajetória', href: '#about' },
    { name: 'Clínica', href: '#clinical' },
    { name: 'Mentoria', href: '#mentoria' },
    { name: 'Corporate', href: '#corporate' },
    { name: 'FAQ', href: '#faq' },
  ];

  // URL Direta da API para Aplicação
  const message = "Olá. Tenho interesse em realizar uma aplicação para o ecossistema estratégico.";
  const phoneNumber = "5511958131645";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <Container className="flex items-center justify-between relative">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-800 hover:text-gray-500 transition-colors absolute left-4 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group mx-auto md:mx-0 z-50">
          <img src="/img/logo horizontal.png" alt="Camila Conceição Psicóloga" className="h-8 md:h-10 object-contain group-hover:opacity-80 transition-opacity" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-900/70 hover:text-gray-900 transition-colors font-light text-xs uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          
          {/* BOTÃO CTA ESTILO HIGH TICKET */}
          <a 
            href="#application"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-gray-900 font-bold text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-300 shadow-md shadow-primary/20"
          >
            Aplicação
          </a>
        </nav>

        <div className="w-10 md:hidden z-40"></div> 
      </Container>

      {/* Mobile Navigation (Editorial Drawer) */}
      <div className={`md:hidden fixed inset-0 z-[100] bg-[#FCFCFC] h-[100dvh] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
        <div className="flex flex-col h-full overflow-y-auto p-8 pt-8">

          {/* Header do Menu Mobile */}
          <div className="flex justify-between items-center mb-16">
            <img src="/img/logo horizontal.png" alt="Camila Conceição" className="h-8 w-auto object-contain" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 p-2 -mr-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Itens do Menu - Alinhamento Editorial */}
          <nav className="flex flex-col space-y-8 flex-grow">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-serif text-gray-900 hover:italic transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-12">
              <a
                href="#application"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-gray-900 text-white py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-colors"
              >
                Acesso ao Ecossistema
              </a>
            </div>
          </nav>

          {/* Rodapé do Menu - Autoridade */}
          <div className="mt-auto border-t border-gray-200 pt-8 flex justify-between items-end pb-6">
            <div>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1 font-medium">Estrategista Comportamental</p>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">CRP 06/166430</p>
            </div>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/camilaconceicaopsi_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="https://www.linkedin.com/in/camila-concei%C3%A7%C3%A3o-costa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;