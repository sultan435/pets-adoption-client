import AboutUs from "../AboutUs/AboutUs";
import Achievements from "../Achievements/Achievements";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContactUs from "../ContactUs/ContactUs";
import Features from "../Features/Features";
import Newsletter from "../Newsletter/Newsletter";
import OurMember from "../OurMember/OurMember";
import ProtectAnimals from "../ProtectAnimals/ProtectAnimals";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ContactUs></ContactUs>
            <ProtectAnimals></ProtectAnimals>
            <AboutUs></AboutUs>
            <Features></Features>
            <Achievements></Achievements>
            <OurMember></OurMember>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;