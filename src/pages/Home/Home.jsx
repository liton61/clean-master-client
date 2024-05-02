import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Cleaning from "../../components/Banner/Cleaning";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Diff from "../../components/Diff/Diff";
import Estimate from "../../components/Estimate/Estimate";
import Gallery from "../../components/Gallery/Gallery";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Estimate></Estimate>
            <Diff></Diff>
            <Cleaning></Cleaning>
            <ChooseUs></ChooseUs>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;