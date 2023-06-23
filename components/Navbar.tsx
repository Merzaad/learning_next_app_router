'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const routes = ['/', '/default', '/revalidate', '/noCache', '/cachedRender', '/dynamicRoute']
  const pathname = usePathname()
  return (
    <div className='flex flex-col items-center gap-2 rounded-lg min-h-full bg-neutral-950 w-min  overflow-y-auto'>
      {routes.map((route) => (
        <div
          key={route}
          onClick={() => router.push(route)}
          className={`w-full p-4 hover:bg-neutral-900 cursor-pointer ${
            pathname === route ? 'text-teal-500' : ''
          }`}
        >
          {route === '/' ? 'home' : route.slice(1)}
        </div>
      ))}
    </div>
  )
}
