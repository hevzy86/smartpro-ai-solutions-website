"use client"
import { useRef, useCallback } from 'react'
import Image from 'next/image'

export default function SmartProChatButton() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    container.style.display = 'none'

    requestAnimationFrame(() => {
      // nextbot button is at bottom:30px right:30px, ~56px diameter → center ~58px from edge
      const points: [number, number][] = [
        [window.innerWidth - 58, window.innerHeight - 58],
        [window.innerWidth - 45, window.innerHeight - 45],
        [window.innerWidth - 70, window.innerHeight - 70],
        [window.innerWidth - 35, window.innerHeight - 35],
      ]

      for (const [x, y] of points) {
        const el = document.elementFromPoint(x, y) as HTMLElement | null
        if (!el || el === document.body || el === document.documentElement) continue

        let target: HTMLElement | null = el
        while (target && target !== document.body) {
          const tag = target.tagName.toLowerCase()
          const role = target.getAttribute('role')
          const cs = window.getComputedStyle(target)
          if (tag === 'button' || role === 'button' || cs.cursor === 'pointer') {
            target.click()
            break
          }
          target = target.parentElement
        }
        break
      }

      setTimeout(() => {
        if (container) container.style.display = ''
      }, 250)
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed bottom-[30px] right-[30px] z-[9999998] cursor-pointer group"
      onClick={handleClick}
      role="button"
      aria-label="Open chat"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-purple-500/40 animate-ping" />
      <span
        className="absolute inset-0 scale-125 rounded-full bg-purple-400/20 animate-ping"
        style={{ animationDelay: '0.6s' }}
      />

      {/* Logo */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-[0_0_22px_rgba(147,51,234,0.65)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_34px_rgba(147,51,234,0.9)]">
        <Image
          src="/icons/NewSmartProAiSolutions.png"
          alt="SmartPro AI"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 pointer-events-none whitespace-nowrap bg-gray-950/95 border border-purple-500/30 text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        💬 Click to chat
      </div>
    </div>
  )
}
