"use client"
import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function SmartProChatButton() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nextbotBtnRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let found = false

    const tryFind = () => {
      if (found) return
      // Collect all fixed-position elements in the bottom-right quadrant
      const all = Array.from(document.querySelectorAll<HTMLElement>('*'))
      for (const el of all) {
        const cs = window.getComputedStyle(el)
        if (cs.position !== 'fixed') continue
        const rect = el.getBoundingClientRect()
        // Bottom-right quadrant, small element (widget button ~40-80px)
        if (
          rect.right > window.innerWidth * 0.5 &&
          rect.bottom > window.innerHeight * 0.5 &&
          rect.width > 20 && rect.width < 200 &&
          rect.height > 20 && rect.height < 200
        ) {
          // Skip our own button
          if (containerRef.current && (containerRef.current === el || containerRef.current.contains(el))) continue
          nextbotBtnRef.current = el
          el.style.opacity = '0'
          el.style.pointerEvents = 'none'
          found = true
          break
        }
      }
    }

    const observer = new MutationObserver(() => tryFind())
    observer.observe(document.body, { childList: true, subtree: true })

    // Also try on interval in case widget loads after mutations settle
    const interval = setInterval(() => {
      if (found) { clearInterval(interval); return }
      tryFind()
    }, 500)
    setTimeout(() => clearInterval(interval), 10000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  const handleClick = useCallback(() => {
    const btn = nextbotBtnRef.current
    if (btn) {
      btn.style.pointerEvents = 'auto'
      btn.click()
      setTimeout(() => {
        if (nextbotBtnRef.current) nextbotBtnRef.current.style.pointerEvents = 'none'
      }, 300)
    }
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
