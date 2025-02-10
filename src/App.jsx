import React from "react";
import Header from "./components/Header";
import Ball from "./components/Ball";
import Shake from "./components/Shake";
import Footer from "./components/Footer";
import "../index.css";

function App() {
  return (
    <div>
      <Header />
      <Ball />
      <Shake />
      <Footer />
    </div>
  );
}

export default App;
