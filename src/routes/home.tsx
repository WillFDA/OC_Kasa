import Cards from "../components/cards";
import HeroBanner from "../components/ui/hero-banner";

const Home = () => {
  return (
    <>
      <HeroBanner
        image="src/assets/hero-home-image.png"
        text="Chez vous, partout et ailleurs"
      />
      <Cards />
    </>
  );
};
export default Home;
