import { useState } from "react";
import "../Main_scss/main.css";

function Collapse({ text, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const equipementAnnouncement = text;

  const equipements =
    typeof equipementAnnouncement === "object" ? (
      <ul className="about_text">
        {equipementAnnouncement.map((equipement) => (
          <li key={equipement}>{equipement}</li>
        ))}
      </ul>
    ) : (
      <p className="about_text">{text}</p>
    );

  return (
    <div className="about_container">
      <div className="about_container-title">
        <h2 className="about_title">{title}</h2>
        {isOpen ? (
          <i
            className={"fa-solid chevron_down"}
            onClick={() => setIsOpen(false)}
          >
            &#xf078;
          </i>
        ) : (
          <i className="fa-solid chevron_up" onClick={() => setIsOpen(true)}>
            &#xf077;
          </i>
        )}
      </div>
      {isOpen && equipements}
    </div>
  );
}

export default Collapse;
