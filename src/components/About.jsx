import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import Section from './Section';

const About = () => {
  return (
    <Section id="about" className="bg-white py-16 md:py-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1 px-4 md:px-0"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img/img1.jpeg" 
                alt="Camila Conceição" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full -z-10 blur-3xl" />
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-accent/20 rounded-full -z-10 blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif italic text-primary drop-shadow-sm mb-6 relative inline-block">
              Sobre Mim
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full" />
            </h2>
            
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                Me chamo <span className="font-bold text-secondary">Camila Conceição Costa</span>, sou psicóloga e especialista em Saúde Mental, Psiquiatria, Stress e Dependência Química.
              </p>
              <p>
                Sou apaixonada por pessoas e suas singularidades. A psicologia me ajudou no processo de autoconhecimento e consequentemente tornou minha vida mais leve.
              </p>
              <p>
                O meu compromisso social na psicologia é promover uma escuta acolhedora, um espaço de liberdade, de compreensão, livre de julgamentos e com o objetivo de te ajudar a lidar melhor com as suas emoções, ansiedades e com o que lhe parecer desafiador.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic text-secondary font-medium my-8 text-left mx-4 md:mx-0">
                "Quem olha para fora sonha, quem olha para dentro desperta"
              </blockquote>
              
              <div className="pt-4 flex justify-center md:justify-start">
                <img src="/img/logo.jpeg" alt="Assinatura" className="h-16 opacity-80 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
