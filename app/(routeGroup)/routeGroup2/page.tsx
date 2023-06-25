import TimeAgo from '@/components/TimeAgo'

export default function Page() {
  const cachedTime = Date.now() / 1000
  return (
    <div className='rounded-lg bg-neutral-900 p-4 h-full'>
      2
      <TimeAgo baseTime={cachedTime} />
    </div>
  )
}
