import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const faqs = [
  {
    question: "Como funciona a seleção para a Mentoria Premium?",
    answer: "Trata-se de um processo focado em garantir o alinhamento de perfil. Após a sua aplicação inicial via WhatsApp, realizamos um breve diagnóstico para entender seu momento como liderança. Se houver adequação, desenhamos juntos os próximos passos do seu desenvolvimento estratégico."
  },
  {
    question: "O Ecossistema atende diretamente Lideranças e Diretorias?",
    answer: "Sim. Nossas soluções de Psicoterapia, Mentoria e Corporate (NR-01) são inteiramente orientadas para profissionais e empresas que buscam alta performance atrelada à sustentabilidade emocional, sob uma perspectiva rigorosa e técnica."
  },
  {
    question: "Como a abordagem ACT se aplica à performance corporativa?",
    answer: "A Terapia de Aceitação e Compromisso (ACT) não apenas regula as emoções de forma eficiente, como treina a flexibilidade psicológica. Isso permite que uma liderança consiga operar sob pressão complexa sem comprometer a tomada de decisão."
  },
  {
    question: "A consultoria Corporate atende empresas fora de São Paulo?",
    answer: "Sim. A metodologia de gestão de riscos psicossociais e implantação da NR-01 funciona de forma totalmente remota e global, permitindo a análise de dados organizacionais e criação de estratégias B2B independentemente de fronteiras geográficas."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-white py-32 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Título Elegante */}
          <div className="lg:col-span-5 relative">
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold mb-4">
              Esclarecimentos Iniciais
            </h2>
            <h3 className="text-3xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8">
              A clareza que precede a <span className="italic text-primary">Decisão.</span>
            </h3>
            <p className="font-light text-gray-500 max-w-sm">
              Compreenda as diretrizes operacionais do nosso ecossistema e descubra como a inteligência emocional aplicada se traduz em resultados reais.
            </p>
          </div>

          {/* Acordeão Minimalista */}
          <div className="lg:col-span-7">
            <div className="border-t border-gray-200">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-8 text-left flex items-center justify-between gap-8 group"
                  >
                    <span className="font-serif text-xl lg:text-2xl text-gray-900 group-hover:text-gray-500 transition-colors">
                      {faq.question}
                    </span>
                    <span className={`transform transition-transform duration-500 text-primary ${openIndex === i ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 font-light text-gray-600 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FAQ;