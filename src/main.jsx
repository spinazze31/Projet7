import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/accueil.jsx";
import Apropos from "./Pages/apropos.jsx";
import Header from "./Components/Header/header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </Router>
    <App />
  </StrictMode>
);
