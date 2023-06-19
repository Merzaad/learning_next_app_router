import TimeAgo from '@/components/TimeAgo'

export default function Page() {
  const cachedTime = Date.now() / 1000
  return (
    <div className='border-1 border-teal-500 p-2 w-full flex items-center justify-center '>
      cached:
      <TimeAgo baseTime={cachedTime} />
    </div>
  )
}
