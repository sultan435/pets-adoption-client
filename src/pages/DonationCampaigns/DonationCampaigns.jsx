import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../../components/Ui/Container/Container";
import SectionTitle from "../../components/Ui/SectionTitle/SectionTitle";
import DonationCampaignCard from "./DonationCampaignCard";

const DonationCampaigns = () => {
    const axiosSecure = useAxiosSecure()

    const { data: donationsItem = [] } = useQuery({
        queryKey: ["donation-campaigns"],
        queryFn: async () => {
            const res = await axiosSecure.get('/user/donation-campaign')
            return res.data;
        }
    })
    console.log(donationsItem)
    return (
        <div className="mt-24">
            <Container>
              
                    <div className="py-16">
                        <SectionTitle subHeading="Donation Campaign" heading="WHAT WE DO TO PROTECT ANIMALS"></SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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