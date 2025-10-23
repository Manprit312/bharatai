'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('admin-token')

        if (!token) {
            router.push('/auth')
            return
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            const isExpired = payload.exp * 1000 < Date.now()

            if (isExpired) {
                localStorage.removeItem('admin-token')
                document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                router.push('/auth')
                return
            }

            setIsAuthenticated(true)
        } catch {
            localStorage.removeItem('admin-token')
            router.push('/auth')
        } finally {
            setIsLoading(false)
        }
    }, [router])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return null
    }

    return <>{children}</>
}
