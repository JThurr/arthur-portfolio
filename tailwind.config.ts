import type {Config} from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#6366F1",
        "accent-light": "#818CF8",
        "accent-dark": "#4F46E5",
        "accent-cyan": "#22D3EE",
        "accent-green": "#28B57D"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 55px rgba(99, 102, 241, 0.22)"
      },
      keyframes: {
        float: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-10px)"}
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
