/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          1000: '#0a0e1a',
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spotlight': 'spotlight 2s ease-out 0.75s 1 forwards',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.mask-t-from-20%': {
          'mask-image': 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 20%, black 100%)',
          '-webkit-mask-image': 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 20%, black 100%)',
        },
        '.mask-b-from-50%': {
          'mask-image': 'linear-gradient(to bottom, black 0%, black 50%, transparent 50%, transparent 100%)',
          '-webkit-mask-image': 'linear-gradient(to bottom, black 0%, black 50%, transparent 50%, transparent 100%)',
        },
        '.mask-l-from-50%': {
          'mask-image': 'linear-gradient(to right, transparent 0%, transparent 50%, black 50%, black 100%)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent 0%, transparent 50%, black 50%, black 100%)',
        },
        '.mask-r-from-50%': {
          'mask-image': 'linear-gradient(to left, transparent 0%, transparent 50%, black 50%, black 100%)',
          '-webkit-mask-image': 'linear-gradient(to left, transparent 0%, transparent 50%, black 50%, black 100%)',
        },
        '.mask-radial-from-50%': {
          'mask-image': 'radial-gradient(circle, black 50%, transparent 50%)',
          '-webkit-mask-image': 'radial-gradient(circle, black 50%, transparent 50%)',
        },
        '.mask-radial-to-70%': {
          'mask-image': 'radial-gradient(circle, black 0%, black 70%, transparent 70%)',
          '-webkit-mask-image': 'radial-gradient(circle, black 0%, black 70%, transparent 70%)',
        },
        '.mask-radial-at-center': {
          'mask-position': 'center',
          '-webkit-mask-position': 'center',
        },
        '.perspective-distant': {
          'perspective': '1000px',
        },
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-x-30': {
          'transform': 'rotateX(30deg)',
        },
        '.rotate-y-20': {
          'transform': 'rotateY(20deg)',
        },
        '.rotate-z-15': {
          'transform': 'rotateZ(15deg)',
        },
      })
    },
  ],
}
