import "../Router/router";
import Logements from "../Logements/logements.json";
import "../Main_scss/main.css";
import { Link } from "react-router-dom";

function MapLogement() {
  const cards = Logements.map((logement) => (
    <div className="text_position" key={logement.id}>
      <Link to={logement.id}>
        <img className="card_image" src={logement.cover} id={logement.id}></img>
        <h2 className="card_title"> {logement.title} </h2>
      </Link>
    </div>
  ));
  return (
    <div className="cards_container">
      <div className="card_image_container"> {cards}</div>;
    </div>
  );
}

export default MapLogement;
