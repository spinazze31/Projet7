import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home.jsx";
import About from "../Pages/about.jsx";
import ErrorPage from "../Pages/errorpage.jsx";
import Announcement from "../Pages/Announcement.jsx";

function Url() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Announcement />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Url;
