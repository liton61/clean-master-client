/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const OfferedCard = ({ service }) => {
    const { _id, img, title, price, offer_price } = service;
    return (
        <div>
            <div className="card card-compact lg:w-72 md:w-80 mx-auto w-full bg-base-200 border border-green-600 mb-10">
                <figure><img className="w-full h-48" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">{title}</h2>
                    <p className="font-medium">Price : <span className="line-through decoration-red-600">{price}</span> {offer_price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`} style={{ width: '100%' }}>
                            <button className="btn btn-success text-white w-full">See Details <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferedCard;