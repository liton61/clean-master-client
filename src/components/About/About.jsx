import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="lg:w-3/4 mx-auto lg:my-20 lg:px-0 px-5">
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2 lg:mt-0 mt-5">
          <img className="w-full rounded" src={about} alt="" />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center lg:mr-0">
          <div>
            <h3 className="text-xl font-medium text-green-600 uppercase lg:mt-0 mt-5">
              About Us
            </h3>
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold my-5">
              We Are Professional Cleaning Service Company.
            </h1>
            <p className="text-justify">
              Imagine coming home after a long day at work to find that all your
              housework has been done. The floors are sparkling, the bathroom is
              gleaming, and all the beds have been made. For 26 years, our team
              of cleaning professionals has been providing comprehensive house
              cleaning services in Perth and all across world.
            </p>
            <button className="btn btn-active bg-green-600 hover:bg-green-700 text-white mt-5 rounded uppercase">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
