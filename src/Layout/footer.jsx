import "../Main_scss/main.css";
import FooterLogo from "../Images/footer_logo.png";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; <FontAwesomeIcon icon={far.faCopyright}
//import { far } from "@awesome.me/kit-KIT_CODE/icons";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <img className="footer_logo" src={FooterLogo} alt="footer logo"></img>
        <p className="footer_txt">2020 Kasa. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
