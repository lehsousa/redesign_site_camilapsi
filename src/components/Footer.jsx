import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 text-white/80 text-sm border-t border-white/10">
      <Container className="flex flex-col items-center text-center gap-8">
        <div>
          <h3 className="text-2xl font-bold font-serif italic text-primary drop-shadow-sm mb-2">Camila Conceição</h3>
          <p className="text-white/60">Psicologia com amor e ciência.</p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/camilaconceicaopsi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="mailto:contato@camilaconceicaopsi.com.br"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://wa.me/5511958131645" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
        
        <div className="flex flex-col items-center gap-2 text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Camila Conceição Psicóloga. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <span className="text-red-400">❤</span>
          </p>
          <a href="https://senitte.com.br" target="_blank" rel="noopener noreferrer">Senitte</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
