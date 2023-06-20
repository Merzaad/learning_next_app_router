'use client'

import { useState, useEffect } from 'react'

export default function TimeAgo({ baseTime }: { baseTime: number }) {
  const [time, setTime] = useState(Date.now() / 1000)
  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <div className='px-2 text-white-500 border-1 rounded-lg bg-neutral-800 max-w-max p-2'>
      rendred {(time - baseTime).toFixed(0)}s ago
    </div>
  )
}
