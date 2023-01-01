'use client'

import styles from '../styles/page.module.scss'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const navigateToCprtyo = () => {
    router.push('/cprtyo')
  }
  return (
    <div className={styles.main}>
      <div className={styles.section1} onClick={navigateToCprtyo}>
        Cprtyo
      </div>
    </div>
  )
}
