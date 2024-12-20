import { useParams } from "react-router-dom";
import AppartementDetails from "../components/ui/appartement-details";
import AppartementSwiper from "../components/ui/appartement-swiper";
import data from "../data/data.json";

export interface Appartement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: { name: string; picture: string };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

const Appartement = () => {
  const { id } = useParams();
  const appartement = data.find((a) => a.id === id);

  if (!appartement) {
    return <div>Appartement not found</div>;
  }

  return (
    <>
      <AppartementSwiper
        image={appartement?.pictures}
        alt={appartement?.title}
      />
      <AppartementDetails appartement={appartement} />
    </>
  );
};

export default Appartement;
