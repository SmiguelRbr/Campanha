import { Syringe } from "lucide-react";

export default function Header() {
  return (
    <header style={{
      background: 'var(--gradient-primary)',
      padding: '1rem 0',
      boxShadow: 'var(--shadow-md)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Syringe color="white" size={32} />
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: 'white',
            margin: 0
          }}>
            Vacina+
          </h1>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#vaccines" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Vacinas</a>
          <a href="#locations" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Locais</a>
          <a href="#contact" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Contato</a>
          <a href="/calendario" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Calendario</a>
        </nav>
      </div>
    </header>
  );
}
