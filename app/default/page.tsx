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
  const test = await getData()
  const result = JSON.stringify(test, undefined, 10) || test.message
  const requestTime = Date.now() / 1000
  return (
    <>
      <div>{result}</div>
      <TimeAgo baseTime={requestTime} />{' '}
    </>
  )
}
