"use client";

import React, { useState } from 'react';
import { Calendar, MapPin, Syringe, Shield, Clock, Users, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import Header from './Components/Header/Header';

// Header Component

export default function VaccinationHome() {
  const [selectedVaccine, setSelectedVaccine] = useState<number | null>(null);

  const vaccines = [
    {
      id: 1,
      name: 'COVID-19',
      description: 'Proteção contra o coronavírus e suas variantes',
      ageGroup: 'A partir de 6 meses',
      doses: '2 doses + reforços',
      icon: '💉',
      color: '#0066CC'
    },
    {
      id: 2,
      name: 'Influenza (Gripe)',
      description: 'Imunização contra o vírus da gripe sazonal',
      ageGroup: 'Todas as idades',
      doses: 'Anual',
      icon: '🦠',
      color: '#00A86B'
    },
    {
      id: 3,
      name: 'Tríplice Viral',
      description: 'Proteção contra sarampo, caxumba e rubéola',
      ageGroup: '12 meses a 29 anos',
      doses: '2 doses',
      icon: '🛡️',
      color: '#7C3AED'
    },
    {
      id: 4,
      name: 'HPV',
      description: 'Prevenção do papilomavírus humano',
      ageGroup: '9 a 14 anos',
      doses: '2 doses',
      icon: '💪',
      color: '#F97316'
    }
  ];

  const locations = [
    {
      name: 'UBS Centro',
      address: 'Rua Principal, 123 - Centro',
      hours: 'Seg-Sex: 8h às 17h',
      phone: '(14) 3811-1234'
    },
    {
      name: 'UBS Jardim Paraíso',
      address: 'Av. das Flores, 456 - Jardim Paraíso',
      hours: 'Seg-Sex: 8h às 17h',
      phone: '(14) 3811-5678'
    },
    {
      name: 'UBS Vila Nova',
      address: 'Rua dos Trabalhadores, 789 - Vila Nova',
      hours: 'Seg-Sex: 8h às 17h',
      phone: '(14) 3811-9012'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Proteção Eficaz',
      description: 'Imunização comprovada cientificamente contra doenças graves'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Proteção Coletiva',
      description: 'Contribua para a imunidade de rebanho e proteja quem mais precisa'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Gratuito e Seguro',
      description: 'Vacinas aprovadas pela ANVISA, 100% gratuitas pelo SUS'
    }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-family)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(0, 102, 204, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Proteja-se. Proteja quem você ama.
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.75'
          }}>
            A vacinação é o meio mais seguro e eficaz de prevenir doenças. Mantenha sua carteira de vacinação em dia e cuide da sua saúde.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#vaccines" style={{
              background: 'var(--primary-blue)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: 'var(--radius-lg)',
              fontWeight: '600',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-lg)',
              transition: 'all var(--transition-base)',
              display: 'inline-block'
            }}>
              Ver Vacinas Disponíveis
            </a>
            <a href="#locations" style={{
              background: 'white',
              color: 'var(--primary-blue)',
              padding: '1rem 2rem',
              borderRadius: 'var(--radius-lg)',
              fontWeight: '600',
              fontSize: '1.125rem',
              textDecoration: 'none',
              border: '2px solid var(--primary-blue)',
              transition: 'all var(--transition-base)',
              display: 'inline-block'
            }}>
              Encontrar Local
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                textAlign: 'center',
                transition: 'transform var(--transition-base)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  color: 'var(--primary-blue)',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)'
                }}>
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccines Section */}
      <section id="vaccines" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
              Vacinas Disponíveis
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Confira as principais vacinas disponíveis em nossa rede de saúde
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {vaccines.map((vaccine) => (
              <div
                key={vaccine.id}
                onClick={() => setSelectedVaccine(selectedVaccine === vaccine.id ? null : vaccine.id)}
                style={{
                  background: 'white',
                  border: `3px solid ${selectedVaccine === vaccine.id ? vaccine.color : 'var(--gray-200)'}`,
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  boxShadow: selectedVaccine === vaccine.id ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                  transform: selectedVaccine === vaccine.id ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{vaccine.icon}</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  marginBottom: '0.75rem',
                  color: vaccine.color
                }}>
                  {vaccine.name}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {vaccine.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.5rem',
                  fontSize: '0.875rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} color={vaccine.color} />
                    <span><strong>Faixa etária:</strong> {vaccine.ageGroup}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Syringe size={16} color={vaccine.color} />
                    <span><strong>Doses:</strong> {vaccine.doses}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
              Onde se Vacinar
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Encontre a unidade de saúde mais próxima de você
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {locations.map((location, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-base)'
              }}>
                <div style={{
                  background: 'var(--gradient-primary)',
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <MapPin color="white" size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>
                  {location.name}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{location.address}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <Clock size={18} style={{ flexShrink: 0 }} />
                    <span>{location.hours}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <Phone size={18} style={{ flexShrink: 0 }} />
                    <span>{location.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'var(--gradient-primary)',
        padding: '5rem 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AlertCircle size={64} style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>
            Mantenha sua Carteira em Dia
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.95 }}>
            A vacinação é um direito de todos e um dever de cada cidadão. Proteja-se e proteja sua comunidade.
          </p>
          <button style={{
            background: 'white',
            color: 'var(--primary-blue)',
            padding: '1rem 3rem',
            borderRadius: 'var(--radius-lg)',
            fontWeight: '700',
            fontSize: '1.125rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-xl)'
          }}>
           <a href="/agendar">Agendar Vacinação</a> 
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{
        background: 'var(--gray-900)',
        color: 'white',
        padding: '3rem 0 1.5rem'
      }}>
        <div className="container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Syringe size={28} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Vacina+</h3>
              </div>
              <p style={{ color: 'var(--gray-400)', margin: 0 }}>
                Promovendo saúde e proteção através da imunização.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Contato</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--gray-400)' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Phone size={18} />
                  <span>(14) 3811-1000</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Mail size={18} />
                  <span>contato@vacinamais.gov.br</span>
                </div>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Horários</h4>
              <p style={{ color: 'var(--gray-400)', margin: 0 }}>
                Segunda a Sexta<br />
                8h às 17h
              </p>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid var(--gray-700)',
            paddingTop: '1.5rem',
            textAlign: 'center',
            color: 'var(--gray-400)',
            fontSize: '0.875rem'
          }}>
            <p style={{ margin: 0 }}>© 2025 Vacina+. Todos os direitos reservados. | Ministério da Saúde - SUS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}