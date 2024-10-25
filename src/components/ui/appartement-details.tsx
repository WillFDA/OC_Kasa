const AppartementDetails = ({ appartement }) => {
  const { title, rating, equipments, location } = appartement;
  return (
    <>
      <div className="flex items-start justify-between">
        <h1 className="text-primary">{title}</h1>
      </div>
      <div></div>
    </>
  );
};
export default AppartementDetails;
