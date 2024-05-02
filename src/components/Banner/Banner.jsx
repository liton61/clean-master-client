

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/WzNJg6HV/banner.jpg)' }}>
                <div className="hero-overlay bg-black opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">We Are ready</h1>
                        <p className="mb-5">Cleaning keeps you healthy, happy, and safe. It makes things last longer, helps you work better, saves money, and protects the environment.</p>
                        <button className="btn btn-active btn-success text-white">Get Started <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;