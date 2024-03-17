import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-bg": "url(/main-bg.jpg)",
        "main-bg-mobile": "url(/main-bg-mobile.jpg)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        montserrat: "var(--font-montserrat)",
        kanit: "var(--font-kanit)",
      },
      colors: {
        link: "#55e9bc",
        "primary-text": "#000000",
        "secondary-text": "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
