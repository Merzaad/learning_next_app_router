import styles from '../../styles/revalidate/page.module.scss'
import ClienSideButton from './ClientSideButton'

const getData = async () => {
  try {
    const result = await fetch('https://api.blockchair.com/ethereum/stats', {
      next: { revalidate: 10 },
    })

    return result.json()
  } catch (error) {
    return error
  }
}
export default async function Page() {
  const test = await getData()
  const result = JSON.stringify(test, undefined, 10) || test.message
  return (
    <div className={styles.revalidate}>
      <ClienSideButton />
      <div>{result}</div>
    </div>
  )
}
