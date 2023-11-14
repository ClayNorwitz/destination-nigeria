import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "dn-green": "#48A155",
        "dn-dark-green": "#2C6830",
        "dn-mint": "#55BB7C",
        "dn-orange": "#ff8f00",
        "dn-charcoal": "#251F20",
        "dn-beige": "#F0F0F0",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
export default config;
