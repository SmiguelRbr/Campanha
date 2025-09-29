'use client'
import styles from "./page.module.css"
import Header from "@/app/Components/Header/Header";

export default function Beneficios() {
  return (
    <>
      <Header />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          minHeight: "100vh",
          paddingLeft: "50px",
          gap: '20px'
        }}
      >
        <h2 style={{ color: '#68A797', marginBottom: "10px" }}>Benefícios</h2>
        <p>Quais beneficios de se vacinar?</p>
        <p style={{ maxWidth: "600px", marginBottom: "20px", color: '#68A797' }}>
          Vacinar é proteger você, sua família e toda a comunidade. As vacinas
          ajudam a reduzir doenças, internações e complicações graves.
        </p>

        <div className={styles.butoes}>
          <button>? Pergunta frequente</button>
          <button>? Pergunta frequente</button>
          <button>? Pergunta frequente</button>
        </div>
      </main>
    </>
  );
}
