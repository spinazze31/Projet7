import "../Main_scss/main.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faChevronUp } from "@awesome.me/kit-KIT_CODE/icons/classic/regular"; <FontAwesomeIcon icon={faChevronUp} />

function AboutContent(props) {
  return (
    <>
      <div className="about_container">
        <div className="about_container-title">
          <h2 className="about_title">{props.title}</h2>
        </div>
        <p className="about_text">{props.text}</p>
      </div>
    </>
  );
}

export default AboutContent;
