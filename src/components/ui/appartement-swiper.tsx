import { useState } from "react";
import ArrowIcon from "../../assets/arrow.svg";
import { Appartement } from "../../routes/appartement";
type AppartementSwiperProps = {
  image: Appartement["pictures"];
  alt: Appartement["title"];
};

const AppartementSwiper = ({ image, alt }: AppartementSwiperProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % image.length);
    // on utilise le modulo pour que l'index soit toujours dans les limites de l'array
  };
  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + image.length) % image.length);
  };
  return (
    <div className="w-full overflow-hidden rounded-3xl lg:h-[414px] h-64 relative">
      <img
        onClick={handlePrevious}
        src={ArrowIcon}
        alt="arrow"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:w-10 lg:h-10 w-8 h-8 cursor-pointer -rotate-90"
      />
      <img
        onClick={handleNext}
        src={ArrowIcon}
        alt="arrow"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 lg:w-10 lg:h-10 w-8 h-8 cursor-pointer rotate-90"
      />
      <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center lg:block hidden">
        {currentImage + 1}/{image.length}
      </span>
      {image.map((img, index) => (
        <img
          key={index}
          className={`w-full h-full object-cover ${
            index === currentImage ? "block" : "hidden"
          }`}
          src={img}
          alt={alt}
        />
      ))}
    </div>
  );
};

export default AppartementSwiper;
