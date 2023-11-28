import Container from "../../components/Ui/Container/Container";
import SectionTitle from "../../components/Ui/SectionTitle/SectionTitle";
import DonationCampaignCard from "./DonationCampaignCard";
import useAllDonationCampaigns from "../../hooks/useAllDonationCampaigns";

const DonationCampaigns = () => {
    const [donationsItem] = useAllDonationCampaigns()
    return (
        <div className="mt-24">
            <Container>
              
                    <div className="">
                        <SectionTitle subHeading="Donation Campaign" heading="WHAT WE DO TO PROTECT ANIMALS"></SectionTitle>
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