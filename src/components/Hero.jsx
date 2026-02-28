import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

const Hero = () => {
  // Configuração para "Análise de Perfil"
  const message = "Olá. Desejo submeter meu perfil para análise e possível ingresso no ecossistema.";
  const phoneNumber = "5511958131645";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 md:py-32 bg-[#F9F9F9] overflow-hidden">
      <Container className="relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
        >
          <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-6">
            Clareza Mental & Estratégia Comportamental
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-gray-900 leading-[1.1] mb-8">
            Sua mente é a estrutura;<br className="hidden md:block" />
            <span className="italic text-primary">sua vida é o resultado.</span>
          </h1>
          
          <div className="space-y-6 text-base md:text-lg text-gray-600 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
            <p>
              A forma como você vive, decide, se relaciona e trabalha é <span className="font-bold">sustentada</span> pela forma como sua mente está organizada. Meu trabalho é promover saúde emocional e bem-estar de forma integral fortalecendo a base psicológica que <span className="font-bold">sustenta</span> sua vida pessoal.
            </p>
            <p>
              Através de uma abordagem baseada em evidências, atuo na reorganização dos padrões emocionais que geram ansiedade, sobrecarga, autossabotagem e sensação de desalinhamento interno.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-gray-900 text-xs tracking-[0.2em] font-bold uppercase hover:bg-accent hover:-translate-y-1 transition-all w-full sm:w-auto shadow-lg shadow-primary/20"
            >
              Análise de Perfil
            </a>

            <button
              onClick={() => document.getElementById('clinical').scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <div className="w-8 h-[1px] bg-gray-400 group-hover:bg-primary transition-colors"></div>
              Ver Ecossistema
            </button>
          </div>
          
        </motion.div>

        {/* Lado Direito: Imagem Grayscale com Hover */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-6 relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-full aspect-[3/4] lg:aspect-[4/5]">
            {/* Decoração sutil de fundo */}
            <div className="absolute top-12 -right-12 w-full h-full border border-gray-200 -z-10 hidden md:block"></div>

            <div className="w-full h-full overflow-hidden rounded-sm bg-gray-200">
              <img 
                src="/img/camila.jpeg" 
                alt="Camila Conceição - Especialista em Regulação Emocional e Estratégia"
                className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100 origin-center"
              />
            </div>
            
            {/* Minimal Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-sm border border-gray-100 hidden md:block">
              <p className="text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1">Credencial</p>
              <p className="font-serif text-gray-900 text-lg">CRP 06/166430</p>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default Hero;