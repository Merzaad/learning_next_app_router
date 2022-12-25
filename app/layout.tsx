import styles from '../styles/layout.module.scss'
import '../styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>HELLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOO</div>
      {children}
    </div>
  )
}
