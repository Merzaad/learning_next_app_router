import TimeAgo from '@/components/TimeAgo'

export default function Page() {
  const cachedTime = Date.now() / 1000
  return <TimeAgo baseTime={cachedTime} />
}
