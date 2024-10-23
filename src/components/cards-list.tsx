import { Link } from "react-router-dom";
import data from "../data/data.json";

const CardList = () => {
  return (
    <section className="lg:bg-gray-100 lg:px-12 lg:py-14 grid grid-cols-1 lg:grid-cols-3 gap-x-[60px] lg:gap-y-[50px] gap-y-5 rounded-3xl">
      {data?.map((appartement) => (
        <Link
          to={`appartement/${appartement.id}`}
          className="bg-primary w-full aspect-square rounded-lg relative overflow-hidden card-shadow"
        >
          <span className="absolute z-10 bottom-5 left-5 text-white text-lg font-bold max-w-2/3">
            {appartement.title}
          </span>
          <img
            src={appartement.cover}
            alt={appartement.title}
            className="w-full h-full object-cover"
          />
        </Link>
      ))}
    </section>
  );
};

export default CardList;
