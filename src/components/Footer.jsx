import React from 'react';
import { Instagram, Mail, ArrowRight } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  const message = "Olá, Camila. Tenho interesse em ingressar nos seus programas estratégicos.";
  const whatsappLink = `https://wa.me/5511958131645?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-white py-24 text-gray-600 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

          {/* Identidade e Promessa */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6">
              Camila <span className="italic">Conceição</span>
            </h3>
            <p className="font-light leading-relaxed max-w-sm">
              Estratégia corporativa e regulação emocional como pilares fundamentais para mentes de alto desempenho.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-gray-300"></div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-primary">
                Acesso Exclusivo
              </span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-8">Navegação</h4>
            <ul className="space-y-4">
              {['Home', 'Trajetória', 'Clínica', 'Mentoria', 'Corporate', 'FAQ'].map((item) => {
                const linkMap = {
                  'Home': 'home',
                  'Trajetória': 'about',
                  'Clínica': 'clinical',
                  'Mentoria': 'mentoria',
                  'Corporate': 'corporate',
                  'FAQ': 'faq'
                };
                return (
                  <li key={item}>
                    <a href={`#${linkMap[item]}`} className="font-light hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contato & Aplicação */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-8">Contato Diretivo</h4>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 border border-gray-200 hover:border-primary transition-colors mb-6"
            >
              <span className="text-sm font-light uppercase tracking-widest text-gray-900">Aplicar para Mentoria</span>
              <ArrowRight size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
            </a>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.instagram.com/camilaconceicaopsi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@camilaconceicaopsi.com.br"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright e Créditos minimalistas */}
        <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Camila Conceição. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Tecnologia & Design:</span>
            <a 
              href="https://senitte.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-400 transition-colors"
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