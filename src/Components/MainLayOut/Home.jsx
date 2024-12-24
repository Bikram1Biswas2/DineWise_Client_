import Award from "./Award";
import Banner from "./Banner";
import OurDailySpecials from "./OurDailySpecials";
import TopFood from "./TopFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <OurDailySpecials></OurDailySpecials>
            <Award></Award>
        </div>
    );
};

export default Home;