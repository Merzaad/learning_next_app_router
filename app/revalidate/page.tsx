import styles from '../../styles/revalidate/page.module.scss'
import ClienSideButton from './ClientSideButton'

const getData = async () => {
  try {
    const result = await fetch('https://api.blockchair.com/ethereum/stats', {
      next: { revalidate: 10 },
    })

    return result.json()
  } catch (error) {
    return { data: {}, context: {} }
  }
}
export default async function Page() {
  const { data, context } = await getData()
  const { market_price_usd } = data
  const { time } = context
  return (
    <div className={styles.revalidate}>
      <ClienSideButton time={time || 'error'} />
      <button className='card'>{market_price_usd || 'error'}</button>
    </div>
  )
}
