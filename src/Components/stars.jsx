function Stars(props) {
  const stars = props.rating;
  const range = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="stars_container">
        {range.map((star) =>
          stars >= star ? (
            <i key={star} className="fa-solid red_stars">
              &#xf005;
            </i>
          ) : (
            <i className="fa-solid star">&#xf005;</i>
          )
        )}
      </div>
    </>
  );
}

export default Stars;
