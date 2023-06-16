'use client'

import { useRouter } from 'next/navigation'
import './globals.css'

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
    <div>
      <div onClick={navigateToDefault}>default</div>
      <div onClick={navigateToRevalidate}>revalidate</div>
      <div onClick={navigateToNoCache}>noCache</div>
    </div>
  )
}
