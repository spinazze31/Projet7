import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/Main_scss/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/header.jsx";
import Footer from "./Layout/footer.jsx";
import Url from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Url />
    </Router>
    <Footer />
    <App />
  </StrictMode>
);
