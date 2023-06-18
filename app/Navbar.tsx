'use client'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className='flex items-center p-2 gap-2 flex-wrap'>
      <Button onClick={() => router.push('/')}>Home</Button>
      <Button onClick={() => router.push('/default')}>default</Button>
      <Button onClick={() => router.push('/revalidate')}>revalidate</Button>
      <Button onClick={() => router.push('/noCache')}>noCache</Button>
    </div>
  )
}
