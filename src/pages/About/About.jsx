import Banner from "../../components/Banner/Banner";
import img from '../../assets/03.jpg';
import img2 from '../../assets/05.jpg';


const About = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="lg:w-3/4 w-full mx-auto py-8">
            </div>
            <div className="lg:w-3/4 w-full lg:p-0 p-5 mx-auto py-8 lg:mt-10">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <img src={img} alt="Cleaning Services Image" className="rounded-lg shadow-md" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-10">
                        <h2 className="text-3xl font-bold mb-4">Our Cleaning Services</h2>
                        <p className="text-lg mb-4 text-justify">At Cleaning Services, we offer a wide range of cleaning solutions tailored to your needs. Whether it is residential or commercial cleaning, our dedicated team ensures immaculate cleanliness with eco-friendly products and advanced techniques.</p>
                        <p className="text-lg mb-4 text-justify">We take pride in delivering exceptional service that exceeds your expectations. With flexible scheduling and a commitment to quality, we guarantee a spotless environment for your home or business.</p>
                        {/* <p className="text-lg text-justify">Contact us today for a sparkling clean experience!</p> */}
                    </div>
                </div>
            </div>
            <div className="lg:w-3/4 w-full lg:p-0 p-5 mx-auto py-8 lg:mt-20">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <img src={img2} alt="Our Story Image" className="rounded-lg shadow-md w-full" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-10">
                        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                        <p className="text-lg mb-4 text-justify">[Your cleaning service] story began with a vision of creating a cleaner and healthier environment for our community. We embarked on this journey with a commitment to excellence and customer satisfaction.</p>
                        <p className="text-lg mb-4 text-justify">Over the years, we have evolved, honed our skills, and expanded our services. Our dedicated team of cleaning professionals works tirelessly to ensure every space we touch gleams with cleanliness.</p>
                        {/* <p className="text-lg">At [Your cleaning service], our story is about passion, dedication, and the pursuit of perfection in every clean!</p> */}
                    </div>
                </div>
            </div>
            <div className="mt-20 lg:px-0 px-5">
                <h1 className="text-center text-3xl font-semibold mb-10">What We Offer</h1>
                <div className="collapse collapse-plus lg:w-3/4 mx-auto mb-5 bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Comprehensive residential and commercial cleaning services
                    </div>
                </div>
                <div className="collapse collapse-plus lg:w-3/4 mx-auto mb-5 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Environmentally friendly cleaning products
                    </div>
                </div>
                <div className="collapse collapse-plus lg:w-3/4 mx-auto mb-5 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Flexible scheduling to suit your convenience
                    </div>
                </div>
                <div className="collapse collapse-plus lg:w-3/4 mx-auto mb-5 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Trained and professional cleaning staff
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;