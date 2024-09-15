import { useParams } from "react-router-dom";
import LogementArray from "../Logements/logements.json";
import Collapse from "./about_content";

function FindLogement() {
  const { id } = useParams();
  const announcement = LogementArray.find((logement) => logement.id === id);
  console.log(announcement.cover);

  return (
    <>
      <div className="carousel_container">
        <img src={announcement.cover}></img>;
      </div>
      <div className="">
        <div className="">
          <h2 className="announcement_title">{announcement.title}</h2>
          <p className="">{announcement.location} </p>
        </div>
        <div className="">{announcement.host.name} </div>
      </div>
      <div className="">
        {announcement.tags[0]} {announcement.tags[1]} {announcement.tags[2]}
      </div>
      <Collapse title="Description" text={announcement.description} />
      <Collapse title="Equipements" text={announcement.equipments} />
    </>
  );
}

export default FindLogement;
