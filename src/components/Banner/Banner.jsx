import banner from "../../assets/05.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full h-[90vh]" />
          {/* Overlay */}
          <div className="absolute w-full h-[90vh] top-0 left-0 bg-black opacity-40"></div>
          <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="max-w-md mx-auto text-center text-white">
              <h1 className="mb-5 text-5xl font-bold uppercase">
                Make Your House As Clean As Minde
              </h1>
              <p className="mb-5">
                Cleaning is not just about removing dirt. It is about creating
                an environment where happiness can flourish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
