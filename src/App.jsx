import React, { useState } from "react";
import Header from "./components/Header";
import Ball from "./components/Ball";
import Shake from "./components/Shake";
import Footer from "./components/Footer";
import "../index.css";

function App() {
  const [isShaking, setIsShaking] = useState(false);
  const handleClick = () => {
    // Animasyonu başlat
    setIsShaking(true);
    // Animasyon tamamlandıktan sonra durdur
    setTimeout(() => setIsShaking(false), 1500); // animasyon süresi 500ms
  };

  return (
    <div>
      <Header />
      <Ball handleClick={handleClick} isShaking={isShaking} />
      <Shake handleClick={handleClick} isShaking={isShaking} />
      <Footer />
    </div>
  );
}

export default App;
