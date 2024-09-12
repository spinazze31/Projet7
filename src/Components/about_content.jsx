import { useState } from "react";
import "../Main_scss/main.css";

function AboutContent(props) {
  return (
    <>
      <div className="about_container">
        <div className="about_container-title">
          <h2 className="about_title">{props.title}</h2>
          <i class="fa-solid chevron_down">&#xf078;</i>
        </div>
        <p className="about_text">{props.text}</p>
      </div>
    </>
  );
}

export default AboutContent;
