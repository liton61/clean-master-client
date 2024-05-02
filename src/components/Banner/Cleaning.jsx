import banner from '../../assets/05.jpg';

const Cleaning = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 mt-7'>
            <div className="carousel w-full rounded">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-full h-[70vh]" />
                    {/* Overlay */}
                    <div className="absolute w-full h-[70vh] top-0 left-0 bg-black opacity-40"></div>
                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="max-w-md mx-auto text-center text-white">
                            <h1 className="mb-5 text-5xl font-bold uppercase">Passionate Workers</h1>
                            <p className="mb-5">Cleaning is not just about removing dirt. It is about creating an environment where happiness can flourish.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cleaning;