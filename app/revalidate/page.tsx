import TimeAgo from '@/components/TimeAgo'
const getData = async () => {
  try {
    const result = await fetch('https://api.blockchair.com/ethereum/stats', {
      next: { revalidate: 10 },
    })

    return result.json()
  } catch (error) {
    return { data: {} }
  }
}
export default async function Page() {
  const {
    data: { market_price_usd },
  } = await getData()
  const requestTime = Date.now() / 1000
  return (
    <div>
      <TimeAgo baseTime={requestTime} />
      <button>{market_price_usd || 'error'}</button>
    </div>
  )
}
