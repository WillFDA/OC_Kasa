type HeroBannerProps = { image: string; text?: string };
const HeroBanner = ({ image, text }: HeroBannerProps) => {
  return (
    <header className="w-full h-28 lg:h-56 relative">
      {text ? (
        <h1 className="text-white font-bold shadow-sm text-5xl absolute top-1/2 left-4 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 max-w-56 lg:max-w-4xl z-10">
          {text}
        </h1>
      ) : null}
      <img
        className="h-full w-full object-cover"
        src={image}
        alt="Banner hero image"
      />
    </header>
  );
};

export default HeroBanner;
