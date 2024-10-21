import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl px-5 mx-auto">
      <Logo />
      <nav>
        <ul className="text-xs lg:text-2xl font-medium text-black">
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
