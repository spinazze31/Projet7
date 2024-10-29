import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="error_container">
        <p className="error_title">404</p>
        <p className="error_txt">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error_link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
