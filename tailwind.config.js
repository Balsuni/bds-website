/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      darkblue: {
        50: "#EDF2FF",
        100: "#B1B8C8",
        200: "#8B95AD",
        300: "#647191",
        400: "#3D4E76",
        500: "#162A5A",
        600: "#12234B",
        700: "#0F1C3C",
        800: "#0B152D",
        900: "#091124",
      },
    },
  },
  plugins: [],
};
