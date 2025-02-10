import React from "react";
import ReactDOM from "react-dom/client"; // 'react-dom/client' kullanmalısınız
import App from "./App";

// React 18'de createRoot kullanıyoruz
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
