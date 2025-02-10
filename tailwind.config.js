module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // React dosyalarınızı da buraya ekleyin
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.2s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%": { transform: "rotate(30deg)" },
          "25%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(-30deg)" },
        },
      },
    },
  },
  plugins: [],
};
