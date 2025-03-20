import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const path = request.nextUrl.pathname
  
  // For debugging - if in development, log information about the request
  console.log(`Processing request for hostname: "${hostname}", path: "${path}"`)

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
  
  // Debugging info
  console.log(`Target path for "${hostname}": ${targetPath || 'Not found in routes'}`)
  
  if (targetPath) {
    if (!path.startsWith(targetPath)) {
      const url = new URL(request.url)
      const newPath = path === '/' ? targetPath : `${targetPath}${path}`
      
      // Log the rewrite being attempted
      console.log(`Rewriting URL from ${url.pathname} to ${newPath}`)
      
      url.pathname = newPath
      return NextResponse.rewrite(url)
    }
  } else {
    // Log when hostname doesn't match any routes
    console.log(`No route found for hostname: ${hostname}`)
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