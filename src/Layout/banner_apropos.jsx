import ImageFontApropos from "../Images/image_font_apropos.jpg";
import "../Main_scss/main.css";

function BannerApropos() {
  return (
    <>
      <div className="banner_container">
        <img
          src={ImageFontApropos}
          className="banner_img"
          alt="Image de bord de mer"
        ></img>
      </div>
    </>
  );
}

export default BannerApropos;
