/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Expanded Neobrutalist Palette
        primary: "#FFE600",    // Yellow
        secondary: "#FF90E8",  // Pink
        accent: "#3B82F6",     // Blue
        success: "#00FF66",    // Mint/Green
        warning: "#FF5C00",    // Orange
        danger: "#FF0000",     // Red
        purple: "#B233FF",
        background: "#FFFFFF",
        surface: "#F8F8F8",
        black: "#000000",
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-md': '6px 6px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '10px 10px 0px 0px rgba(0,0,0,1)',
        'neo-xl': '16px 16px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-inset': 'inset 4px 4px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '10': '10px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-hard': 'bounce 0.5s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        }
      }
    },
  },
  plugins: [],
}
