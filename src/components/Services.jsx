import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Activity, Users, Shield, Smile } from 'lucide-react';
import Container from './Container';
import Section from './Section';

const specialties = [
  { icon: Brain, title: 'Saúde Mental', description: 'Cuidado integral com o bem-estar psicológico.' },
  { icon: Activity, title: 'Stress e Ansiedade', description: 'Estratégias para lidar com a pressão do dia a dia.' },
  { icon: Heart, title: 'Inteligência Emocional', description: 'Desenvolvimento da capacidade de lidar com emoções.' },
  { icon: Users, title: 'Psicologia Clínica', description: 'Atendimento focado nas suas necessidades individuais.' },
  { icon: Shield, title: 'Prevenção ao Suicídio', description: 'Acolhimento e suporte em momentos de crise.' },
  { icon: Smile, title: 'Autoconhecimento', description: 'Jornada para descobrir sua melhor versão.' },
];

const Services = () => {
  return (
    <Section id="services" className="bg-surface py-16 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Como posso te ajudar
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif italic text-primary drop-shadow-sm mb-6"
          >
            Áreas de Atuação
          </motion.h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ofereço um espaço seguro e acolhedor para trabalharmos juntos em suas questões, 
            sempre com embasamento científico e foco no seu bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
