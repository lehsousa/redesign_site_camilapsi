import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ClinicalServices from './components/ClinicalServices';
import MentoriaPremium from './components/MentoriaPremium';
import CorporateSection from './components/CorporateSection';
import Services from './components/Services';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import SocialProofItem from './components/SocialProofItem';

function App() {
  return (
    <div className="min-h-screen bg-background text-secondary font-sans selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <About />
        <ClinicalServices />
        <section className="bg-slate-50 pb-24 pt-8">
          <div className="max-w-4xl mx-auto px-6">
            <SocialProofItem
              quote="O processo não é sobre tentar eliminar a ansiedade de forma utópica, mas adquirir a governança comportamental necessária para decidir com clareza e firmeza nos momentos de maior pressão."
              author="A. N."
              role="Partner Director"
            />
          </div>
        </section>

        <MentoriaPremium />
        <section className="bg-gray-50 pb-24 pt-8">
          <div className="max-w-4xl mx-auto px-6">
            <SocialProofItem
              quote="A mentoria elevou minha visão executiva. O método não me ensinou a trabalhar mais, mas a aplicar protocolos de resiliência e blindar minha tomada de decisão na Diretoria."
              author="L. V."
              role="Diretor Executivo"
            />
          </div>
        </section>

        <CorporateSection />
        <section className="bg-slate-50 py-12 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <SocialProofItem
              quote="A consultoria provou ser nosso maior ativo de performance sistêmica. Antecipamos riscos psicossociais, reduzimos o turnover de talentos e sustentamos uma cultura real de inteligência adaptativa em todas as unidades."
              author="C. F."
              role="Head de Recursos Humanos"
            />
          </div>
        </section>

        <FAQ />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
