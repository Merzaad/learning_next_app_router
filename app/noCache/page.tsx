import TimeAgo from '@/components/TimeAgo'
import Price from './Price'

const getData = async () => {
  try {
    const result = await fetch('https://api.blockchair.com/dogecoin/stats', { cache: 'no-cache' })
    const {
      data: { market_price_usd },
    } = await result.json()
    return { price: market_price_usd, fetchedTime: Date.now() }
  } catch (error) {
    throw new Error('fetch error')
  }
}
export default async function Page() {
  const { price, fetchedTime } = await getData()
  return (
    <div className='flex justify-center items-center bg-neutral-900 rounded-lg h-full flex-col gap-4'>
      <Price initialPrice={price} />
      <TimeAgo baseTime={fetchedTime} />
    </div>
  )
}
