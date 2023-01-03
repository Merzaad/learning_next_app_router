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
      <div className='card' onClick={navigateToDefault}>
        default
      </div>
      <div className='card' onClick={navigateToRevalidate}>
        revalidate
      </div>
      <div className='card' onClick={navigateToNoCache}>
        noCache
      </div>
    </div>
  )
}
