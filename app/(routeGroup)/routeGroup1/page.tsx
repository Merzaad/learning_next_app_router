import TimeAgo from '@/components/TimeAgo'

export default function Page() {
  const cachedTime = Date.now() / 1000
  return (
    <div className='rounded-lg bg-neutral-900 p-4 h-full'>
      1
      <TimeAgo baseTime={cachedTime} />
    </div>
  )
}
