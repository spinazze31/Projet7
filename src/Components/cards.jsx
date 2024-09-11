import "../Main_scss/main.css";
import Logements from "../Logements/logements.json";
import MapLogement from "./map_logement";
console.log(Logements);

function Cards() {
  return (
    <>
      <MapLogement />
    </>
  );
}

export default Cards;
