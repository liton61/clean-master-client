/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { img, title, price, description, _id } = service;
    return (
        <div>
            <div className="card card-compact lg:w-72 md:w-80 mx-auto w-full bg-base-200 border border-green-600 mb-10">
                <figure><img className="w-full h-48" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">{title}</h2>
                    <p>{description}</p>
                    <p className="font-medium">Price : {price}</p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`} style={{ width: '100%' }}>
                            <button className="btn btn-success text-white w-full">See Details <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesCard;