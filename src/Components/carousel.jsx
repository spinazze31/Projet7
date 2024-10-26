import { useState } from "react";

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index === pictures.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const prevImage = () => {
    if (index === 0) setIndex(pictures.length - 1);
    else setIndex(index - 1);
  };

  return (
    <>
      <div className="carousel_container">
        <img className="carousel_images" src={pictures[index]} />
        {pictures.length > 1 ? (
          <>
            <i onClick={nextImage} className="fa-solid chevron-right">
              &#xf054;
            </i>
            ,
            <i onClick={prevImage} className="fa-sharp fa-solid chevron-left">
              &#xf053;
            </i>
          </>
        ) : null}
        {pictures.length > 1 ? (
          <p className="carousel_pagination">
            {index + 1}/{pictures.length}
          </p>
        ) : null}
      </div>
    </>
  );
}

export default Carousel;
