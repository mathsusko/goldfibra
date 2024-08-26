import styles from './Footer.module.css'
import goldfibra from '../assets/image/goldfibra.png'
import {
  FacebookLogo,
  InstagramLogo,
  Headset,
  MapPin,
  Copyright,
  WhatsappLogo
} from '@phosphor-icons/react'
export function Footer() {
  return (
    <section className={styles.content}>
      <div className={styles.footer}>
        <div className={styles.rowOne}>
          <div className={styles.logo}>
            <img
              src={goldfibra}
              alt=""
            />
            <div className={styles.icon}>
              <a
                href="https://www.facebook.com/profile.php?id=61560860970974#"
                target="_blank"
              >
                <FacebookLogo size={32} />
              </a>
              <a
                href="https://www.instagram.com/goldfibralimitada/"
                target="_blank"
              >
                <InstagramLogo size={32} />
              </a>
            </div>
          </div>
          <div className={styles.contato}>
            <div className={styles.title}>
              <Headset size={32} />
              <h2>Contatos</h2>
            </div>
            <div className={styles.nav}>
              <ul>
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    Financeiro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    Suporte
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    Vendas
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.enderesso}>
            <div className={styles.title}>
              <MapPin size={32} />
              <h2>Enderesso</h2>
            </div>

            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/Goldfibra+Telecomunica%C3%A7%C3%B5es+Ltda./@-25.501126,-49.3501984,15z/data=!4m2!3m1!1s0x0:0x9db7d54ae14918a3?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                >
                  R. Maria Coradin Garib, 34
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rowTwo}>
          <Copyright size={32} />

          <p>Goldfibra LTDA | Todos os direitos reservados</p>
        </div>

        <div className={styles.rowThree}>
          <a
            href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
            className={styles.float}
            target="_blank"
          >
            <WhatsappLogo size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
