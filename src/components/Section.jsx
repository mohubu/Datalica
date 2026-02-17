export default function Section({ 
  children, 
  background = 'white', 
  border = false, 
  padding = 'default',
  className = '',
  innerClassName = ''
}) {
  const backgrounds = {
    white: 'bg-white',
    slate: 'bg-[#fdfdfd]',
    none: ''
  }
  
  const paddings = {
    default: 'py-16 md:py-24',
    small: 'py-12 md:py-16',
    large: 'py-20 md:py-32',
    none: ''
  }
  
  const borderClass = border ? 'border-t border-slate-200' : ''
  
  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${borderClass} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`.trim()}>
        {children}
      </div>
    </section>
  )
}
