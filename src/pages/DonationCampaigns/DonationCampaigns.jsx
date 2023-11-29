import Container from "../../components/Ui/Container/Container";
import DonationCampaignCard from "./DonationCampaignCard";
import useAllDonationCampaigns from "../../hooks/useAllDonationCampaigns";
import image from '../../assets/banner-8.jpg'
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const DonationCampaigns = () => {
    const [donationsItem] = useAllDonationCampaigns()
    return (
        <div className="pt-36">
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-5xl font-bold text-orange ">Donation<span className="text-gray"> Campaign</span></h1>
                        <div className="border-2 border-orange w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-offWhite py-5 flex justify-center items-center mb-16">
                <NavLink
                    to="/"
                    className="hover:text-orange font-medium uppercase"
                >
                    Home
                </NavLink>
                <BsArrowRightShort className="text-2xl mx-1" />
                <NavLink
                    to="/"
                    className="hover:text-orange font-medium uppercase"
                >
                    DOnation campaign
                </NavLink>
            </div>
            <Container>          
                    <div className="mb-20">                       
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                            {
                                donationsItem.map(item => <DonationCampaignCard key={item._id} donation={item}></DonationCampaignCard>)
                            }
                        </div>
                    </div>
               
            </Container>
        </div>
    );
};

export default DonationCampaigns;