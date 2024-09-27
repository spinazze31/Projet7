import { useState } from "react";
import "../Main_scss/main.css";

function Collapse(props) {
  const [isOpen, openContainer] = useState(true);
  const equipementAnnoucement = props.text;
  if (typeof "equipementAnnouncement" != "string") {
    const equipements = equipementAnnoucement.map((equipement) => (
      <li key={equipement}>{equipement}</li>
    ));
    return isOpen ? (
      <>
        <div className="about_container">
          <div className="about_container-title">
            <h2 className="about_title">{props.title}</h2>
            <i
              className="fa-solid chevron_down"
              onClick={() => openContainer(false)}
            >
              &#xf078;
            </i>
          </div>
          <ul className="about_text">{equipements}</ul>
        </div>
      </>
    ) : (
      <div className="about_container">
        <div className="about_container-title">
          <h2 className="about_title">{props.title}</h2>
          <i
            className="fa-solid chevron_up"
            onClick={() => openContainer(true)}
          >
            &#xf077;
          </i>
        </div>
      </div>
    );
  }

  return isOpen ? (
    <div className="about_container">
      <div className="about_container-title">
        <h2 className="about_title">{props.title}</h2>
        <i
          className="fa-solid chevron_down"
          onClick={() => openContainer(false)}
        >
          &#xf078;
        </i>
      </div>
      <p className="about_text">{props.text}</p>
    </div>
  ) : (
    <div className="about_container">
      <div className="about_container-title">
        <h2 className="about_title">{props.title}</h2>
        <i className="fa-solid chevron_up" onClick={() => openContainer(true)}>
          &#xf077;
        </i>
      </div>
    </div>
  );
}

export default Collapse;
