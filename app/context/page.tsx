import EthContext from '@/context/EthContext'
import UseContext from './UseContext'
import UpdateContext from './UpdateContext'

const getData = async () => {
  try {
    const result = await fetch('https://api.blockchair.com/ethereum/stats')
    const {
      data: { market_price_usd },
    } = await result.json()
    return { price: market_price_usd }
  } catch (error) {
    throw new Error('fetch error')
  }
}

export default async function Page() {
  const { price } = await getData()
  return (
    <div className='flex justify-center items-center bg-neutral-900 rounded-lg h-full flex-col gap-4'>
      <EthContext value={price}>
        <UseContext />
        <UpdateContext />
      </EthContext>
    </div>
  )
}
