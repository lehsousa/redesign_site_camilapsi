import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-gradient-to-br from-surface to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-accent/10 rounded-l-[100px] transform translate-x-1/4 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 tracking-wide">
            Psicologia Baseada em Evidências
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif italic text-primary drop-shadow-sm leading-[1.1] mb-6 tracking-tight">
            Tenha uma vida mais <span className="relative inline-block">
              equilibrada
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> e com saúde mental
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            A terapia vai te ajudar a se conectar com você mesmo, a se amar e viver com mais leveza. 
            Atendimento online especializado para o seu bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="primary" className="px-8 py-4 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto" onClick={() => window.open('https://forms.gle/q21UQB7dF5dYxUZv6', '_blank')}>
              Agendar Consulta
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg border-2 hover:bg-surface w-full sm:w-auto" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Saiba Mais
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                  {i}
                </div>
              ))}
            </div>
            <p>Junte-se a dezenas de pacientes satisfeitos</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] xl:h-[700px] flex items-center justify-center mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-primary rounded-[2rem] rotate-3 opacity-20 blur-sm transform scale-105" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] lg:aspect-auto lg:h-full w-full">
              <img 
                src="/img/camila.jpeg" 
                alt="Camila Conceição Psicóloga" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-[-1rem] lg:left-[-2rem] md:translate-x-0 bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 w-[90%] max-w-[280px] md:w-auto md:max-w-xs z-20"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wider">CRP 06/166430</p>
                <p className="font-bold text-secondary text-sm md:text-lg leading-tight">Camila Conceição</p>
                <p className="text-[10px] md:text-xs text-muted">Psicóloga Clínica</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
