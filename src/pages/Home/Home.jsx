import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Estimate from "../../components/Estimate/Estimate";
import Kitchen from "../../components/Kitchen/Kitchen";
// import Room from "../../components/Room/Room";
import RoomBanner from "../../components/Room/RoomBanner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Estimate></Estimate>
            {/* <Room></Room> */}
            <RoomBanner></RoomBanner>
            <Kitchen></Kitchen>
            <Contact></Contact>
        </div>
    );
};

export default Home;