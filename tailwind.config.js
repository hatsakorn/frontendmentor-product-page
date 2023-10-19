/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Kumbh Sans": ['"Kumbh Sans"'],
    },
    colors: {
      mainOrange: "hsl(26, 100%, 55%)",
      PaleOrange: "hsl(25, 100%, 94%)",
      VeryDarkBlue: "hsl(220, 13%, 13%)",
      DarkGrayishBlue: "hsl(219, 9%, 45%)",
      GrayishBlue: "hsl(220, 14%, 75%)",
      LightGrayishBlue: "hsl(223, 64%, 98%)",
      White: "hsl(0, 0%, 100%)",
      Black: "hsl(0, 0%, 0%, 0.8)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
