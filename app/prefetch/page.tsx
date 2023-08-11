'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Prefetched from './prefetched/page'
import Button from '@/components/Button'

export default async function Page() {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/prefetch/prefetched')
  }, [router])
  return (
    <div className='flex justify-center items-center bg-neutral-900 rounded-lg h-full flex-col gap-4'>
      <Button onClick={() => router.push('/prefetch/prefetched')}>prefetched</Button>
    </div>
  )
}
