import styles from '../styles/layout.module.scss'
import '../styles/globals.css'
import HomeButton from './HomeButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div className={styles.layout}>
          <div className={styles.navbar}>
            <HomeButton />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}

