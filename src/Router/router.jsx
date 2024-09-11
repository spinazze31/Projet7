import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home.jsx";
import About from "../Pages/about.jsx";
import ErrorPage from "../Pages/errorpage.jsx";

function Url() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Url;
