import { useParams } from "react-router-dom";
import LogementArray from "../Logements/logements.json";
import Collapse from "./collapse";
import Carousel from "./carousel";
import Tags from "./tags";
import Stars from "./stars";

function FindLogement() {
  const { id } = useParams();
  const announcement = LogementArray.find((logement) => logement.id === id);

  return (
    <>
      <Carousel pictures={announcement.pictures} />

      <div className="announcement_container">
        <div className="description_container">
          <h2 className="announcement_title">{announcement.title}</h2>
          <p className="announcement_location">{announcement.location} </p>

          <Tags text={announcement.tags} />
        </div>
        <div className="stars_name-container">
          <h3 className="announcement_name">
            {announcement.host.name}
            <i className="fa-solid circle">&#xf111;</i>
          </h3>
          <Stars rating={announcement.rating} />
        </div>
      </div>
      <div className="announcement_equipements">
        <Collapse title="Description" text={announcement.description} />
        <Collapse title="Equipements" text={announcement.equipments} />
      </div>
    </>
  );
}

export default FindLogement;
