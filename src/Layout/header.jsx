import { Link } from "react-router-dom";
import "../Main_scss/main.css";
import Logo from "../Images/logo.png";

function Header() {
  return (
    <nav className="header_container">
      <img src={Logo} className="logo" alt="Kasa logo" />

      <div className="header_link">
        <Link className="header_line" to="/">
          Accueil
        </Link>
        <Link to="/About">A propos</Link>
      </div>
    </nav>
  );
}

export default Header;
