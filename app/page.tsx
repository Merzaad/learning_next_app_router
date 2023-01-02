'use client'

import styles from '../styles/page.module.scss'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const navigateToDefault = () => {
    router.push('/default')
  }
  const navigateToRevalidate = () => {
    router.push('/revalidate')
  }
  const navigateToNoCache = () => {
    router.push('/noCache')
  }
  return (
    <div className={styles.main}>
      <div className={styles.card} onClick={navigateToDefault}>
        default
      </div>
      <div className={styles.card} onClick={navigateToRevalidate}>
        revalidate
      </div>
      <div className={styles.card} onClick={navigateToNoCache}>
        noCache
      </div>
    </div>
  )
}
