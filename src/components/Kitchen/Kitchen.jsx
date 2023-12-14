import kitchen from '../../assets/02.jpg';

const Kitchen = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:my-20'>
            <div className='lg:flex flex-row-reverse'>
                <div className='lg:w-1/2 lg:ml-0 mx-5 lg:mt-0 mt-5'>
                    <img className='w-full' src={kitchen} alt="" />
                </div>
                <div className='lg:w-1/2 w-full flex justify-center items-center lg:mr-0'>
                    <div className='mx-5'>
                        <h1 className='text-center text-3xl font-semibold my-5'>Kitchen Cleaning</h1>
                        <p className='text-justify font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium, deleniti quisquam magnam deserunt obcaecati labore vero suscipit inventore nemo cupiditate ullam molestiae consequuntur nihil exercitationem mollitia quia, accusantium impedit eaque ut.</p>
                        <button className="btn btn-active btn-success text-white mt-5">Get Started <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kitchen;