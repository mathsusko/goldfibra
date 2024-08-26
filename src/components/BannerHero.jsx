import styles from './BannerHero.module.css'
import { ArrowCircleRight } from '@phosphor-icons/react'
import goldfibra from '../assets/image/goldfibra.png'

export function BannerHero() {
  return (
    <section className={styles.bannerHero}>
      <div className={styles.description}>
        <h1>GOLDFIBRA</h1>
        <img
          src={goldfibra}
          alt=""
        />
        <p>
          INTERNET GOLD PARA
          <br /> VOCÊ VALORIZAR TEMPO
        </p>

        <div className={styles.buttons}>
          <button>
            <a href="#">
              CONTRATAR <ArrowCircleRight size={32} />
            </a>
          </button>
          <a
            className={styles.link}
            href="#"
          >
            Ver planos
          </a>
        </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <p>15 MAIO 2024</p>
          <h2>GOLDFIBRA</h2>
          <h4>
            Internet Gold para você <br />
            que busca qualidade
          </h4>
        </div>
        <div className={styles.box}>
          <p>15 MAIO 2024</p>
          <h2>PROMOÇÃO</h2>
          <h4>
            Contrate nossa internet <br />e pague por 3 meses 59,90
          </h4>
        </div>
        <div className={styles.box}>
          <p>15 MAIO 2024</p>
          <h2>NOS INDIQUE </h2>
          <h4>
            Indique para duas pessoas <br />e ganha o próximo mês grátis
          </h4>
        </div>
      </div>
    </section>
  )
}
