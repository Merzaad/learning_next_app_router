const getData = async () => {
  try {
    const result = await fetch('https://api.blockchair.com/ethereum/stats', {
      next: { revalidate: 10 },
    })
    const {
      data: { market_price_usd },
    } = await result.json()
    return { price: market_price_usd, fetchedTime: String(new Date()) }
  } catch (error) {
    throw new Error('fetch error')
  }
}
export default async function Page() {
  const { price, fetchedTime } = await getData()
  return (
    <div className='flex justify-center items-center bg-neutral-900 rounded-lg h-full flex-col gap-4'>
      <div>{price} ETH/USDT</div>
      <div>{fetchedTime}</div>
    </div>
  )
}
