import { useEffect, useState } from "react";
import OfferedCard from "./OfferedCard";
import Banner from "../../components/Banner/Banner";


const Offered = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('offered.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="lg:w-3/4 mx-auto my-10">
                <h1 className="text-center text-3xl font-bold my-10 uppercase">Our Offered Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-0 p-5">
                    {
                        services.map(service => <OfferedCard key={service._id} service={service}></OfferedCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Offered;