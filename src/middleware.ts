import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { CheckExpiredToken } from '@/utils/jwt'

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

      if (pathname.startsWith('/admin')) {
        const token = request.cookies.get('admin-token')?.value
 
       if (!token || (await CheckExpiredToken(token))) {

            const response = NextResponse.redirect(new URL('/auth', request.url))
            if (token) response.cookies.delete('admin-token')
            return response
        }
    }

    if (pathname.startsWith('/api/admin/contacts')) {
        const token = request.headers.get('authorization')?.replace('Bearer ', '') ||
            request.cookies.get('admin-token')?.value

     if (!token || (await CheckExpiredToken(token))) {

            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/contacts/:path*']
}
