import Button from '@/components/Button'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex gap-4 flex-col h-full'>
      <div className='rounded-lg bg-neutral-900 p-4 h-16 flex gap-4 '>
        <Link href='/dynamicRoute/test'>
          <Button>/test</Button>
        </Link>
        <Link href='/dynamicRoute/error'>
          <Button>/error</Button>
        </Link>
      </div>
      {children}
    </div>
  )
}
