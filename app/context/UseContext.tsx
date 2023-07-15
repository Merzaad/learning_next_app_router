'use client'

import { ethContext } from '@/context/EthContext'
import { useContext } from 'react'

export default function UseContext() {
  const { price } = useContext(ethContext)
  return <div>{price} ETH/USDT</div>
}
