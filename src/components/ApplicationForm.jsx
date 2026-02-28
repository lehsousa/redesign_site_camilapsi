import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// FORMSPREE_ID: substitua pelo seu endpoint após criar a conta em formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeeldwgz';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    interesse: '',
    desafio: '',
    contatoPreferencia: '', // 'email' | 'whatsapp'
    contatoValor: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dropdownRef = useRef(null);

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectInteresse = (valor) => {
    setFormData({ ...formData, interesse: valor });
    setIsDropdownOpen(false);
  };

  const getInteresseLabel = (val) => {
    if (val === 'mentoria') return 'Mentoria Premium (3 meses)';
    if (val === 'clinica') return 'Psicoterapia Clínica (Regulação Emocional)';
    if (val === 'corporativo') return 'Corporate Advisory / NR-01';
    if (val === 'jornada') return 'Jornada Arquitetura da Identidade';
    return 'Selecione o serviço desejado';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contatoLabel = formData.contatoPreferencia === 'email' ? 'E-mail' : 'WhatsApp';
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          interesse: getInteresseLabel(formData.interesse),
          desafio: formData.desafio,
          retorno_preferido: contatoLabel,
          retorno_contato: formData.contatoValor,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // Fallback: abre WhatsApp se Formspree falhar
        const contatoLabel = formData.contatoPreferencia === 'email' ? 'E-mail' : 'WhatsApp';
        const message = `*Aplicação - Ecossistema Camila Conceição*\n\n*Nome:* ${formData.nome}\n*Interesse:* ${getInteresseLabel(formData.interesse)}\n*Desafio Atual:* ${formData.desafio}\n*Retorno Preferido:* ${contatoLabel}\n*Contato:* ${formData.contatoValor}`;
        window.open(`https://api.whatsapp.com/send?phone=5511958131645&text=${encodeURIComponent(message)}`, '_blank');
      }
    } catch {
      // Fallback: abre WhatsApp em caso de erro de rede
      const contatoLabel = formData.contatoPreferencia === 'email' ? 'E-mail' : 'WhatsApp';
      const message = `*Aplicação - Ecossistema Camila Conceição*\n\n*Nome:* ${formData.nome}\n*Interesse:* ${getInteresseLabel(formData.interesse)}\n*Desafio Atual:* ${formData.desafio}\n*Retorno Preferido:* ${contatoLabel}\n*Contato:* ${formData.contatoValor}`;
      window.open(`https://api.whatsapp.com/send?phone=5511958131645&text=${encodeURIComponent(message)}`, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="application">
      <div className="max-w-3xl mx-auto px-6">

        {/* ── ESTADO DE CONFIRMAÇÃO ── */}
        {isSuccess ? (
          <div
            className="flex flex-col items-center text-center py-16 animate-fadeIn"
            style={{ animation: 'fadeIn 0.8s ease forwards' }}
          >
            {/* Ornamento */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-gray-200" />
              <span className="text-primary text-lg tracking-[0.5em]">✦</span>
              <div className="h-px w-12 bg-gray-200" />
            </div>

            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold mb-6">
              Aplicação Recebida
            </p>

            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
              Sua candidatura está<br />
              <span className="italic">sob análise.</span>
            </h3>

            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-md mb-10">
              Avaliamos cada perfil com atenção individual. Caso haja alinhamento 
              de propósito, você receberá um contato personalizado em até 72 horas.
            </p>

            {/* Assinatura */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gray-300" />
              <span className="font-serif italic text-primary text-lg">Camila Conceição</span>
            </div>

            {/* Rodapé discreto */}
            <p className="mt-16 text-[9px] text-gray-300 tracking-[0.3em] uppercase">
              Privacidade e sigilo absoluto garantidos.
            </p>

            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(16px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>

        ) : (
          /* ── ESTADO DO FORMULÁRIO ── */
          <>
            {/* Header do Formulário */}
            <div className="text-center mb-16">
              <h2 className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold mb-4">
                Processo de Admissão
              </h2>
              <h3 className="text-3xl font-serif text-gray-900 mb-6">
                Aplicação para o <span className="italic text-primary">Ecossistema Camila Conceição</span>
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Para garantir a excelência e exclusividade do acompanhamento,
                selecionamos nossos clientes com base no alinhamento de valores e objetivos.
              </p>
            </div>

            {/* Formulário Minimalista */}
            <form className="space-y-12" onSubmit={handleSubmit}>

              <div className="space-y-8">
                {/* Nome */}
                <div className="group border-b border-gray-200 focus-within:border-gray-900 transition-colors py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Como gostaria de ser chamado(a)?"
                    className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-300 py-2 font-light"
                  />
                </div>

                {/* Interesse (dropdown customizado) */}
                <div className="group border-b border-gray-200 focus-within:border-gray-900 transition-colors py-2 relative" ref={dropdownRef}>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Interesse Principal</label>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full flex justify-between items-center text-left bg-transparent border-none outline-none py-2 font-light transition-colors ${!formData.interesse ? 'text-gray-300' : 'text-gray-900'}`}
                  >
                    <span>{getInteresseLabel(formData.interesse)}</span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`absolute left-0 top-full mt-1 w-full bg-white border border-gray-100 shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                    <ul className="py-2 text-sm font-light text-gray-600">
                      {[
                        { val: 'mentoria',    label: 'Mentoria Premium (3 meses)' },
                        { val: 'clinica',     label: 'Psicoterapia Clínica (Regulação Emocional)' },
                        { val: 'corporativo', label: 'Corporate Advisory / NR-01' },
                        { val: 'jornada',     label: 'Jornada Arquitetura da Identidade' },
                      ].map(({ val, label }) => (
                        <li key={val}>
                          <button type="button" onClick={() => handleSelectInteresse(val)} className="w-full text-left px-6 py-3 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desafio */}
                <div className="group border-b border-gray-200 focus-within:border-gray-900 transition-colors py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Qual seu maior desafio atual?</label>
                  <textarea
                    rows="3"
                    name="desafio"
                    required
                    value={formData.desafio}
                    onChange={handleChange}
                    placeholder="Descreva brevemente sua busca ou a necessidade da sua empresa..."
                    className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-300 py-2 font-light resize-none"
                  />
                </div>

                {/* Preferência de retorno */}
                <div className="py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">
                    Como prefere receber nosso retorno?
                  </label>
                  <div className="flex gap-4">
                    {[
                      { val: 'email',    label: 'E-mail' },
                      { val: 'whatsapp', label: 'WhatsApp' },
                    ].map(({ val, label }) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setFormData({ ...formData, contatoPreferencia: val, contatoValor: '' })}
                        className={`px-6 py-2 text-xs font-bold tracking-widest uppercase border transition-all duration-200 ${
                          formData.contatoPreferencia === val
                            ? 'bg-primary border-primary text-gray-900'
                            : 'bg-transparent border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Campo condicional — e-mail */}
                {formData.contatoPreferencia === 'email' && (
                  <div className="group border-b border-gray-200 focus-within:border-gray-900 transition-colors py-2" style={{ animation: 'fadeIn 0.4s ease forwards' }}>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Seu melhor e-mail</label>
                    <input
                      type="email"
                      name="contatoValor"
                      required
                      value={formData.contatoValor}
                      onChange={handleChange}
                      placeholder="nome@email.com"
                      className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-300 py-2 font-light"
                    />
                  </div>
                )}

                {/* Campo condicional — whatsapp */}
                {formData.contatoPreferencia === 'whatsapp' && (
                  <div className="group border-b border-gray-200 focus-within:border-gray-900 transition-colors py-2" style={{ animation: 'fadeIn 0.4s ease forwards' }}>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Seu WhatsApp (com DDD)</label>
                    <input
                      type="tel"
                      name="contatoValor"
                      required
                      value={formData.contatoValor}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-300 py-2 font-light"
                    />
                  </div>
                )}
              </div>

              {/* Botão de Envio */}
              <div className="flex flex-col items-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary text-gray-900 px-20 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all rounded-sm shadow-xl shadow-primary/20 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar para Análise'}
                </button>
                <span className="mt-6 text-[9px] text-gray-400 tracking-widest uppercase">
                  Privacidade e sigilo absoluto garantidos.
                </span>
              </div>

            </form>
          </>
        )}

      </div>
    </section>
  );
};

export default ApplicationForm;
