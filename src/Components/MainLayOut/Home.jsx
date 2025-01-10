import Award from "./Award";
import Banner from "./Banner";
import OurDailySpecials from "./OurDailySpecials";
import Promotional from "./Promotional";
import TopFood from "./TopFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <OurDailySpecials></OurDailySpecials>
            <Promotional></Promotional>
            <Award></Award>

        </div>
    );
};

export default Home;