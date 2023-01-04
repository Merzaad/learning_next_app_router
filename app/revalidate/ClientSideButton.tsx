'use client'

import { useState, useEffect } from 'react'

export default function ClienSideButton() {
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
      <button className='card'  >{timer}</button>
      <br />
      <button className='card' onClick={resetTimer}>
        reset timer
      </button>
      <br />
    </>
  )
}
