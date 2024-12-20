import { Appartement } from "../../routes/appartement";

type AppartementSwiperProps = {
  image: Appartement["pictures"];
  alt: Appartement["title"];
};

const AppartementSwiper = ({ image, alt }: AppartementSwiperProps) => {
  return (
    <div className="w-full overflow-hidden rounded-3xl lg:h-[414px] h-64 relative">
      <img className="w-full h-full object-cover" src={image[0]} alt={alt} />
    </div>
  );
};

export default AppartementSwiper;
