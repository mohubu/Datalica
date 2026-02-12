export default function AnimatedButton({ children, className = '', variant = 'default', onClick, ...props }) {
  const isOnDark = variant === 'onDark'
  const buttonStyles = isOnDark
    ? 'border-white/50 bg-white/15 hover:bg-white/25 text-white'
    : 'border-white/20 bg-black text-white'
  return (
    <button
      className={`group/button relative flex cursor-pointer items-center gap-2 rounded-lg py-2 pr-4 pl-11 tracking-tight ${buttonStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Animated Icon Grid */}
      <div className="absolute inset-y-0 left-1 z-40 my-auto flex size-8 flex-col items-center justify-center gap-px rounded-[5px] bg-yellow-500 transition-all duration-400 ease-out group-hover/button:left-[calc(100%-2.3rem)] group-hover/button:rotate-180 group-hover/button:transform">
        <div className="flex flex-col gap-px">
          <div className="flex gap-px">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
          </div>
          <div className="flex gap-px">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
          </div>
          <div className="flex gap-px">
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
          </div>
          <div className="flex gap-px">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
          </div>
          <div className="flex gap-px">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full animate-pulse bg-white duration-200 ease-linear"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25"></span>
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className={`absolute -inset-px rounded-lg transition-[clip-path] duration-400 ease-out [clip-path:inset(0_100%_0_0)] group-hover/button:[clip-path:inset(0_0%_0_0)] ${isOnDark ? 'bg-white/30' : 'bg-white/20'}`}></div>
      
      {/* Button text */}
      <span className="inline-block transition-transform duration-400 group-hover/button:-translate-x-8">
        {children}
      </span>
    </button>
  )
}
