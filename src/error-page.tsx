import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1 className="text-primary text-center lg:text-[288px] font-bold text-8xl mt-auto">
        404
      </h1>
      <p className="text-primary text-center lg:text-[36px] text-lg">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link
        to="/"
        className="text-black text-center lg:text-lg text-sm underline mb-auto"
      >
        Retourner sur la page d'accueil
      </Link>
    </>
  );
};
export default ErrorPage;
