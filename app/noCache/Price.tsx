'use client'

import Button from '@/components/Button'
import { useState } from 'react'

export default function Price({ initialPrice }: { initialPrice: number }) {
  const [price, setPrice] = useState<number | string>(initialPrice)
  const onRefetchClick = async () => {
    setPrice('fetching')
    try {
      const result = await fetch('https://api.blockchair.com/dogecoin/stats')
      //  { cache: 'no-cache' } ???
      const {
        data: { market_price_usd },
      } = await result.json()
      setPrice(market_price_usd)
    } catch (error) {
      setPrice('fetch error')
    }
  }
  return (
    <>
      <div>{price} DOGE/USDT</div>
      <Button disabled={price === 'fetching'} onClick={onRefetchClick}>
        refetch
      </Button>
    </>
  )
}
