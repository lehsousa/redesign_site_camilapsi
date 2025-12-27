import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import Section from './Section';

const faqs = [
  {
    question: "Como funciona o atendimento online?",
    answer: "O atendimento acontece por videochamada (Google Meet ou WhatsApp), com a mesma ética, sigilo e eficácia do presencial. Você só precisa de um local reservado e boa conexão com internet."
  },
  {
    question: "Você aceita convênio médico?",
    answer: "Os atendimentos são particulares. Porém, ofereço toda a documentação necessária para que você solicite o reembolso junto ao seu plano de saúde, caso ele ofereça essa modalidade."
  },
  {
    question: "O que é a Terapia ACT?",
    answer: "A Terapia de Aceitação e Compromisso (ACT) é uma abordagem moderna que foca em ajudar você a lidar com emoções difíceis sem lutar contra elas, permitindo que você tome atitudes baseadas no que é realmente importante na sua vida."
  },
  {
    question: "Qual a duração das sessões?",
    answer: "As sessões têm duração média de 50 minutos e ocorrem geralmente uma vez por semana, mas a frequência pode ser ajustada conforme a sua necessidade."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-surface py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif italic text-primary mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted">
            Entenda melhor como posso te ajudar nessa jornada.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-primary/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-medium text-secondary text-lg">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-primary ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;