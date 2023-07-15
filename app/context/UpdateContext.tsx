'use client'

import { ethContext } from '@/context/EthContext'
import { useContext } from 'react'

export default function UpdateContext() {
  const { setPrice } = useContext(ethContext)
  return (
    <>
      <button
        className='p-1 border border-zinc-500 rounded-lg bg-zinc-900 hover:bg-zinc-800 active:scale-95'
        onClick={() => setPrice((prev) => prev + 1)}
      >
        update
      </button>
    </>
  )
}
