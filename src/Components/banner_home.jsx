import ImageFont from "../Images/image_font_ecran.jpg";

function Banner() {
  return (
    <>
      <div className="banner_container">
        <img src={ImageFont} alt="Image de bord de mer"></img>
        <p className="banner_txt">Chez vous, partout et ailleurs</p>
      </div>
    </>
  );
}

export default Banner;
