import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  // Mensagem pré-definida para aumentar a conversão
  const message = "Olá, Camila! Vi seu site e gostaria de saber mais sobre a terapia.";
  
  // Número atualizado (mantendo o 55 do Brasil para funcionar links internacionais)
  const whatsappLink = `https://wa.me/5511958131645?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-secondary py-12 text-white/80 text-sm border-t border-white/10">
      <Container className="flex flex-col items-center text-center gap-8">
        
        {/* Bloco de Identidade e Autoridade */}
        <div className="space-y-2">
          <h3 className="text-3xl font-bold font-serif italic text-primary drop-shadow-sm">
            Camila Conceição
          </h3>
          <p className="text-white/90 font-medium tracking-wide">
            Psicóloga Clínica | CRP 06/166430
          </p>
          <p className="text-white/60">
            Especialista em Terapia de Aceitação e Compromisso (ACT)
          </p>
          
          {/* O "Pulo do Gato" para nicho de alto valor */}
          <div className="pt-2">
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-primary font-medium">
              🌍 Atendimento Online para Brasil e Brasileiros no Exterior
            </span>
          </div>
        </div>

        {/* Ícones de Contato */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/camilaconceicaopsi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a 
            href="mailto:contato@camilaconceicaopsi.com.br"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>
        
        {/* Copyright e Créditos */}
        <div className="flex flex-col items-center gap-3 text-white/40 text-xs pt-8 border-t border-white/5 w-full max-w-xs">
          <p>&copy; {new Date().getFullYear()} Camila Conceição Psicóloga. Todos os direitos reservados.</p>
          
          <div className="flex flex-col items-center gap-1">
            <p className="flex items-center gap-1">
              Desenvolvido com <span className="text-red-400 animate-pulse">❤</span> por
            </p>
            <a 
              href="https://senitte.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary font-medium tracking-widest uppercase text-[10px] transition-colors"
            >
              Senitte
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;