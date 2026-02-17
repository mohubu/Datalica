'use client'

import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview'

/**
 * Section content: Business Intelligence, Power BI, and Excel with link previews.
 * Hover over the bold links to see preview modals of the linked pages.
 */
export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center min-h-[32rem] flex-col px-4 py-12">
      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-[32px] md:leading-[32px] max-w-3xl mx-auto mb-8 text-center">
        We help you turn operational data into clear insights using{' '}
        <LinkPreview
          url="https://www.atptech.com/business-solutions/power-bi/?lang=en"
          isStatic
          imageSrc="https://www.atptech.com/wp-content/uploads/photo_powerbi.jpg"
          className="font-bold text-yellow-600 dark:text-yellow-400 hover:underline"
        >
          Power BI
        </LinkPreview>{' '}
        and{' '}
        <LinkPreview
          url="https://en.wikipedia.org/wiki/Microsoft_Excel"
          isStatic
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/1280px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png"
          className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          Excel
        </LinkPreview>{' '}
        — so your team can spot trends, track KPIs, and make data-driven decisions.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-[28px] max-w-3xl mx-auto text-center">
        From dashboards to{' '}
        <LinkPreview url="https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
          Business Intelligence
        </LinkPreview>{' '}
        best practices, we design solutions that fit how you work and scale with your business.
      </p>
    </div>
  )
}
