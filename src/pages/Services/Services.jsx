import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import Banner from "../../components/Banner/Banner";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="lg:w-3/4 mx-auto">
                <h1 className="text-center text-3xl font-bold my-10">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-0 md:p-0 p-5">
                    {
                        services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;