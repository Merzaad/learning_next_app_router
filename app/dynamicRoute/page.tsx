import Button from '@/components/Button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='border-1 border-cyan-100 p-2'>
      <Link href='/dynamicRoute/test'>
        <Button>/test</Button>
      </Link>
    </div>
  )
}
