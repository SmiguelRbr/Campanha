"use client"

import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Syringe, CheckCircle, X } from 'lucide-react';

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
          <a href="/agendar" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Agendar</a>
        </nav>
      </div>
    </header>
  );
}

export default function VaccinationCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const appointments = [
    { id: 1, date: new Date(2025, 9, 25), vaccine: 'COVID-19', location: 'UBS Centro', time: '09:00', available: 15, total: 20 },
    { id: 2, date: new Date(2025, 9, 25), vaccine: 'Influenza', location: 'UBS Jardim Paraíso', time: '14:00', available: 8, total: 15 },
    { id: 3, date: new Date(2025, 9, 28), vaccine: 'HPV', location: 'UBS Vila Nova', time: '10:30', available: 12, total: 15 },
    { id: 4, date: new Date(2025, 9, 28), vaccine: 'Tríplice Viral', location: 'UBS Centro', time: '15:00', available: 5, total: 10 },
    { id: 5, date: new Date(2025, 9, 30), vaccine: 'COVID-19', location: 'UBS Jardim Paraíso', time: '11:00', available: 20, total: 25 }
  ];

  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(apt => 
      apt.date.getDate() === date.getDate() &&
      apt.date.getMonth() === date.getMonth() &&
      apt.date.getFullYear() === date.getFullYear()
    );
  };

  const hasAppointments = (date: Date | null) => {
    if (!date) return false;
    return getAppointmentsForDate(date).length > 0;
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    return isSameDay(date, new Date());
  };

  const days = getDaysInMonth(currentDate);
  const selectedDateAppointments = selectedDate ? getAppointmentsForDate(selectedDate) : [];

  return (
    <div style={{ fontFamily: 'var(--font-family)', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      <Header />

      <section style={{ background: 'linear-gradient(180deg, rgba(0, 102, 204, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', padding: '3rem 0 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Calendar size={48} style={{ margin: '0 auto 1rem', color: 'var(--primary-blue)' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem' }}>Calendário de Vacinação</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Escolha a melhor data e horário para se vacinar
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                style={{ background: 'var(--gray-100)', border: 'none', borderRadius: 'var(--radius-md)', padding: '0.5rem', cursor: 'pointer' }}>
                <ChevronLeft size={24} />
              </button>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                style={{ background: 'var(--gray-100)', border: 'none', borderRadius: 'var(--radius-md)', padding: '0.5rem', cursor: 'pointer' }}>
                <ChevronRight size={24} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {dayNames.map(day => (
                <div key={day} style={{ textAlign: 'center', fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.5rem' }}>
                  {day}
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
              {days.map((day, idx) => {
                const hasApts = day && hasAppointments(day);
                const isSelected = day && selectedDate && isSameDay(day, selectedDate);
                const isTodayDate = day && isToday(day);
                return (
                  <button key={idx} onClick={() => day && setSelectedDate(day)} disabled={!day}
                    style={{
                      aspectRatio: '1', border: isSelected ? '2px solid var(--primary-blue)' : '1px solid var(--gray-200)',
                      borderRadius: 'var(--radius-md)', background: isSelected ? 'var(--primary-blue)' : isTodayDate ? 'var(--info-light)' : hasApts ? 'var(--success-light)' : 'white',
                      color: isSelected ? 'white' : day ? 'var(--text-primary)' : 'transparent', cursor: day ? 'pointer' : 'default',
                      fontWeight: '600', fontSize: '0.875rem', position: 'relative', transition: 'all 0.2s'
                    }}>
                    {day && day.getDate()}
                    {hasApts && !isSelected && <div style={{ position: 'absolute', bottom: '4px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--secondary-green)' }} />}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '16px', height: '16px', background: 'var(--info-light)', borderRadius: 'var(--radius-sm)' }} />
                <span>Hoje</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '16px', height: '16px', background: 'var(--success-light)', borderRadius: 'var(--radius-sm)' }} />
                <span>Disponível</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '16px', height: '16px', background: 'var(--primary-blue)', borderRadius: 'var(--radius-sm)' }} />
                <span>Selecionado</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={24} color="var(--primary-blue)" />
              {selectedDate ? `${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]}` : 'Selecione uma data'}
            </h3>

            {selectedDate && selectedDateAppointments.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {selectedDateAppointments.map(apt => (
                  <div key={apt.id} onClick={() => { setSelectedAppointment(apt); setShowModal(true); }}
                    style={{ padding: '1.25rem', border: '2px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary-blue)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gray-200)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--primary-blue)', margin: 0 }}>{apt.vaccine}</h4>
                      <span style={{
                        background: apt.available > 5 ? 'var(--success-light)' : 'var(--warning-light)',
                        color: apt.available > 5 ? 'var(--success)' : 'var(--warning)',
                        padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '600'
                      }}>{apt.available} vagas</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /><span>{apt.time}</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /><span>{apt.location}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                <Calendar size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                <p style={{ margin: 0 }}>{selectedDate ? 'Nenhum horário disponível para esta data' : 'Selecione uma data no calendário'}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {showModal && selectedAppointment && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: '1rem' }}
          onClick={() => setShowModal(false)}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '500px', width: '100%', boxShadow: 'var(--shadow-2xl)', position: 'relative' }}>
            <button onClick={() => setShowModal(false)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--gray-100)', border: 'none', borderRadius: 'var(--radius-md)', padding: '0.5rem', cursor: 'pointer' }}>
              <X size={20} />
            </button>
            <div style={{ marginBottom: '1.5rem' }}>
              <CheckCircle size={48} color="var(--success)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Confirmar Agendamento</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Revise os detalhes do seu agendamento</p>
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Vacina</label>
                  <p style={{ fontWeight: '600', margin: 0, fontSize: '1.125rem' }}>{selectedAppointment.vaccine}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Data e Horário</label>
                  <p style={{ fontWeight: '600', margin: 0 }}>{selectedAppointment.date.getDate()} de {monthNames[selectedAppointment.date.getMonth()]} às {selectedAppointment.time}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Local</label>
                  <p style={{ fontWeight: '600', margin: 0 }}>{selectedAppointment.location}</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setShowModal(false)}
                style={{ flex: 1, padding: '1rem', background: 'var(--gray-100)', border: 'none', borderRadius: 'var(--radius-lg)', fontWeight: '600', cursor: 'pointer' }}>
                Cancelar
              </button>
              <button onClick={() => { alert('Agendamento confirmado!'); setShowModal(false); }}
                style={{ flex: 1, padding: '1rem', background: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: 'var(--radius-lg)', fontWeight: '600', cursor: 'pointer' }}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}