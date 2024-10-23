const AppartementSwiper = ({ image, alt }) => {
  return (
    <div className="w-full overflow-hidden rounded-3xl lg:h-[414px] h-64 relative">
      <img src={image[0]} alt={alt} />
    </div>
  );
};

export default AppartementSwiper;
