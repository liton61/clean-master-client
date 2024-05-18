import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";


const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
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