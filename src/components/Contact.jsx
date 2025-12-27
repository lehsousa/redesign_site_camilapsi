import React from 'react';
import { Mail, Instagram, MessageCircle, Globe } from 'lucide-react';
import Container from './Container';
import Section from './Section';

const Contact = () => {
  const message = "Olá, Camila! Gostaria de agendar uma sessão de terapia.";
  const phoneNumber = "5511958131645";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Section id="contact" className="bg-white py-16 md:py-32 overflow-hidden">
      <Container>
        {/* Ajuste de padding: p-6 no mobile para ganhar espaço */}
        <div className="bg-primary/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 relative overflow-hidden">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-center lg:text-left">
              <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
                Atendimento Online
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif italic text-primary drop-shadow-sm mb-6">
                Vamos conversar?
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                O primeiro passo para a mudança é o mais importante. Estou aqui para oferecer um espaço seguro e acolhedor, onde você pode ser você mesmo.
              </p>
              
              {/* Lista de Canais de Contato */}
              <div className="flex flex-col gap-4 mb-8 max-w-sm mx-auto lg:mx-0">
                
                {/* CARD WHATSAPP */}
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  // AQUI O PULO DO GATO: justify-center no mobile, justify-start no desktop
                  className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl bg-white hover:bg-white/80 transition-colors shadow-sm border border-transparent hover:border-primary/20 group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted font-medium uppercase">WhatsApp</p>
                    <p className="text-secondary font-semibold text-sm md:text-base">(11) 95813-1645</p>
                  </div>
                </a>

                {/* CARD EMAIL */}
                <a 
                  href="mailto:contato@camilaconceicaopsi.com.br" 
                  // AQUI TAMBÉM: justify-center
                  className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl bg-white hover:bg-white/80 transition-colors shadow-sm border border-transparent hover:border-primary/20 group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted font-medium uppercase">E-mail</p>
                    <p className="text-secondary font-semibold text-sm md:text-base break-all">contato@camilaconceicaopsi.com.br</p>
                  </div>
                </a>
              </div>

              {/* Botão Principal */}
              <div className="flex justify-center lg:justify-start">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 text-lg font-medium text-white bg-primary rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-1 transition-all duration-300"
                >
                  Agendar Sessão Agora
                </a>
              </div>
            </div>

            {/* Imagem Lateral (Escondida no Mobile) */}
            <div className="relative hidden lg:block h-full min-h-[400px]">
              <div className="absolute inset-0 bg-white p-2 rounded-3xl shadow-xl rotate-2 transform hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/img/img2.jpeg" 
                  alt="Espaço de acolhimento terapêutico online Camila Conceição" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Badge Flutuante */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <Globe className="text-primary w-4 h-4" />
                  <span className="text-xs font-bold text-secondary">Atendimento Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;