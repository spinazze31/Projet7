import ImageFont from "../Images/image_font_ecran.jpg";
import "../Main_scss/main.css";

function Banner() {
  return (
    <>
      <div className="banner_container">
        <img
          src={ImageFont}
          className="banner_img"
          alt="Image de bord de mer"
        ></img>
      </div>
      <p className="banner_txt">Chez vous, partout et ailleurs</p>
    </>
  );
}

export default Banner;
