/* eslint-disable react/prop-types */


const DetailsCard = ({ data }) => {
    const { title, img, price, description, rating, day, time } = data;
    return (
        <div>
            <div className="card lg:card-side bg-base-200 border border-green-600">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-medium text-gray-500">Price : {price}</p>
                    <p className="font-medium text-gray-500">Rating : {rating}</p>
                    <p className="font-medium text-gray-500">Day : {day}</p>
                    <p className="font-medium text-gray-500">Time : {time}</p>
                    <p className="text-gray-500">{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white w-full">Book Now <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;