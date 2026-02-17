'use client'

import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

function buildPreviewUrl(url, width, height) {
  const params = new URLSearchParams({
    url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    colorScheme: 'dark',
    'viewport.isMobile': 'true',
    'viewport.deviceScaleFactor': '1',
    'viewport.width': String(width * 3),
    'viewport.height': String(height * 3),
  })
  return `https://api.microlink.io/?${params.toString()}`
}

/**
 * @param {{
 *   children: React.ReactNode
 *   url: string
 *   className?: string
 *   width?: number
 *   height?: number
 *   isStatic?: boolean
 *   imageSrc?: string
 * }}
 */
export function LinkPreview({
  children,
  url,
  className,
  width = 200,
  height = 125,
  isStatic = false,
  imageSrc = '',
}) {
  const src = isStatic ? imageSrc : buildPreviewUrl(url, width, height)
  const [isOpen, setOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const openTimerRef = useRef(null)
  const closeTimerRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  const springConfig = { stiffness: 100, damping: 15 }
  const x = useMotionValue(0)
  const translateX = useSpring(x, springConfig)

  const handleMouseMove = (event) => {
    const targetRect = event.target.getBoundingClientRect()
    const eventOffsetX = event.clientX - targetRect.left
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2
    x.set(offsetFromCenter)
  }

  const scheduleOpen = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    openTimerRef.current = setTimeout(() => setOpen(true), 50)
  }

  const scheduleClose = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    closeTimerRef.current = setTimeout(() => setOpen(false), 100)
  }

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <img src={src} width={width} height={height} alt="hidden" />
        </div>
      ) : null}

      <span
        className="relative inline"
        onMouseEnter={scheduleOpen}
        onMouseLeave={scheduleClose}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          className={cn('text-black dark:text-white', className)}
        >
          {children}
        </a>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: 'spring', stiffness: 260, damping: 20 },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="absolute left-1/2 bottom-full mb-2.5 -translate-x-1/2 shadow-xl rounded-xl z-[100]"
              style={{ x: translateX }}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-40 h-40 p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                style={{ fontSize: 0 }}
              >
                <img
                  src={src}
                  width={width}
                  height={height}
                  className="rounded-lg h-full"
                  alt="Preview"
                />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    </>
  )
}
