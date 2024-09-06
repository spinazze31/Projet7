import "../Main_scss/main.css";
import Logements from "../Logements/logements.json";
import CardsTitle from "../Components/cards_title";
console.log(Logements);

function Cards() {
  return (
    <>
      <div className="cards_container">
        <div className="card_image_container">
          {Logements.map((image) => (
            <img className="card_image" key={image.id} src={image.cover} />
          ))}
          <CardsTitle />
        </div>
      </div>
    </>
  );
}

export default Cards;
