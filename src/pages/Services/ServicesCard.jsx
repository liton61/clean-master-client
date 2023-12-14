/* eslint-disable react/prop-types */


const ServicesCard = ({ service }) => {
    const { img, title, price, description, rating } = service;
    return (
        <div>
            <div className="card card-compact lg:w-72 md:w-80 mx-auto w-full bg-base-100 shadow-xl mb-10">
                <figure><img className="w-full h-48" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">{title}</h2>
                    <p className="font-medium">Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white w-full">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;