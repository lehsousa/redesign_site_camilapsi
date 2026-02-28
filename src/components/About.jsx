import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Lado Esquerdo: Imagem com moldura minimalista */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-700">
              <img 
                src="/img/img1.jpeg" 
                alt="Camila Conceição - Estrategista em Comportamento"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Elemento de design Luana Carolina: Detalhe sutil */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white -z-10 shadow-sm hidden lg:block"></div>
          </div>

          {/* Lado Direito: Copy de Autoridade (Clara do Vale) */}
          <div className="lg:col-span-7">
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-4">
              Trajetória & Estratégia
            </h2>

            
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg font-light">
              <p>
                Minha trajetória é <span className="font-bold text-gray-900">sustentada</span> pela prática clínica e pelo compromisso em compreender, com profundidade, os processos que organizam a experiência emocional e o comportamento humano. Ao longo dos anos, acompanho pessoas no desenvolvimento de maior clareza emocional e flexibilidade psicológica, que é o foco principal da abordagem que norteia o meu trabalho; a <span className="font-bold text-gray-900">ACT (Terapia de Aceitação e Compromisso)</span>.
              </p>

              <p>
                Ao aliar essa bagagem clínica à gestão de pessoas, construí um repertório corporativo voltado para a alta liderança. Atuo na intersecção entre resultados estratégicos e mitigação de impactos emocionais, implementando programas de saúde mental e gestão de riscos psicossociais <span className="font-bold text-gray-900">(NR-01)</span>.
              </p>

              <p>
                Essa integração entre clínica e universo corporativo permite um trabalho profundo e aplicável, voltado à construção de uma base emocional sólida, para que você possa viver, decidir e se posicionar com mais segurança, equilíbrio e consistência em todas as áreas da sua vida.
              </p>

              <p className="pt-6 pb-2 text-xl font-serif italic text-gray-800 border-l-2 border-primary pl-6 mt-8">
                "Saúde emocional é o que <span className="font-bold">sustenta</span> clareza, direção e uma vida com sentido."
              </p>
            </div>

            {/* Assinatura / Call to Action sutil */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <span className="block text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold text-gray-400">
                Pelo desenvolvimento de mentes de alto valor
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;