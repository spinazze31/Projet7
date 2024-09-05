import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/Main_scss/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/home.jsx";
import Apropos from "./Pages/apropos.jsx";
import Header from "./Layout/header.jsx";
import ErrorPage from "./Pages/errorpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    <App />
  </StrictMode>
);
