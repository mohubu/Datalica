export default function Card({ children, className = '', hover = true }) {
  const hoverClass = hover ? 'hover:border-slate-300' : ''
  
  return (
    <div className={`border border-slate-200 rounded-lg p-6 transition ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
