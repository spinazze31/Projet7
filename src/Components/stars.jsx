function Stars({ rating }) {
  const stars = rating;
  const range = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="stars_container">
        {range.map((star, index) => (
          <i
            key={index}
            className={stars >= star ? "fa-solid red_stars" : "fa-solid star"}
          >
            &#xf005;
          </i>
        ))}
      </div>
    </>
  );
}

export default Stars;
