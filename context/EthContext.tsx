'use client'
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'

// @ts-ignore
const ethContext = createContext<{ price: number; setPrice: Dispatch<SetStateAction<number>> }>()

export default function EthContext({
  value,
  children,
}: {
  value: number
  children: React.ReactNode
}) {
  const [state, setState] = useState(value)
  return (
    <ethContext.Provider value={{ price: state, setPrice: setState }}>
      {children}
    </ethContext.Provider>
  )
}
export { ethContext }
