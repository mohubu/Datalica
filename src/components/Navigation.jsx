import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import AnimatedButton from './AnimatedButton'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Our Work' },
    { path: '/contact', label: 'Contact' },
  ]
  
  const isActive = (path) => location.pathname === path
  
  return (
    <nav className="absolute inset-x-4 top-4 z-50 flex items-center justify-between px-4 py-4 md:inset-x-10 md:top-10 md:px-10">
      {/* Logo */}
      <Link 
        to="/" 
        className="flex items-center justify-center space-x-2 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100 py-0"
      >
        <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased">
          {/* Blur effect above logo */}
          <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl"></div>
          <div className="relative z-20 text-sm flex items-center justify-center">
            {/* Logo placeholder - replace with actual logo image */}
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">D</span>
            </div>
            {/* Or use an image: <img height="50" width="50" alt="Logo" src="/logo.png" /> */}
          </div>
        </div>
        <div className="hidden flex-col sm:flex">
          <h1 className="font-sans text-black dark:text-white">Datalyica</h1>
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-4 md:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium text-neutral-600 mix-blend-multiply transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 ${
              isActive(link.path) ? 'text-neutral-900 dark:text-neutral-100' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact">
          <AnimatedButton>
            Contact Us
          </AnimatedButton>
        </Link>
      </div>
      
      {/* Mobile menu button */}
      <button
        className="sm:hidden p-2 text-neutral-600 dark:text-neutral-400"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-800 sm:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive(link.path)
                    ? 'text-neutral-900 bg-neutral-100 dark:text-white dark:bg-neutral-800'
                    : 'text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block mt-2">
              <AnimatedButton className="w-full">
                Contact Us
              </AnimatedButton>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
