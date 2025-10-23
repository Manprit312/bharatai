'use client'
import { lazy, Suspense, useEffect, useState } from "react"

const SmoothCursor = lazy(() => import("@/components/ui/smooth-cursor").then(mod => ({ default: mod.SmoothCursor })))

export default function ClientCursor() {
  const [isMdOrLarger, setIsMdOrLarger] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const isLarge = window.innerWidth >= 1024
      setIsMdOrLarger(isLarge)
      if (isLarge && !shouldRender) {
        const handleFirstMove = () => {
          setShouldRender(true)
          document.removeEventListener('mousemove', handleFirstMove)
        }
        document.addEventListener('mousemove', handleFirstMove, { once: true, passive: true })
      }
    }

    checkScreenSize()
    const resizeHandler = () => requestAnimationFrame(checkScreenSize)
    window.addEventListener('resize', resizeHandler, { passive: true })
    return () => window.removeEventListener('resize', resizeHandler)
  }, [shouldRender])

  if (!isMdOrLarger || !shouldRender) return null

  return (
    <Suspense fallback={null}>
      <SmoothCursor />
    </Suspense>
  )
}
