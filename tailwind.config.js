/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 8px rgb(0 0 0 / 15%)",
      },

      fontFamily: {
        custom: "var(--font-family)",
      },

      fontWeight: {
        cusweight: "var(--font-weight)",
      },

      colors: {
        current: "var(--text-color)",
      },

      textColor: {
        skin: {
          base: "var(--text-color)",
          base2: "var(--text-color2)",
          base3: "var(--text-color3)",
        },
      },

      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          fill2: "var(--fill-color2)",
          indicator: "var(--fill-color-indicator)",
        },
      },
    },
  },
  plugins: [],
};
