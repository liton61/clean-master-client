import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner;