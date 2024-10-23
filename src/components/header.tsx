import Logo from "./logo";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl px-5 mx-auto mt-5 lg:mt-11">
      <Link to={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul className="text-xs lg:text-2xl font-medium text-black flex items-center lg:gap-14">
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/about"}>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
