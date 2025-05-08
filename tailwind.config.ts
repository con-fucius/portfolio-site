import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Or 'media', depending on theme toggle strategy
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-gabarito)", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#0A192F", // Dark Navy Blue
          accent: "#64FFDA",  // Green Accent
        },
        // Example: for text, backgrounds etc.
        dark: {
          DEFAULT: "#0A192F",
          text: "#E2E8F0", // Example: light gray for text on dark bg
        },
        light: {
          DEFAULT: "#FFFFFF", // Example white
          text: "#1A202C",    // Example: dark gray for text on light bg
        }
      },
      // Keep existing backgroundImage or other extensions if needed
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Add typography styles here if needed for further customization beyond prose classes
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Add typography plugin
  ],
};
export default config; 