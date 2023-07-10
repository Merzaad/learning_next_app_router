'use client'

import Button from '@/components/Button'
import { useState } from 'react'

export default function ClientComponent({
  children,
  initialState,
}: {
  children?: React.ReactNode
  initialState?: number
}) {
  const [state, setState] = useState(initialState || 0)
  return (
    <div className='rounded-lg bg-neutral-800 flex justify-center items-center h-full gap-4 p-4'>
      <div className='rounded-lg bg-neutral-700 flex flex-col gap-4 justify-center items-center h-full flex-1 p-4'>
        state: {state}
        <Button onClick={() => setState(state + 1)}>+</Button>
      </div>
      {children}
    </div>
  )
}
