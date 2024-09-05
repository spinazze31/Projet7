function ErrorPage() {
  return (
    <>
      <div className="error_container">
        <p className="error_title">404</p>
        <p className="error_txt">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <a className="error_link" href="http://localhost:5173/">
          Retourner sur la page d'accueil
        </a>
      </div>
    </>
  );
}

export default ErrorPage;
