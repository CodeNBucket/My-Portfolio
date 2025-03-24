export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1e1b3a',  
        'light-bg': '#F3E0D1',     
        'text-dark': '#E0E0FF',    
        'text-light': '#333333',   
      },
    },
  },
  plugins: [],
};
