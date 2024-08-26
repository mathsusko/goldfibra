import styles from './Prova.module.css'

export function Prova() {
  return (
    <section className={styles.content}>
      <div className={styles.prova}>
        <div className={styles.title}>
          Veja o que nossos <br />
          clientes dizem!
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>
              Como gamer, a velocidade e a estabilidade da internet são essenciais para
              mim. Desde que assinei a Goldfibra, a experiência de jogo melhorou
              drasticamente. A latência é mínima e nunca experimento quedas durante as
              partidas. Além disso, consigo fazer streaming de jogos em alta qualidade sem
              qualquer problema. Goldfibra é a melhor escolha para quem precisa de uma
              internet realmente rápida e confiável.
            </p>
            <p>Pietro</p>
          </div>
          <div className={styles.card}>
            <p>
              O atendimento ao cliente da Goldfibra é simplesmente excepcional. Sempre que
              tive alguma dúvida ou precisei de assistência, fui atendido de maneira
              rápida e eficiente. A equipe é extremamente profissional e amigável, o que
              torna toda a experiência muito mais agradável. Parabéns, Goldfibra, por
              valorizar tanto seus clientes
            </p>
            <p>Fabricio</p>
          </div>
          <div className={styles.card}>
            <p>
              Nossa empresa migrou para a Goldfibra no ano passado, e a mudança foi uma
              das melhores decisões que tomamos. A estabilidade da conexão é vital para
              nossas operações diárias, e com a Goldfibra, nunca tivemos interrupções. O
              suporte técnico também é excelente, sempre disponível para resolver qualquer
              problema rapidamente. Isso nos permite focar no crescimento do nosso negócio
              sem preocupações.
            </p>
            <p>Grupo CEO</p>
          </div>
          <div className={styles.card}>
            <p>
              Estou usando a Goldfibra há seis meses e a diferença é nítida. A velocidade
              é incrível, permitindo que toda a minha família se conecte ao mesmo tempo
              sem qualquer lentidão. Além disso, o suporte ao cliente é rápido e sempre
              disposto a ajudar. Eu recomendo a Goldfibra para todos que procuram uma
              internet de qualidade!
            </p>
            <p>João</p>
          </div>
        </div>
      </div>
    </section>
  )
}
