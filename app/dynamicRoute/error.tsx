'use client'

import Button from '@/components/Button'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <div>{error.message}</div>
      <Button onClick={() => reset()}>reset</Button>
    </div>
  )
}
