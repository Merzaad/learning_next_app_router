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
  return <div className='px-2 text-cyan-500'>{(time - baseTime).toFixed(0)}s ago</div>
}
