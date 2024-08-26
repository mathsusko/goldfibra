import styles from './SegundaSection.module.css'
import circleBlue from '../assets/image/circleBlue.png'

import circleGreen from '../assets/image/circleGreen.png'

import hawuei from '../assets/image/hawuei.png'

import anatel from '../assets/image/anatel.png'

import moldem from '../assets/image/moldem.png'

export function SegundaSection() {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h4>Venha para</h4>
        <h2>GOLDFIBRA</h2>
        <p>Trabalhamos para melhoria continua desses 3 pilares</p>
      </div>
      <div className={styles.cards}>

        <div className={styles.colunaOne}>
          <div className={styles.cardOne}>
            <div className={styles.infoOne}>
              <h3>Velocidade</h3>
              <p>
                Com nossa banda larga garantida, você nunca mais terá que se preocupar com
                quedas de conexão ou lentidão na sua internet.
              </p>
            </div>
            <div className={styles.dados}>
              <div className={styles.dadoOne}>
                <div className={styles.colOne}>
                  <div className={styles.pill}>
                    <p>Download</p>
                  </div>

                  <div className={styles.desc}>
                    <p>Internet Fibra Óptica</p>
                    <p>Download Rápido</p>
                  </div>
                </div>

                <img
                  src={circleBlue}
                  alt=""
                />
              </div>

              <div className={styles.dadoTwo}>
                <div className={styles.colTwo}>
                  <div className={styles.pill}>
                    <p>Upload</p>
                  </div>

                  <div className={styles.desc}>
                    <p>A navegação que não falha</p>
                    <p>Upload instantâneo</p>
                  </div>
                </div>

                <img
                  src={circleGreen}
                  alt=""
                />
              </div>

              <button>
                <a href="#">CONTRATAR</a>
              </button>
            </div>
          </div>
          <div className={styles.cardTwo}>
            <div className={styles.info}>
              <h3>Entrega</h3>
              <p>
                Conexão rápida, atendimento ágil e instalação de qualidade garantida.
                Experimente a internet do futuro, agora mesmo!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cardThree}>
          <div className={styles.primeira}>
            <img
              src={hawuei}
              alt=""
            />
            <img
              src={anatel}
              alt=""
            />
          </div>
          <div className={styles.segunda}>
            <img
              src={moldem}
              alt=""
            />
          </div>
          <div className={styles.terceira}>
            <p>Equipamento</p>
            <p>
              Desfrute do melhor da tecnologia com o modem Huawei, líder de mercado.
              Conecte-se ao futuro da internet com qualidade incomparável.
            </p>
            <p>5G/6G</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
