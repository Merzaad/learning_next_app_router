import styles from '../styles/layout.module.scss'
import '../styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div className={styles.layout}>
          <div className={styles.navbar}>FETCH</div>
          {children}
        </div>
      </body>
    </html>
  )
}

