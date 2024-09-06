import "../Main_scss/main.css";
import Logements from "../Logements/logements.json";

function CardsTitle() {
  return (
    <>
      <div>
        {Logements.map((Logement) => (
          <h2 className="card_title" key={Logement.id}>
            {Logement.title}
          </h2>
        ))}
        ;
      </div>
    </>
  );
}

export default CardsTitle;
