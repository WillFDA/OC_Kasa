import Logo from "./logo";
import { NavLink } from "react-router-dom";
const Header = () => {
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "underline underline-offset-2" : "";
  return (
    <header className="flex items-center justify-between max-w-7xl px-5 mx-auto mt-5 lg:mt-11">
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <nav>
        <ul className="text-xs lg:text-2xl font-medium text-black flex items-center lg:gap-14">
          <li>
            <NavLink className={active} to={"/"}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className={active} to={"/about"}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
