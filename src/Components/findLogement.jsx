import { useParams } from "react-router-dom";
import logementArray from "../Logements/logements.json";
import Collapse from "./collapse";
import Carousel from "./carousel";
import Tags from "./tags";
import Stars from "./stars";
import ErrorPage from "../Pages/errorpage";

function FindLogement() {
  const { id } = useParams();
  const announcement = logementArray.find((logement) => logement.id === id);

  return !announcement ? (
    <ErrorPage />
  ) : (
    <>
      <Carousel pictures={announcement.pictures} />

      <div className="announcement_container">
        <div className="description_container">
          <h2 className="announcement_title">{announcement.title}</h2>
          <p className="announcement_location">{announcement.location} </p>

          <Tags text={announcement.tags} />
        </div>
        <div className="stars_name-container">
          <div className="profile">
            <h3 className="announcement_name">{announcement.host.name}</h3>
            <img
              src={announcement.host.picture}
              className="announcement_profile"
            ></img>
          </div>
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
