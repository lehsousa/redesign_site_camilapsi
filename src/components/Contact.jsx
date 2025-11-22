import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import Container from './Container';
import Section from './Section';
import Button from './Button';

const Contact = () => {
  return (
    <Section id="contact" className="bg-white py-16 md:py-32 overflow-hidden">
      <Container>
        <div className="bg-primary/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-serif italic text-primary drop-shadow-sm mb-6">
                Vamos conversar?
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Estou aqui para te ouvir e te ajudar nessa jornada. Entre em contato para agendar sua sessão ou tirar dúvidas.
                O primeiro passo para a mudança é o mais importante.
              </p>
              
              

              <div className="flex justify-center lg:justify-start">
                <Button variant="primary" className="w-full md:w-auto px-10 py-4 text-lg shadow-lg shadow-primary/25" onClick={() => window.open('https://forms.gle/q21UQB7dF5dYxUZv6', '_blank')}>
                  Agendar Agora
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block h-full min-h-[400px]">
              <div className="absolute inset-0 bg-white p-2 rounded-3xl shadow-xl rotate-2 transform hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/img/img2.jpeg" 
                  alt="Consultório" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
