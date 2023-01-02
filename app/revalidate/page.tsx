import styles from '../../styles/revalidate/page.module.scss'

const getData = async () => {
  try {
    const result = await fetch('https://api.blockchair.com/ethereum/stats', {
      next: { revalidate: 100 },
    })

    return result.json()
  } catch (error) {
    return error
  }
}
export default async function Page() {
  const test = await getData()
  const result = JSON.stringify(test, undefined, 10) || test.message
  return <div className={styles.cprtyo}>{result}</div>
}
