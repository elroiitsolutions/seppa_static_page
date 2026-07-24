import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Handle only localized pages to avoid affecting other static routes.
  if (
    pathname === '/can' || pathname.startsWith('/en/can') || pathname.startsWith('/ar/can') ||
    pathname === '/pet' || pathname.startsWith('/en/pet') || pathname.startsWith('/ar/pet') ||
    pathname === '/glass' || pathname.startsWith('/en/glass') || pathname.startsWith('/ar/glass') ||
    pathname === '/pouch' || pathname.startsWith('/en/pouch') || pathname.startsWith('/ar/pouch') ||
    pathname === '/brick-carton' || pathname.startsWith('/en/brick-carton') || pathname.startsWith('/ar/brick-carton') ||
    pathname === '/gable-top-carton' || pathname.startsWith('/en/gable-top-carton') || pathname.startsWith('/ar/gable-top-carton') ||
    pathname === '/aseptic-drum' || pathname.startsWith('/en/aseptic-drum') || pathname.startsWith('/ar/aseptic-drum') ||
    pathname === '/automatic' || pathname.startsWith('/en/automatic') || pathname.startsWith('/ar/automatic') ||
    pathname === '/semi-automatic' || pathname.startsWith('/en/semi-automatic') || pathname.startsWith('/ar/semi-automatic') ||
    pathname === '/mineral-water-line-machines' || pathname.startsWith('/en/mineral-water-line-machines') || pathname.startsWith('/ar/mineral-water-line-machines') ||
    pathname === '/soft-drinks' || pathname.startsWith('/en/soft-drinks') || pathname.startsWith('/ar/soft-drinks') ||
    pathname === '/beer-line-machines' || pathname.startsWith('/en/beer-line-machines') || pathname.startsWith('/ar/beer-line-machines') ||
    pathname === '/wine-mead' || pathname.startsWith('/en/wine-mead') || pathname.startsWith('/ar/wine-mead') ||
    pathname === '/services' || pathname.startsWith('/en/services') || pathname.startsWith('/ar/services') || pathname.startsWith('/de/services')
  ) {
    return intlMiddleware(request);
  }
}

export const config = {
  // Trigger proxy execution for the targeted internationalized paths
  matcher: [
    '/can', '/en/can', '/ar/can',
    '/pet', '/en/pet', '/ar/pet',
    '/glass', '/en/glass', '/ar/glass',
    '/pouch', '/en/pouch', '/ar/pouch',
    '/brick-carton', '/en/brick-carton', '/ar/brick-carton',
    '/gable-top-carton', '/en/gable-top-carton', '/ar/gable-top-carton',
    '/aseptic-drum', '/en/aseptic-drum', '/ar/aseptic-drum',
    '/automatic', '/en/automatic', '/ar/automatic',
    '/semi-automatic', '/en/semi-automatic', '/ar/semi-automatic',
    '/mineral-water-line-machines', '/en/mineral-water-line-machines', '/ar/mineral-water-line-machines',
    '/soft-drinks', '/en/soft-drinks', '/ar/soft-drinks',
    '/beer-line-machines', '/en/beer-line-machines', '/ar/beer-line-machines',
    '/wine-mead', '/en/wine-mead', '/ar/wine-mead',
    '/services', '/en/services/:path*', '/ar/services/:path*', '/de/services/:path*'
  ]
};
