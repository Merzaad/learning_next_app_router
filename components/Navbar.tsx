'use client'
import Button from '@/components/Button'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const routes = ['/', '/default', '/revalidate', '/noCache', '/cachedRender']
  const pathname = usePathname()
  return (
    <div className='flex items-center p-2 gap-2 flex-wrap'>
      {routes.map((route) => (
        <Button
          key={route}
          onClick={() => router.push(route)}
          className={pathname === route ? 'border-teal-500 hover:border-teal-400' : undefined}
        >
          {route === '/' ? 'home' : route.slice(1)}
        </Button>
      ))}
    </div>
  )
}
