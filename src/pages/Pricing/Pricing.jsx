import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/plan.json")
      .then((response) => response.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div key={index} className="shadow-lg rounded p-5 text-center">
              <h2 className="text-2xl font-bold mb-4 uppercase text-green-600">
                From ${plan.startingPrice}
                <br />
                {plan.name}
              </h2>
              <p className="text-gray-600 mb-4 font-medium">
                {plan.description}
              </p>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                ${plan.price}
              </p>
              <div className="flex justify-center">
                <ul className="text-sm mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <i className="fa-solid fa-check text-green-600 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 uppercase font-bold">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
