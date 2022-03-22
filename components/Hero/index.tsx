import Slider from "./Slider";

const Hero = () => {
  return (
    // <div className="flex-row py-28 lg:pl-20">
    <div className="flex flex-col lg:flex-row pt-20 pb-10 lg:pl-20">
      <div className="shrink-0 flex flex-col text-s md:text-lg w-full min-h-[100px] md:w-[400px] leading-tight mt-3">
        <h1>
          <span className="inline-block w-full">Przedsiębiorstwo Usług</span>
          <span className="inline-block w-full">
            Geodezyjnych i Kartograficznych
          </span>
          <span className="inline-block w-full">Wiesław Walesiak</span>
        </h1>
      </div>
      <div className="">
        <Slider />
      </div>
    </div>
    // </div>
  );
};

export default Hero;
