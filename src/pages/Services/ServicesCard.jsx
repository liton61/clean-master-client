/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div>
            <div className="card card-compact shadow-lg rounded">
                <div className="pt-10">
                    <figure><img className="w-20 h-20 rounded-full" src={img} alt="" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold uppercase">{name}</h2>
                    <p className="text-center">{description}</p>
                    <div className="card-actions flex justify-center">
                        <Link to="/pricing">
                            <button className="bg-green-600 text-white px-3 py-2 rounded-full text-3xl font-bold"><i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesCard;