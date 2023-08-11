import TimeAgo from '@/components/TimeAgo'

const getTime = async () => {
  const time = await (() =>
    new Promise<number>((resolve) => {
      setTimeout(() => resolve(Date.now()), 2000)
    }))()
  console.log('prefetched')
  return time
}

export default async function Prefetched() {
  const time = await getTime()
  return (
    <div className='flex justify-center items-center bg-neutral-900 rounded-lg h-full flex-col gap-4'>
      <TimeAgo baseTime={time} />
    </div>
  )
}
