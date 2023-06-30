import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname.includes('dogecoin')) {
    return new NextResponse(JSON.stringify({ message: 'auth required' }), {
      status: 401,
    })
  }
  const response = NextResponse.next()
  response.headers.set('x-next-router', 'middleware')
  return response
}

export const config = {
  matcher: '/api/:path*',
}
