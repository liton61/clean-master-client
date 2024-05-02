

const Pricing = () => {
    return (
        <div className="lg:w-3/4 mx-auto my-20 lg:px-0 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="shadow-lg rounded p-5 text-center">
                    <h2 className="text-2xl font-bold mb-4 uppercase text-green-600">From $40<br />Commercial</h2>
                    <p className="text-gray-600 mb-4 font-medium">Perfect for small apartments</p>
                    <p className="text-3xl font-bold text-gray-800 mb-4">$50</p>
                    <div className="flex justify-center">
                        <ul className="text-sm mb-6">
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Bathroom Cleaning</li>
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Kitchen Cleaning</li>
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Dusting & Vacuuming</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 uppercase font-bold">Choose Plan</button>
                    </div>
                </div>
                <div className="shadow-lg rounded p-5 text-center">
                    <h2 className="text-2xl font-bold mb-4 uppercase text-green-600">From $50<br />Residential</h2>
                    <p className="text-gray-600 mb-4 font-medium">Ideal for medium-sized homes</p>
                    <p className="text-3xl font-bold text-gray-800 mb-4">$80</p>
                    <div className="flex justify-center">
                        <ul className="text-sm mb-6">
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Bathroom & Kitchen Cleaning</li>
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Dusting, Vacuuming & Mopping</li>
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Window Cleaning</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 uppercase font-bold">Choose Plan</button>
                    </div>
                </div>
                <div className="shadow-lg rounded p-5 text-center">
                    <h2 className="text-2xl font-bold mb-4 uppercase text-green-600">From $60<br />Construction</h2>
                    <p className="text-gray-600 mb-4 font-medium">Best for large homes or offices</p>
                    <p className="text-3xl font-bold text-gray-800 mb-4">$120</p>
                    <div className="flex justify-center">
                        <ul className="text-sm mb-6">
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Full House Cleaning</li>
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Deep Cleaning</li>
                            <li className="mb-2 flex items-center"><i className="fa-solid fa-check text-green-600 mr-2"></i>Carpet Cleaning</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 uppercase font-bold">Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;