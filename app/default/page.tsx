import TimeAgo from '@/components/TimeAgo'

const getData = async () => {
  try {
    console.log('test')
    const result = await fetch('https://api.blockchair.com/ethereum/stats')
    return result.json()
  } catch (error) {
    // throw new Error('todo')
    return 'todo'
  }
}
export default async function Page() {
  const {
    data: { market_price_usd },
  } = await getData()
  const requestTime = Date.now() / 1000
  return (
    <>
      <div>{market_price_usd}</div>
      <TimeAgo baseTime={requestTime} />
    </>
  )
}
