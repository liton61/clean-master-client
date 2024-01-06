import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";




const Details = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    const loadData = useLoaderData();

    useEffect(() => {
        const findData = loadData?.find(service => service._id == id);
        setData(findData)
    }, [id,loadData])
    return (
        <div className="lg:w-3/4 mx-auto my-28">
            <DetailsCard data={data}></DetailsCard>
        </div>
    );
};

export default Details;