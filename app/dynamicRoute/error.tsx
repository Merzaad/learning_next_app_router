'use client'

import Button from '@/components/Button'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className='rounded-lg bg-neutral-900 p-4 h-full flex justify-center'>
      <div className='w-40'>{error.message}</div>
      <div>
        <Button onClick={() => reset()}>reset</Button>
      </div>
    </div>
  )
}
