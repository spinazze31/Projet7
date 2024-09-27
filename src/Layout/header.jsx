import { Link } from "react-router-dom";
import "../Main_scss/main.css";
import Logo from "../Images/logo.png";
import Line from "../Components/line";

function Header() {
  return (
    <nav className="header_container">
      <img src={Logo} className="logo" alt="Kasa logo" />

      <div className="header_link">
        <Link className="" to="/">
          Accueil
          <Line />
        </Link>

        <Link to="/A propos">A propos</Link>
      </div>
    </nav>
  );
}

export default Header;
