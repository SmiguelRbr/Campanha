'use client'
import styles from './page.module.css'
import Header from "@/app/Components/Header/Header";

export default function Agendar() {
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
          gap: "20px",
          transform: 'translateY(100px)'
        }}
      >
        <h2 style={{ color: "#68A797", marginBottom: "10px" }}>Agendar</h2>
        <p>Agende sua vacina</p>
        <p
          style={{
            maxWidth: "600px",
            marginBottom: "20px",
            color: "#68A797",
          }}
        >
          Preencha as informações com seus dados para agendar a vacina
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          {/* CPF e Nome lado a lado */}
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="cpf"
                style={{ marginBottom: "5px", fontWeight: "500", color: "#444" }}
              >
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="nome"
                style={{ marginBottom: "5px", fontWeight: "500", color: "#444" }}
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          {/* Campos restantes */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="endereco"
              style={{ marginBottom: "5px", fontWeight: "500", color: "#444" }}
            >
              Endereço Completo
            </label>
            <input
              type="text"
              id="endereco"
              placeholder="Rua Exemplo, 123"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="cep"
              style={{ marginBottom: "5px", fontWeight: "500", color: "#444" }}
            >
              CEP
            </label>
            <input
              type="text"
              id="cep"
              placeholder="00000-000"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="telefone"
              style={{ marginBottom: "5px", fontWeight: "500", color: "#444" }}
            >
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              placeholder="(55+) 00 00000-0000"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Botões */}
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <button
              type="button"
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#68A797",
                color: "white",
                cursor: "pointer",
              }}
            >
              Agendar
            </button>
          </div>
        </form>

      
        <div className={styles.butoes}>
          <button>? Pergunta frequente</button>
          <button>? Pergunta frequente</button>
          <button>? Pergunta frequente</button>
        </div>
      </main>
    </>
  );
}
