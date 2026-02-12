'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  variant = 'light', // 'light' | 'dark' – use 'dark' when section has dark background
}) {
  const containerRef = React.useRef(null)
  const scrollerRef = React.useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })
      if (containerRef.current) {
        if (direction === 'left') {
          containerRef.current.style.setProperty('--animation-direction', 'forwards')
        } else {
          containerRef.current.style.setProperty('--animation-direction', 'reverse')
        }
        if (speed === 'fast') {
          containerRef.current.style.setProperty('--animation-duration', '20s')
        } else if (speed === 'normal') {
          containerRef.current.style.setProperty('--animation-duration', '40s')
        } else {
          containerRef.current.style.setProperty('--animation-duration', '80s')
        }
      }
      setStart(true)
    }
  }, [direction, speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, index) => (
          <li
            className={cn(
              'relative w-[350px] max-w-full shrink-0 rounded border border-b-0 px-6 py-5 md:w-[400px]',
              variant === 'dark'
                ? 'border-slate-600 bg-slate-800/80 dark:border-slate-600 dark:bg-slate-800/80'
                : 'border-slate-200 bg-white dark:border-zinc-700 dark:bg-white dark:bg-opacity-10',
            )}
            key={item.quote?.slice(0, 30) || index}
          >
            <blockquote>
              {item.icon && (
                <div className="relative z-20 mb-3 flex items-center justify-start">
                  {React.createElement(item.icon, {
                    className: cn(
                      'h-6 w-6',
                      variant === 'dark' ? 'text-slate-300' : 'text-slate-600 dark:text-gray-400',
                    )}
                  )}
                </div>
              )}
              <span
                className={cn(
                  'relative z-20 text-[18px] leading-[1.6] font-normal',
                  variant === 'dark' ? 'text-slate-100' : 'text-slate-800 dark:text-gray-100',
                )}
              >
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
