'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  /*  const router = useRouter() */
  const routes = [
    '/',
    '/default',
    '/revalidate',
    '/noCache',
    '/routeGroup1',
    '/routeGroup2',
    '/dynamicRoute',
    '/parallelRoutes',
    '/nestingComponents',
    '/context',
    '/prefetch',
  ]
  const pathname = usePathname()
  return (
    <div className='flex flex-col items-center gap-2 rounded-lg min-h-full bg-neutral-950 w-min  overflow-y-auto dark:bg-neutral-950'>
      {routes.map((route) => (
        <Link
          key={route}
          href={route}
          prefetch={route === '/default' && true}
          className={`w-full p-4 hover:bg-neutral-900 cursor-pointer ${
            pathname === route ? 'text-teal-500' : ''
          }`}
        >
          {route === '/' ? 'home' : route.slice(1)}
        </Link>
      ))}
    </div>
  )
}
