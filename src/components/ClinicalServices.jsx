import React from 'react';
import { Brain, Compass, Layers } from 'lucide-react';
import Container from './Container';

const ClinicalServices = () => {
  const phoneNumber = "5511958131645";
  const messageJornada = "Olá. Desejo aplicar para a Jornada Arquitetura da Identidade.";
  const messagePsicoterapia = "Olá. Gostaria de submeter meu perfil para análise referente à Psicoterapia Clínica.";
  const messageAcompanhamento = "Olá. Tenho interesse em aplicar para o Programa de Acompanhamento Emocional.";
  
  const wppJornada = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageJornada)}`;
  const wppPsi = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messagePsicoterapia)}`;
  const wppAcomp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageAcompanhamento)}`;

  return (
    <section id="clinical" className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-4">
            A Base do Ecossistema
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
            Núcleo <span className="italic text-primary">Clínico.</span>
          </h3>
          <p className="text-gray-500 font-light leading-relaxed">
            Estruturas de acompanhamento desenhadas para quem reconhece que o centro de gravidade
            de qualquer resultado externo é a regulação emocional interna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Serviço 1: Jornada Arquitetura da Identidade */}
          <div className="group bg-[#F9F9F9] p-8 md:p-10 border border-transparent hover:border-primary/20 transition-all duration-500 flex flex-col justify-between">
            <div>
              <Layers className="w-8 h-8 text-primary mb-8" />
              <h4 className="text-2xl font-serif text-gray-900 mb-4 pr-4">Jornada Arquitetura da Identidade</h4>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-8 border-b border-gray-200 pb-4">A Base</p>
              
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-sm">
                Uma experiência clínica estruturada que conduz o cliente por uma releitura organizada da sua linha do tempo emocional. Através de uma metodologia autoral, abordamos:
              </p>

              <ul className="space-y-3 mb-10 text-sm font-light text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div> 
                  <span>Mapear marcos formadores da identidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div> 
                  <span>Identificar padrões comportamentais recorrentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div> 
                  <span>Compreender experiências que moldaram escolhas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div> 
                  <span>Reprocessar narrativas que influenciam decisões</span>
                </li>
              </ul>
              

            </div>

            <a 
              href={wppJornada}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-5 bg-white border border-gray-200 text-gray-900 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all shadow-sm group-hover:shadow-md text-center"
            >
              Aplicar para a Jornada
            </a>
          </div>

          {/* Serviço 2: Psicoterapia Clínica */}
          <div className="group bg-[#F9F9F9] p-8 md:p-10 border border-transparent hover:border-primary/20 transition-all duration-500 flex flex-col justify-between">
            <div>
              <Brain className="w-8 h-8 text-primary mb-8" />
              <h4 className="text-2xl font-serif text-gray-900 mb-4">Psicoterapia Clínica</h4>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-8 border-b border-gray-200 pb-4">O Intermediário</p>
              
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-sm">
                Direcionada a jovens e adultos com desregulação emocional, ansiedade, impulsividade e dificuldade de clareza nas decisões.
              </p>
              
              <div className="p-6 bg-white border-l-2 border-primary mb-10 shadow-sm">
                <p className="text-sm italic text-gray-800 font-medium leading-relaxed">
                  "O foco não é eliminar a ansiedade. É ampliar o repertório emocional para viver bem apesar dela."
                </p>
              </div>
            </div>

            <a 
              href={wppPsi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-5 bg-white border border-gray-200 text-gray-900 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all shadow-sm group-hover:shadow-md text-center"
            >
              Candidatar para Psicoterapia
            </a>
          </div>

          {/* Serviço 3: Programa de Acompanhamento */}
          <div className="group bg-[#F9F9F9] p-8 md:p-10 border border-transparent hover:border-primary/20 transition-all duration-500 flex flex-col justify-between">
            <div>
              <Compass className="w-8 h-8 text-primary mb-8" />
              <h4 className="text-2xl font-serif text-gray-900 mb-4">Programa de Acompanhamento</h4>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-8 border-b border-gray-200 pb-4">A Manutenção</p>
              
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-sm">
                Não é psicoterapia, é um espaço estruturado de revisão mensal. Ideal para quem já possui consciência e busca constância, mas não necessita de processo clínico profundo.
              </p>

              <ul className="space-y-3 mb-10 text-sm font-light text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div> 
                  <span>Organização emocional e clareza de decisões</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div> 
                  <span>Avaliação de avanços e entraves</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div> 
                  <span>Direcionamento estratégico da vida</span>
                </li>
              </ul>
              

            </div>

            <a 
              href={wppAcomp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-5 bg-white border border-gray-200 text-gray-900 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all shadow-sm group-hover:shadow-md text-center"
            >
              Aplicar para Acompanhamento
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ClinicalServices;
