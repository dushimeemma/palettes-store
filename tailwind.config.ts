import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
        secondary: "#666666",
        dark: "#333333",
        danger: "#EB5758",
        success: "#2EC1AC",
        info: "#FAF3EA",
        warning: "#816DFA",
      },
    },
  },
  plugins: [],
} satisfies Config;
