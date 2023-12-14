import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Kitchen from "../../components/Kitchen/Kitchen";
import Room from "../../components/Room/Room";
import RoomBanner from "../../components/Room/RoomBanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Room></Room>
            <RoomBanner></RoomBanner>
            <Kitchen></Kitchen>
            <Contact></Contact>
        </div>
    );
};

export default Home;