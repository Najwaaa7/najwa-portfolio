/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode palette (Qiddiya-inspired soft purples)
        brand: {
          DEFAULT: '#6C2BD9', // primary purple
          vibrant: '#8B3DFF',
          soft: '#C9A7FF', // soft lavender
          pale: '#F0E7FF', // pale lavender
          bg: '#F8F4FF', // light purple background
          pink: '#EFDFFF', // soft pink-purple
        },
        ink: '#1F1D2B', // dark text
        muted: '#6E687A', // secondary text
        cloud: '#F5F5F7', // soft grey
        // Dark mode palette
        night: {
          DEFAULT: '#171225', // main background
          soft: '#211831', // secondary background
          card: '#2B2040', // card background
        },
        frost: {
          DEFAULT: '#F8F5FF', // primary text (dark mode)
          soft: '#CFC5DB', // secondary text (dark mode)
        },
        accent: {
          DEFAULT: '#A855F7', // accent purple (dark mode)
          soft: '#C084FC', // accent lavender (dark mode)
        },
      },
      fontFamily: {
        display: ['Manrope', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #6C2BD9 0%, #A855F7 100%)',
        'grad-vibrant': 'linear-gradient(135deg, #8B3DFF 0%, #C084FC 100%)',
        'grad-pale': 'linear-gradient(180deg, #F4ECFF 0%, #FFFFFF 100%)',
        'grad-lavender': 'linear-gradient(160deg, #E9D8FF 0%, #F8F4FF 100%)',
        'grad-night': 'linear-gradient(160deg, #2B2040 0%, #211831 100%)',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(108, 43, 217, 0.08)',
        lift: '0 16px 45px rgba(108, 43, 217, 0.16)',
        'soft-dark': '0 8px 30px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(12px, -18px) scale(1.05)' },
        },
        'scroll-hint': {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
