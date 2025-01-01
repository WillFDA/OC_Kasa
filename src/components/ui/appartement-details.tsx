import { Appartement } from "../../routes/appartement";
import Dropdown from "./dropdown";
import { Pills } from "./pills";

const AppartementDetails = ({ appartement }: { appartement: Appartement }) => {
  const { title, rating, location, host, description, equipments } =
    appartement;
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-3 justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-primary lg:text-4xl text-lg">{title}</h1>
          <span className="lg:text-lg text-sm">{location}</span>
          <div className="flex gap-2 mt-2">
            {appartement.tags.map((tag) => (
              <Pills tag={tag} />
            ))}
          </div>
        </div>
        <div className="flex lg:flex-col items-end flex-row-reverse justify-between">
          <div className="flex items-center gap-2 ">
            <span className="text-primary lg:text-lg text-xs break-words text-right lg:max-w-44 max-w-14">
              {host.name}
            </span>
            <img
              className="lg:size-16 size-8 rounded-full"
              src={host.picture}
              alt={host.name}
            />
          </div>
          <div className="flex gap-2">{rating}</div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row lg:gap-16 gap-4">
        <Dropdown title="Description" description={description} />
        <Dropdown title="Equipements" description={equipments} />
      </div>
    </>
  );
};
export default AppartementDetails;
