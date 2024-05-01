/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Accent: "#7CC5AF",
        Primary: "#DBDBD0",
        TextVariant: "#C6C6B5",
        Text: "#E2E2D9",
        Background: "#121212",
      },
      animation: {
        "text-slide-2":
          "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
    },
    keyframes: {
      "text-slide-2": {
        "0%, 40%": {
          transform: "translateY(0%)",
        },
        "50%, 90%": {
          transform: "translateY(-33.33%)",
        },
        "100%": {
          transform: "translateY(-66.66%)",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: ["prettier-plugin-tailwindcss", "tailwindcss-animated"],
};
