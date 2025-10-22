"use client"
import React, { useState } from 'react';
import { Syringe, User, Calendar, MapPin, Phone, Mail, FileText, ChevronDown, ChevronUp, CheckCircle, AlertCircle, Clock } from 'lucide-react';

function Header() {
  return (
    <header style={{
      background: 'var(--gradient-primary)',
      padding: '1rem 0',
      boxShadow: 'var(--shadow-md)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Syringe color="white" size={32} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0 }}>Vacina+</h1>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Início</a>
          <a href="/calendario" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Calendário</a>
          <a href="#schedule" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Agendar</a>
        </nav>
      </div>
    </header>
  );
}

export default function VaccinationSchedule() {
  const [formData, setFormData] = useState({
    name: '', cpf: '', birthDate: '', phone: '', email: '',
    vaccine: '', location: '', date: '', time: '', observations: ''
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const vaccines = ['COVID-19', 'Influenza (Gripe)', 'Tríplice Viral', 'HPV', 'Hepatite B', 'Febre Amarela'];
  const locations = ['UBS Centro', 'UBS Jardim Paraíso', 'UBS Vila Nova', 'UBS Bela Vista'];
  const times = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  const faqs = [
    { question: 'Preciso levar algum documento para me vacinar?', answer: 'Sim, é necessário apresentar documento com foto (RG, CNH ou passaporte), cartão do SUS ou CPF e, se possível, a carteira de vacinação para registro das doses.' },
    { question: 'Quanto tempo antes devo chegar no local?', answer: 'Recomendamos chegar com 10 a 15 minutos de antecedência para realizar o cadastro e evitar atrasos no atendimento.' },
    { question: 'Posso tomar mais de uma vacina no mesmo dia?', answer: 'Depende do tipo de vacina. Algumas podem ser aplicadas simultaneamente, mas outras requerem intervalo. Consulte o profissional de saúde no momento do agendamento.' },
    { question: 'O que fazer se eu perder meu horário agendado?', answer: 'Entre em contato com a unidade de saúde o mais rápido possível para reagendar. Também é possível comparecer no mesmo dia e tentar ser atendido, sujeito à disponibilidade.' },
    { question: 'Posso vacinar se estiver com sintomas de gripe?', answer: 'Não é recomendado. Aguarde a recuperação completa e consulte um profissional de saúde antes de se vacinar.' },
    { question: 'Como faço para cancelar meu agendamento?', answer: 'Entre em contato com a unidade de saúde por telefone ou compareça pessoalmente. Cancelamentos com antecedência ajudam outras pessoas a serem atendidas.' },
    { question: 'Menores de idade podem se vacinar sozinhos?', answer: 'Não. Menores de 18 anos devem estar acompanhados de um responsável legal que apresentará documento de identificação.' },
    { question: 'As vacinas são gratuitas?', answer: 'Sim! Todas as vacinas oferecidas pelo SUS são 100% gratuitas para toda a população.' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', cpf: '', birthDate: '', phone: '', email: '', vaccine: '', location: '', date: '', time: '', observations: '' });
    }, 3000);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius-md)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  return (
    <div style={{ fontFamily: 'var(--font-family)', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      <Header />

      <section style={{ background: 'linear-gradient(180deg, rgba(0, 102, 204, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', padding: '3rem 0 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Calendar size={48} style={{ margin: '0 auto 1rem', color: 'var(--primary-blue)' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem' }}>Agende sua Vacinação</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Preencha o formulário abaixo e garanta sua proteção
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={28} color="var(--primary-blue)" />
              Dados para Agendamento
            </h3>

            <div onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  <User size={16} /> Nome Completo *
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Digite seu nome completo" style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>CPF *</label>
                  <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} placeholder="000.000.000-00" style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Data de Nascimento *</label>
                  <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    <Phone size={16} /> Telefone *
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(00) 00000-0000" style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'} />
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    <Mail size={16} /> Email
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'} />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  <Syringe size={16} /> Vacina *
                </label>
                <select name="vaccine" value={formData.vaccine} onChange={handleInputChange} style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'}>
                  <option value="">Selecione a vacina</option>
                  {vaccines.map((v, i) => <option key={i} value={v}>{v}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  <MapPin size={16} /> Unidade de Saúde *
                </label>
                <select name="location" value={formData.location} onChange={handleInputChange} style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'}>
                  <option value="">Selecione o local</option>
                  {locations.map((l, i) => <option key={i} value={l}>{l}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    <Calendar size={16} /> Data *
                  </label>
                  <input type="date" name="date" value={formData.date} onChange={handleInputChange} style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'} />
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    <Clock size={16} /> Horário *
                  </label>
                  <select name="time" value={formData.time} onChange={handleInputChange} style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'}>
                    <option value="">Selecione</option>
                    {times.map((t, i) => <option key={i} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Observações</label>
                <textarea name="observations" value={formData.observations} onChange={handleInputChange} placeholder="Alguma informação adicional? (opcional)" rows={4}
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--gray-200)'} />
              </div>

              <button onClick={handleSubmit} style={{ width: '100%', padding: '1rem', background: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: 'var(--radius-lg)', fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s', boxShadow: 'var(--shadow-md)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-blue-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--primary-blue)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}>
                Confirmar Agendamento
              </button>
            </div>

            {showSuccess && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--success-light)', border: '2px solid var(--success)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle size={24} color="var(--success)" />
                <div>
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--success)' }}>Agendamento realizado com sucesso!</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Você receberá uma confirmação por email.</p>
                </div>
              </div>
            )}
          </div>

          <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-lg)', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={28} color="var(--primary-blue)" />
              Perguntas Frequentes
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ border: '2px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    style={{ width: '100%', padding: '1rem', background: expandedFaq === idx ? 'var(--bg-secondary)' : 'white', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', fontWeight: '600', fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    <span>{faq.question}</span>
                    {expandedFaq === idx ? <ChevronUp size={20} color="var(--primary-blue)" style={{ flexShrink: 0, marginLeft: '0.5rem' }} /> : <ChevronDown size={20} color="var(--text-secondary)" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />}
                  </button>
                  {expandedFaq === idx && (
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--gray-200)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 168, 107, 0.1) 100%)', borderRadius: 'var(--radius-lg)', border: '2px solid var(--primary-blue)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--primary-blue)' }}>💡 Dica Importante</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                Lembre-se de levar seu documento com foto, cartão do SUS e carteira de vacinação no dia do agendamento.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}