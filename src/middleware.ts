import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const path = request.nextUrl.pathname

  // Define the routing map - include both www and non-www versions
  const routes = {
    'precisionkeywords.com': '/precision-keywords',
    'www.precisionkeywords.com': '/precision-keywords',
    'precisiongrammar.com': '/precision-grammar',
    'www.precisiongrammar.com': '/precision-grammar',
    'eatcleanfit.com': '/eat-clean',
    'www.eatcleanfit.com': '/eat-clean',
    'easymultilingo.com': '/easy-multilingo',
    'www.easymultilingo.com': '/easy-multilingo',
    'copyimpacthub.com': '/elite-copy',
    'www.copyimpacthub.com': '/elite-copy'
  }

  // Get the target path based on the exact hostname
  const targetPath = routes[hostname as keyof typeof routes]
  
  if (targetPath) {
    // Only rewrite if we're not already on the correct path
    // For example, if hostname is 'easymultilingo.com' and path is '/about',
    // we want to rewrite to '/easy-multilingo/about'
    if (!path.startsWith(targetPath)) {
      const url = new URL(request.url)
      // If we're at the root path ('/'), just use the targetPath
      // Otherwise append the current path to the targetPath
      // e.g. '/easy-multilingo' or '/easy-multilingo/about' 
      url.pathname = path === '/' ? targetPath : `${targetPath}${path}`
      // Rewrite the URL while preserving the original hostname
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