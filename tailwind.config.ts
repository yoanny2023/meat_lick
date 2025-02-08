import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist:[
    {
      pattern: /^text-/,
      variants:["sm","md","lg","xl","2xl"]
     },
    {
      pattern: /^w-/,
      variants:["sm","md","lg","xl","2xl"]
     },
    {
      pattern: /^max-w-/,
      variants:["sm","md","lg","xl","2xl"]
     },
    {
      pattern: /^opacity-/,
      variants:["sm","md","lg","xl","2xl"]
     },
    {
    pattern: /^grid-rows-/,
    variants:["sm","md","lg","xl","2xl"]
     },
    {
    pattern: /^grid-cols-/,
    variants:["sm","md","lg","xl","2xl"]
     },
    {
      pattern: /^gap-/,
    variants:["sm","md","lg","xl","2xl"]
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maintext:"var(--maintextcolor)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
