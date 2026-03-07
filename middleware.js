import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.next()
}

// This tells the middleware to only trigger for your app path
export const config = {
  matcher: '/app/:path*',
}
