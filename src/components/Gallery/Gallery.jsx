import { useEffect, useState } from "react";


const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/s6NXC3g/hero-5.jpg)' }}>
                {/* <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md bg-black bg-opacity-50 lg:p-10 md:p-10 p-3 rounded">
                    <h1 className="mb-5 text-4xl font-bold">HAPPY FARMING</h1>
                    <p className="mb-5 text-yellow-200">Farming is not just a livelihood, it's a legacy we sow today for future generations to reap !!!</p>
                </div>
            </div> */}
            </div>
            <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        gallery.map(photo => (<div key={photo._id}>
                            <div className="relative">
                                <img src={photo.image} alt="" />
                                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 hover:opacity-50 cursor-pointer"></div>
                            </div>

                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;