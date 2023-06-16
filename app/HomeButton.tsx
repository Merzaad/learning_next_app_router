'use client'
import { useRouter } from 'next/navigation'

export default function HomeButton() {
  const router = useRouter()
  const refreshHandler = () => router.replace('/')
  return <div onClick={refreshHandler}>home</div>
}
