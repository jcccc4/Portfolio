/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontSize:{
      h1:['2.6rem','3rem'],
      h2:['1.4rem','2.2rem'],
      h3:['1rem','1.4rem'],
      p:['0.9rem','1.5rem'],
      'h1-lg':['3rem','3.4rem'],
      'h2-lg':['1.6rem','2.6rem'],
      'h3-lg':['1.4rem','2rem'],
      'p-lg':['1.2rem','1.8rem'],
     },
     colors:{
      'accent-blue': "#24a0ed"
     }
    },
  },
  plugins: [],
}
