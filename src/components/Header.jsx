import styles from './Header.module.css'
import goldfibra from '../assets/image/goldfibra.png'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <p>Para você</p>
        <img
          src={goldfibra}
          alt=""
        />
        <button>
          <a href="#">Portal do cliente</a>
        </button>
      </div>
    </header>
  )
}
