import React from 'react';

const MentoriaPremium = () => {
  // Configuração para "Aplicação Mentoria Premium"
  const messageMentoria = "Olá. Tenho interesse em aplicar para a Mentoria Premium High Performance.";
  const phoneNumber = "5511958131645";
  const wppMentoria = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageMentoria)}`;
  
  // Link para a Experiência Terapêutica
  const linkClarezaEquilibrio = "https://clarezaeequilibrio.camilaconceicaopsi.com.br/";

  return (
    <section id="mentoria" className="py-24 bg-gray-50/30 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* =========================================
            PRODUTO 1: MENTORIA PREMIUM
        ========================================= */}
        <div className="mb-24">
          <div className="inline-block px-4 py-1 border border-primary mb-8 bg-primary/5">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary">
              Acesso Exclusivo • Seleção Trimestral
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Mentoria Premium <span className="italic">High Performance</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Um acompanhamento individual de 90 dias desenhado para quem ocupa posições de liderança e busca 
            resolução de conflitos estratégicos através da inteligência emocional aplicada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100 mb-12 text-left md:text-center">
            <div className="p-8 hover:bg-gray-50 transition-colors duration-500">
              <span className="block text-2xl font-serif mb-2 text-gray-300">01.</span>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-2">Diagnóstico</p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Mapeamento de valores e identificação de travas de performance.</p>
            </div>
            <div className="p-8 bg-gray-50 hover:bg-white transition-colors duration-500">
              <span className="block text-2xl font-serif mb-2 text-gray-300">02.</span>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-2">Estratégia</p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Implementação de protocolos de regulação emocional e tomada de decisão.</p>
            </div>
            <div className="p-8 hover:bg-gray-50 transition-colors duration-500">
              <span className="block text-2xl font-serif mb-2 text-gray-300">03.</span>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-2">Sustentação</p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Consolidação de novos padrões comportamentais e liderança resiliente.</p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-16">
            <a 
              href={wppMentoria}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-gray-900 px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all rounded-sm shadow-xl shadow-primary/20 hover:-translate-y-1"
            >
              Aplicar para a Próxima Turma
            </a>
            <p className="mt-4 text-[10px] text-gray-400 italic">
              *Sujeito à análise de perfil e disponibilidade de agenda.
            </p>
          </div>
        </div>

        {/* Linha Divisória Elegante */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-24"></div>

        {/* =========================================
            PRODUTO 2: CLAREZA E EQUILÓBRIO
        ========================================= */}
        <div>
          <div className="inline-block px-4 py-1 border border-primary mb-8 bg-primary/5">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary">
              Abertura 1x ao ano • Extremamente Exclusivo
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Experiência Terapêutica <span className="italic">Clareza & Equilíbrio</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Uma imersão profunda, guiada e personalizada para revisitar a sua linha do tempo, 
            identificar padrões inconscientes, fechar ciclos e construir um planejamento emocional seguro.
          </p>

          {/* Estrutura do Método C.E.A */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100 mb-12 text-left md:text-center">
            <div className="p-8 hover:bg-gray-50 transition-colors duration-500">
              <span className="block text-2xl font-serif mb-2 text-gray-300">C.</span>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-2">Clareza</p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Entenda os padrões, emoções dominantes e resistências ocultas da sua estrutura base.</p>
            </div>
            <div className="p-8 bg-gray-50 hover:bg-white transition-colors duration-500">
              <span className="block text-2xl font-serif mb-2 text-gray-300">E.</span>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-2">Equilíbrio</p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Reorganize expectativas, frustrações, relações complexas e defina prioridades com foco.</p>
            </div>
            <div className="p-8 hover:bg-gray-50 transition-colors duration-500">
              <span className="block text-2xl font-serif mb-2 text-gray-300">A.</span>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-2">Ação</p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Estratégias para um plano sólido, ancorado no Dossiê Emocional como seu mapa futuro.</p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-16">
            <a 
              href={linkClarezaEquilibrio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-gray-900 px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all rounded-sm shadow-xl shadow-primary/20 hover:-translate-y-1"
            >
              Detalhes da Experiência
            </a>
            <p className="mt-4 text-[10px] text-gray-400 italic">
              *Atendimento severamente limitado para garantir a máxima profundidade da entrega.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MentoriaPremium;
