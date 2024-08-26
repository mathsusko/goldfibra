import styles from './Solucao.module.css'

export function Solucao() {
  return (
    <section className={styles.bg}>
      <article className={styles.content}>
        <div className={styles.title}>
          <p>Atendimento Rápido e Eficiente</p>
          <h2>
            Sua Satisfação é <br />a Nossa Prioridade
          </h2>
        </div>

        <div className={styles.mosaico}>
          <div className={styles.colOne}>
            <div className={styles.seila}>
              <div className={styles.first}>
                <p>+3600</p>
              </div>
              <div className={styles.second}>
                <p>Clientes em atividade</p>
              </div>
            </div>

            <div className={styles.seila}>
              <div className={styles.first}>
                <p>+10</p>
              </div>
              <div className={styles.second}>
                <p>Anos no mercado</p>
              </div>
            </div>

            <div className={styles.seila}>
              <div className={styles.first}>
                <p>+10</p>
              </div>
              <div className={styles.second}>
                <p>Regiões sendo atendida</p>
              </div>
            </div>
          </div>

          <div className={styles.colTwo}>
            <div className={styles.box}>
              <p>Equipamento em Comodato</p>
              <h3>Tenha o Melhor Serviço sem Custos Extras!</h3>
            </div>
            <div className={styles.box}>
              <p>EInstalação Profissional</p>
              <h3>Garantindo a Qualidade dos Nossos Serviços</h3>
            </div>
            <div className={styles.box}>
              <p>Instalação Grátis </p>
              <h3>Economize com a GOLDFIBRA</h3>
            </div>
            <div className={styles.box}>
              <p>Nossos Atendimento</p>
              <h3>Se tiver algum problema, iremos resolver</h3>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
