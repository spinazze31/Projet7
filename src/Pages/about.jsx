import Collapse from "../Components/about_content";
import BannerAbout from "../Layout/banner_about";

function About() {
  return (
    <>
      <BannerAbout />;
      <Collapse
        title="Fiabilité"
        text="Les annonces posées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aus logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <Collapse
        title="Respect"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
      />
      <Collapse
        title="Service"
        text="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
      />
      <Collapse
        title="Sécurité"
        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </>
  );
}

export default About;
