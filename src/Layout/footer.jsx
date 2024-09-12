import "../Main_scss/main.css";
import FooterLogo from "../Images/footer_logo.png";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <img className="footer_logo" src={FooterLogo} alt="footer logo"></img>
        <div className="footer_container-txt">
          <i class="fa-regular footer_copyright"> &#xf1f9;</i>
          <p className="footer_txt">2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
