module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // React dosyalarınızı da buraya ekleyin
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.7s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "translateX(0) translateY(0)", // Başlangıçta duruş
          },
          "10%": {
            transform: "translateX(-10px) translateY(10px)", // Eşit hareket
          },
          "20%": {
            transform: "translateX(10px) translateY(-10px)", // Eşit hareket
          },
          "30%": {
            transform: "translateX(-10px) translateY(10px)", // Eşit hareket
          },
          "40%": {
            transform: "translateX(10px) translateY(-10px)", // Eşit hareket
          },
          "50%": {
            transform: "translateX(-10px) translateY(10px)", // Eşit hareket
          },
          "60%": {
            transform: "translateX(10px) translateY(-10px)", // Eşit hareket
          },
          "70%": {
            transform: "translateX(-10px) translateY(10px)", // Eşit hareket
          },
          "80%": {
            transform: "translateX(10px) translateY(-10px)", // Eşit hareket
          },
          "90%": {
            transform: "translateX(-5px) translateY(5px)", // Küçük hareket
          },
          "100%": {
            transform: "translateX(0) translateY(0)", // Geri duruş
          },
        },
      },
    },
  },
  plugins: [],
};
