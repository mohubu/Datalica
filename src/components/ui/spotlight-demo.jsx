import React from 'react'
import { cn } from '@/lib/utils'
import { Spotlight } from '@/components/ui/spotlight'

/**
 * Demo preview for the Spotlight effect – navy blue variant.
 * Use as reference or drop into a page to showcase the effect.
 */
export default function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-[#0f172a] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 select-none [background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]'
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#3b82f6"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-slate-400">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  )
}
