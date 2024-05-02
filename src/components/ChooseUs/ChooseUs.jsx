import choose from '../../assets/why-choose-bg.jpg';

const ChooseUs = () => {
    return (
        <div className='lg:w-3/4 mx-auto my-20 lg:px-0 px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                <div className='flex items-center'>
                    <div>
                        <div className='mb-5'>
                            <h3 className='text-center font-medium text-green-600'>HOW ARE WE DIFFERENT</h3>
                            <h1 className='text-4xl font-bold text-center uppercase'>Why Choose Us</h1>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-5 rounded-none">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                A Track Record Of Success.
                            </div>
                            <div className="collapse-content">
                                <p>We are a fully insured company and have developed a reputation for delivering superior cleaning results for a wide range of properties throughout Melbourne.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-5 rounded-none">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                We Are Highly Experienced.
                            </div>
                            <div className="collapse-content">
                                <p>We are a fully insured company and have developed a reputation for delivering superior cleaning results for a wide range of properties throughout Melbourne.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-5 rounded-none">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Eco Friendly Available.
                            </div>
                            <div className="collapse-content">
                                <p>We are a fully insured company and have developed a reputation for delivering superior cleaning results for a wide range of properties throughout Melbourne.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={choose} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;