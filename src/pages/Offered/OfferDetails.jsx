import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OfferDetailsCard from "./OfferDetailsCard";
import Banner from "../../components/Banner/Banner";


const OfferDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const loadData = useLoaderData();

    useEffect(() => {
        const findData = loadData?.find(service => service._id == id);
        setData(findData)
    }, [id, loadData])
    return (
        <div>
            <Banner></Banner>
            <div className="lg:w-3/4 mx-auto my-28 lg:px-0 px-5">
                <OfferDetailsCard data={data}></OfferDetailsCard>
            </div>
        </div>
    );
};

export default OfferDetails;