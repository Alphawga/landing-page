import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const path = request.nextUrl.pathname

  // Define the routing map - include both www and non-www versions
  const routes = {
    'precision-keywords.com': '/precision-keywords',
    'www.precision-keywords.com': '/precision-keywords',
    'precision-grammar.com': '/precision-grammar',
    'www.precision-grammar.com': '/precision-grammar',
    'eatcleanfit.com': '/eat-clean',
    'www.eatcleanfit.com': '/eat-clean',
    'easymultilingo.com': '/easy-multilingo',
    'www.easymultilingo.com': '/easy-multilingo'
  }

  // Get the target path based on the exact hostname
  const targetPath = routes[hostname as keyof typeof routes]
  
  if (targetPath) {
    // Only rewrite if we're not already on the correct path
    if (!path.startsWith(targetPath)) {
      const url = new URL(request.url)
      url.pathname = path === '/' ? targetPath : `${targetPath}${path}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

// Match all paths except static files and api routes
export const config = {
  matcher: [
    // Skip api routes
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
} 