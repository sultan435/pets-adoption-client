import useAuth from "../../../hooks/useAuth";
import useMyAddedPets from "../../../hooks/useMyAddedPets";
import useDonationCampaign from "../../../hooks/useDonationCampaign";
import useDonation from "../../../hooks/useDonation";

const UserProfile = () => {
    const {user} = useAuth()
    const [myPets] = useMyAddedPets()
    const [MyDonationCampaigns] =useDonationCampaign()
    const [myDonations] = useDonation()

    const totalDonation = myDonations.reduce((total, item) => total + item.donation, 0)
    console.log(totalDonation);
    return (
        <div className="py-16 px-8">
            <h1 className="text-gray">
                <span className="text-3xl font-semibold  ">Hi, Welcome {user?.displayName}!</span>
            </h1>
            <div>
                <div>
                    <h1>Total Donation: {totalDonation}</h1>
                    <h1>Total Donation User: {myDonations.length}</h1>
                    <h1>Total MyPets Items: {myPets.length}</h1>
                    <h1>Total MyDonationCampaigns Items: {MyDonationCampaigns.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;