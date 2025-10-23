import React from 'react'
import AuthWrapper from '@/context/Auth'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthWrapper>
            {children}
        </AuthWrapper>
    )
}

export default layout
