import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Container from './Container';

const Contact = () => {
  const message = "Olá. Gostaria de submeter o meu perfil à análise para integrar o Ecossistema de Mentoria e Acompanhamento.";
  const phoneNumber = "5511958131645";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="bg-[#F9F9F9] py-32 overflow-hidden border-t border-gray-100">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
          
          {/* Lado Escuro: Promessa e Autoridade */}
          <div className="w-full md:w-5/12 bg-gray-900 text-white p-12 md:p-16 flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-4 block">
                Filtro de Acesso
              </span>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-8">
                Posicionamento <br className="hidden md:block" /><span className="italic text-primary">Exclusivo.</span>
              </h2>
            </div>

            <p className="text-sm font-light text-gray-400 leading-relaxed">
              O ecossistema é voltado para quem trata o autodesenvolvimento como pilar inegociável da alta performance.
              Não possuímos ampla disponibilidade de agenda.
            </p>
          </div>

          {/* Lado Claro: Aplicação */}
          <div className="w-full md:w-7/12 p-12 md:p-16 flex flex-col justify-center">

            <h3 className="text-2xl font-serif text-gray-900 mb-4">Candidatura Estratégica</h3>
            <p className="text-gray-500 font-light mb-12">
              Inicie o processo submetendo o seu cenário profissional atual. Nossa equipe entrará em contato para curadoria.
            </p>

            <div className="space-y-6">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="group w-full flex items-center justify-between p-6 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Contato Direto</p>
                  <p className="text-sm text-gray-900 font-medium">Aplicação via WhatsApp</p>
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
              </a>

              <a
                href="mailto:contato@camilaconceicaopsi.com.br" 
                className="group w-full flex items-center justify-between p-6 border border-transparent hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Assessoria & B2B</p>
                  <p className="text-sm text-gray-600 font-medium">contato@camilaconceicaopsi.com.br</p>
                </div>
                <Mail size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
              </a>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
