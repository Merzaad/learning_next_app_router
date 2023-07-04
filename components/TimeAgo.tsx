'use client'

import { useState, useEffect } from 'react'

export default function TimeAgo({ baseTime }: { baseTime: number }) {
  const [time, setTime] = useState('0')
  useEffect(() => {
    let timeout = setTimeout(() => {
      setTime(((Date.now() - baseTime) / 1000).toFixed(0))
    }, 1000)
    return () => clearTimeout(timeout)
  }, [time])
  return (
    <div className='px-2 text-white-500 border-1 rounded-lg bg-neutral-800 max-w-max p-2'>
      rendred {time}s ago
    </div>
  )
}
