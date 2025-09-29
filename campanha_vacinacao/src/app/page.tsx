'use client'

import Image from "next/image";
import styles from "./page.module.css"
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <>
      <Header></Header>

      <main style={{ flexDirection: 'column' }}>

        <div className={styles.container}>
          <div className={styles.slogan}>
            <h2 style={{ fontSize: "30px", fontWeight: '500', color: '#68A797' }}>Vacine-se!</h2>

            <h3 style={{ color: "rgb(121, 118, 118)", fontSize: "15px", width: '250px', fontWeight: '500' }}>Vacinar é cuidar: proteja-se, proteja a todos</h3>

            <button className={styles.encontrar}><i className="fa-solid fa-magnifying-glass"></i>Encontre seu posto!</button>
          </div>

          <div className={styles.imageSlogan}>
           
          </div>

        </div>

        <div className="divisor" style={{ height: '350px', width: '100vw', background: '#68A797', display: 'flex', justifyContent: "center", flexDirection: 'column', color: "rgb(235, 234, 234)", position: 'relative', top: '100px' }}>
          <div className="title" style={{ position: 'relative', top: '-50px', left: '550px', width: '190px' }}>
            <p>Por que se vacinar?</p>
          </div>

          <div className={styles.imgs}>
            <div className={styles.txt}>
              <img style={{ width: '100px' }} src="https://images.vexels.com/media/users/3/128917/isolated/preview/3fa111197f6aee0add60c05829d0f196-icone-de-ponto-de-exclamacao.png" alt="" />
              <p>Proteção contra doenças graves</p>
            </div>

            <div className={styles.txt}>
              <img style={{ width: '100px' }} src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt="" />
              <p>100% Seguro</p>
            </div>

            <div className={styles.txt}>
              <img style={{ width: '100px' }} src="https://cdn-icons-png.flaticon.com/512/883/883397.png" alt="" />
              <p>Prevenção contra sintomas</p>
            </div>

          </div>

        </div>

        <div className={styles.butoes}>
          <button>? Pergunta frequente</button>
          <button>? Pergunta frequente</button>
          <button>? Pergunta frequente</button>
        </div>

      </main>


    </>
  );
}
