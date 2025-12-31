import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monbaiti: ["monbaiti", "sans-serif" ],
      },
    },
  },
  plugins: [],
} satisfies Config;
