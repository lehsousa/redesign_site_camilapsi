import React from 'react';
import { ShieldCheck, BarChart3, Briefcase } from 'lucide-react';

const CorporateSection = () => {
  // Configuração para WhatsApp Corporativo
  const message = "Olá. Gostaríamos de solicitar uma Consultoria Estratégica focada em Saúde Mental Corporativa (NR-01) para a nossa empresa.";
  const phoneNumber = "5511958131645";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="corporate" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Lado Esquerdo: Conteúdo Estratégico */}
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">
              Corporate Advisory
            </h2>
            <h3 className="text-4xl font-serif leading-tight mb-8">
              Gestão de Risco <span className="italic text-gray-300">Psicossocial</span> e Saúde Mental Corporativa.
            </h3>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-10">
              Mais do que conformidade legal com a <span className="text-white font-medium font-sans italic">NR-01</span>, 
              oferecemos uma consultoria baseada na experiência real de quem liderou departamentos de RH, 
              focada em reduzir o turnover e aumentar a sustentabilidade emocional das equipes.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="mt-1"><ShieldCheck className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Implementação NR-01</h4>
                  <p className="text-sm text-gray-500 font-light">Mapeamento e gerenciamento técnico de riscos psicossociais com rigor clínico.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="mt-1"><BarChart3 className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Diagnóstico Organizacional</h4>
                  <p className="text-sm text-gray-500 font-light">Análise de dados de saúde mental para embasar decisões de gestão e cultura.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Card de Call to Action Corporativo */}
          <div className="bg-white p-10 lg:p-16 text-black rounded-sm shadow-2xl mt-8 lg:mt-0 relative overflow-hidden group">
            {/* Decoração interna subtil */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out -z-10"></div>
            
            <div className="relative z-10">
              <Briefcase className="w-8 h-8 mb-6 text-primary" />
              <h4 className="text-2xl font-serif mb-6 leading-tight">Solicite uma Consultoria Estratégica para sua Empresa</h4>
              <p className="text-gray-600 mb-10 font-light italic leading-relaxed">
                "A saúde emocional de uma corporação é o seu principal ativo primário de performance e retenção."
              </p>
              
              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-gray-900 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all text-center shadow-lg shadow-primary/20 hover:-translate-y-1"
                >
                  Agendar Reunião Estratégica
                </a>
                <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest mt-4">
                  Atendimento exclusivo a Lideranças e Diretoria de RH
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
