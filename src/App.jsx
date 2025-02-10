import React, { useState } from "react";

import "../index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Usage from "./components/Usage";

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
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage handleClick={handleClick} isShaking={isShaking} />
            }
          />
          <Route path="/usage" element={<Usage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
