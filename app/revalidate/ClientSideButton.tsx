'use client'

import { useState, useEffect } from 'react'

export default function ClienSideButton({ time }: { time: number | string }) {
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    let timeOut: NodeJS.Timeout
    if (timer > 0) {
      timeOut = setTimeout(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    }
    return () => clearTimeout(timeOut)
  }, [timer])
  const resetTimer = () => setTimer(60)
  return (
    <>
      <button onClick={resetTimer}>{timer}</button>
      <button> time: {time}</button>
    </>
  )
}
