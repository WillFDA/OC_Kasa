import useFetchData from "../hooks/useFetchData";
import Card from "./ui/card";
const Cards = () => {
  const { data, loading, error } = useFetchData("/data/data.json");

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }
  return (
    <section className="lg:bg-gray-100 lg:px-12 lg:py-14 grid grid-cols-1 lg:grid-cols-3 gap-x-[60px] lg:gap-y-[50px] gap-y-5">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Cards;
