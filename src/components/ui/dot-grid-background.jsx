'use client'

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

/**
 * Dot grid background inspired by Aceternity dot-distortion shader.
 * Renders a responsive grid of dots on canvas (no WebGL). Use as full-bleed background behind section content.
 */
export function DotGridBackground({
  className,
  gap = 28,
  dotRadius = 1.2,
  dotColorLight = 'rgba(0, 0, 0, 0.08)',
  dotColorDark = 'rgba(255, 255, 255, 0.12)',
  dark = false,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      draw(ctx, rect.width, rect.height, gap, dotRadius, dark ? dotColorDark : dotColorLight)
    }

    const draw = (context, w, h, g, r, color) => {
      context.clearRect(0, 0, w, h)
      const cols = Math.ceil(w / g) + 1
      const rows = Math.ceil(h / g) + 1
      const offsetX = (w - (cols - 1) * g) / 2
      const offsetY = (h - (rows - 1) * g) / 2
      context.fillStyle = color
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * g
          const y = offsetY + j * g
          context.beginPath()
          context.arc(x, y, r, 0, Math.PI * 2)
          context.fill()
        }
      }
    }

    setSize()
    const resizeObserver = new ResizeObserver(setSize)
    resizeObserver.observe(canvas)
    return () => resizeObserver.disconnect()
  }, [gap, dotRadius, dotColorLight, dotColorDark, dark])

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden bg-white dark:bg-black', className)}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
