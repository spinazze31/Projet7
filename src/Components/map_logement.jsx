import "../Router/router";
import Logements from "../Logements/logements.json";
import "../Main_scss/main.css";

function MapLogement() {
  const cards = Logements.map((logement) => (
    <a key={logement.id} href="">
      <img className="card_image" src={logement.cover} id={logement.id}></img>
      <h2 className="card_title"> {logement.title} </h2>
    </a>
  ));
  return (
    <div className="cards_container">
      <div className="card_image_container"> {cards}</div>;
    </div>
  );
}

export default MapLogement;
