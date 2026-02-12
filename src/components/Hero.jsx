import { Link } from 'react-router-dom'
import AnimatedButton from './AnimatedButton'
import { ArrowRight } from 'lucide-react'

export default function Hero({ 
  title, 
  subtitle, 
  primaryCTA = { text: 'Request a Consultation', link: '/contact' },
  secondaryCTA = { text: 'Learn More', link: '/services' },
  backgroundImage = null 
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="relative w-full">
        {/* Background Image Container */}
        <div className="pointer-events-none absolute inset-4 overflow-hidden md:inset-10" style={{ opacity: 1 }}>
          <img 
            alt="Background" 
            className="h-full w-full hero-mask object-cover object-center"
            src={backgroundImage || "https://assets.aceternity.com/screenshots/13.jpg"} 
          />
        </div>
        
        {/* Border Frame */}
        <div className="pointer-events-none absolute inset-x-0 top-4 h-px w-full bg-neutral-200 md:top-10 dark:bg-neutral-800"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-4 h-px w-full bg-neutral-200 md:bottom-10 dark:bg-neutral-800"></div>
        <div className="pointer-events-none fixed inset-y-0 left-4 h-screen w-px bg-neutral-200 md:left-10 dark:bg-neutral-800 z-0"></div>
        <div className="pointer-events-none fixed inset-y-0 right-4 h-screen w-px bg-neutral-200 md:right-10 dark:bg-neutral-800 z-0"></div>
        
        {/* Content */}
        <div className="relative flex min-h-screen w-full flex-col justify-end p-4 md:p-14">
          <div className="relative z-40 p-4 md:p-4">
            <h1 className="max-w-3xl text-3xl font-medium tracking-tight text-neutral-800 sm:text-4xl md:text-6xl lg:text-8xl dark:text-neutral-200">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-base text-neutral-600 md:mt-6 md:text-lg dark:text-neutral-400">
              {subtitle}
            </p>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-10">
              <Link to={primaryCTA.link}>
                <AnimatedButton>
                  {primaryCTA.text}
                </AnimatedButton>
              </Link>
              {secondaryCTA && (
                <Link 
                  to={secondaryCTA.link} 
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1"
                >
                  {secondaryCTA.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
