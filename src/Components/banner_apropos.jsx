import ImageFontApropos from "../Images/image_font_apropos.jpg";

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