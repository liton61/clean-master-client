

const Estimate = () => {
    return (
        <div className="bg-green-600">
            <div className="lg:w-3/4 mx-auto py-10 lg:px-0 px-5">
                <h3 className="font-medium text-center text-white">REQUEST A CALL BACK</h3>
                <h1 className="text-center lg:text-5xl text-3xl font-bold mb-5 text-white uppercase">Get A Free Estimate</h1>
                <div className="lg:flex gap-5">
                    <div className="w-full lg:mt-0 mt-5">
                        <input type="text" placeholder="Your Name" className="input input-bordered focus:outline-none rounded-none w-full" />
                    </div>
                    <div className="w-full lg:mt-0 mt-5">
                        <select className="select select-bordered focus:outline-none rounded-none w-full">
                            <option disabled selected>Choose Cleaning Service</option>
                            <option>Home Cleaning</option>
                            <option>Floor Cleaning</option>
                            <option>Pool Cleaning</option>
                            <option>Office Cleaning</option>
                            <option>Carpet Cleaning</option>
                            <option>Window Cleaning</option>
                        </select>
                    </div>
                </div>
                <div className="lg:flex gap-5 mt-5">
                    <div className="w-full lg:mt-0 mt-5">
                        <input type="text" placeholder="Your Email" className="input input-bordered focus:outline-none rounded-none w-full" />
                    </div>
                    <div className="w-full lg:mt-0 mt-5">
                        <input type="text" placeholder="Your Phone" className="input input-bordered focus:outline-none rounded-none w-full" />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <textarea className="textarea textarea-bordered focus:outline-none rounded-none w-full" placeholder="Case Details"></textarea>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="btn btn-outline btn-warning uppercase rounded-none">Submit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Estimate;