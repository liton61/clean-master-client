/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { img, title, price, _id } = service;
    return (
        <div>
            <div className="card card-compact bg-base-200 border border-green-600 rounded-none">
                <figure><img className="w-full h-48" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">{title}</h2>
                    <div>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <p className="font-medium">Price : {price}</p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`} className="w-full">
                            <button className="btn btn-success text-white w-full uppercase">See Details <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesCard;