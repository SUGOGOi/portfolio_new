/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ff9d",
        secondary: "#0af",
        accent: "#ff00ff",
        dark: {
          DEFAULT: "#080b12",
          darker: "#050709",
          card: "rgba(13, 17, 23, 0.7)",
        },
      },
      backgroundImage: {
        "tech-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L17.515 10.485 18.93 11.9l7.9-7.9h-2.83zM3.515 0L0 3.515 1.414 4.93 4.93 1.414 3.515 0zm0 0L0 3.515 1.414 4.93 4.93 1.414 3.515 0zm0 0L0 3.515 1.414 4.93 4.93 1.414 3.515 0zm0 0L0 3.515 1.414 4.93 4.93 1.414 3.515 0zm0 0L0 3.515 1.414 4.93 4.93 1.414 3.515 0zm0 0L0 3.515 1.414 4.93 4.93 1.414 3.515 0zM56.485 0L60 3.515 58.586 4.93 55.07 1.414 56.485 0zm0 0L60 3.515 58.586 4.93 55.07 1.414 56.485 0zm0 0L60 3.515 58.586 4.93 55.07 1.414 56.485 0zm0 0L60 3.515 58.586 4.93 55.07 1.414 56.485 0zm0 0L60 3.515 58.586 4.93 55.07 1.414 56.485 0zm0 0L60 3.515 58.586 4.93 55.07 1.414 56.485 0z' fill='%2300ff9d' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      animation: {
        glow: "glow 1.5s infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 16px 8px rgba(59, 130, 246, 0.8)" }, // Wider blue glow
          "50%": { boxShadow: "0 0 24px 12px rgba(59, 130, 246, 1)" }, // Larger glow at 50%
        },
      },
    },
  },
  plugins: [],
};
