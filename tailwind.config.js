/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            blue: '#1A5F7A',    // Deep Trust Blue
            green: '#159895',   // Compassion Green
            light: '#F0F9FF',   // Background Soft Blue
            accent: '#FF9551',  // Action Orange (for Donate button)
          },
          charity: {
            text: '#2C3333',    // Professional Dark Grey
            muted: '#526D82',   // Muted Slate
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
