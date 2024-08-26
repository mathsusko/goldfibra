import styles from './Planos.module.css'
import cem from '../assets/image/100.png'
import quatro from '../assets/image/400.png'
import seis from '../assets/image/600.png'
import oito from '../assets/image/800.png'

import moldemIcon from '../assets/image/moldem-icon.png'
import {
  LineSegments,
  ChartLineUp,
  UserCircleGear,
  Broadcast,
  SketchLogo
} from '@phosphor-icons/react'

export function Planos() {
  return (
    <section className={styles.content}>
      <div className={styles.title}>
        <h2>NOSSOS PLANOS</h2>
        <p>A cada 2 pessoas indicadas, ganhe o próximo mês grátis!</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.primeiro}>
            <p>Goldfibra</p>
          </div>
          <img
            src={cem}
            alt=""
          />
          <div className={styles.elementos}>
            <div className={styles.elemento}>
              <span>
                <LineSegments size={24} />
              </span>
              <p>100% Fibra</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <img
                  src={moldemIcon}
                  alt=""
                />
              </span>
              <p>Equip. acomodato</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <Broadcast size={24} />
              </span>
              <p>Wi-Fi 5g, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <UserCircleGear size={24} />
              </span>
              <p>Instalação, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <ChartLineUp size={24} />
              </span>
              <p>Não fazemos analise SPC/SERASA</p>
            </div>
          </div>

          <div className={styles.prices}>
            <div className={styles.price}>
              <h3>R$59,90</h3>
              <p>/por 3 Meses</p>
            </div>

            <div className={styles.descricao}>
              <p>
                Após o <strong>terceiro</strong> mês será descontado valor original do
                plano. <span>R$79,90</span>
              </p>
            </div>
          </div>

          <button className={styles.cta}>
            <a href="#">CONTRATAR ESSE PLANO</a>
          </button>
          <div className={styles.info}>
            <p>Todos planos sem necessidade de contrato de fidelidade!</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.primeiro}>
            <p>Goldfibra</p>
          </div>
          <img
            src={quatro}
            alt=""
          />
          <div className={styles.elementos}>
            <div className={styles.elemento}>
              <span>
                <LineSegments size={24} />
              </span>
              <p>100% Fibra</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <img
                  src={moldemIcon}
                  alt=""
                />
              </span>
              <p>Equip. acomodato</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <Broadcast size={24} />
              </span>
              <p>Wi-Fi 5g, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <UserCircleGear size={24} />
              </span>
              <p>Instalação, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <ChartLineUp size={24} />
              </span>
              <p>Não fazemos analise SPC/SERASA</p>
            </div>
          </div>

          <div className={styles.prices}>
            <div className={styles.price}>
              <h3>R$59,90</h3>
              <p>/por 3 Meses</p>
            </div>

            <div className={styles.descricao}>
              <p>
                Após o <strong>terceiro</strong> mês será descontado valor original do
                plano. <span>R$99,90</span>
              </p>
            </div>
          </div>

          <button className={styles.cta}>
            <a href="#">CONTRATAR ESSE PLANO</a>
          </button>
          <div className={styles.info}>
            <p>Todos planos sem necessidade de contrato de fidelidade!</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.primeiro}>
            <p>Goldfibra</p>
            <SketchLogo size={16} />
          </div>
          <img
            src={seis}
            alt=""
          />
          <div className={styles.elementos}>
            <div className={styles.elemento}>
              <span>
                <LineSegments size={24} />
              </span>
              <p>100% Fibra</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <img
                  src={moldemIcon}
                  alt=""
                />
              </span>
              <p>Equip. acomodato</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <Broadcast size={24} />
              </span>
              <p>Wi-Fi 5g, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <UserCircleGear size={24} />
              </span>
              <p>Instalação, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <ChartLineUp size={24} />
              </span>
              <p>Não fazemos analise SPC/SERASA</p>
            </div>
          </div>

          <div className={styles.prices}>
            <div className={styles.price}>
              <h3>R$59,90</h3>
              <p>/por 3 Meses</p>
            </div>

            <div className={styles.descricao}>
              <p>
                Após o <strong>terceiro</strong> mês será descontado valor original do
                plano. <span>R$119,90</span>
              </p>
            </div>
          </div>

          <button className={styles.cta}>
            <a href="#">CONTRATAR ESSE PLANO</a>
          </button>
          <div className={styles.info}>
            <p>Todos planos sem necessidade de contrato de fidelidade!</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.primeiro}>
            <p>Goldfibra</p>
            <SketchLogo size={16} />
          </div>
          <img
            src={oito}
            alt=""
          />
          <div className={styles.elementos}>
            <div className={styles.elemento}>
              <span>
                <LineSegments size={24} />
              </span>
              <p>100% Fibra</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <img
                  src={moldemIcon}
                  alt=""
                />
              </span>
              <p>Equip. acomodato</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <Broadcast size={24} />
              </span>
              <p>Wi-Fi 5g, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <UserCircleGear size={24} />
              </span>
              <p>Instalação, grátis</p>
            </div>
            <div className={styles.elemento}>
              <span>
                <ChartLineUp size={24} />
              </span>
              <p>Não fazemos analise SPC/SERASA</p>
            </div>
          </div>

          <div className={styles.prices}>
            <div className={styles.price}>
              <h3>R$59,90</h3>
              <p>/por 3 Meses</p>
            </div>

            <div className={styles.descricao}>
              <p>
                Após o <strong>terceiro</strong> mês será descontado valor original do
                plano. <span>R$139,90</span>
              </p>
            </div>
          </div>

          <button className={styles.cta}>
            <a href="#">CONTRATAR ESSE PLANO</a>
          </button>
          <div className={styles.info}>
            <p>Todos planos sem necessidade de contrato de fidelidade!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
