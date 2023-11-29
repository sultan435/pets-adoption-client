import useAuth from "../../../hooks/useAuth";
import useMyAddedPets from "../../../hooks/useMyAddedPets";
import useDonationCampaign from "../../../hooks/useDonationCampaign";
import useDonation from "../../../hooks/useDonation";
// import { FaUsers } from "react-icons/fa";

const UserProfile = () => {
    const { user } = useAuth()
    const [myPets] = useMyAddedPets()
    const [MyDonationCampaigns] = useDonationCampaign()
    const [myDonations] = useDonation()

    const totalDonation = myDonations.reduce((total, item) => total + item.donation, 0)
    console.log(totalDonation);
    return (
        <div className="py-16 px-8">
            <h1 className="text-gray">
                <span className="text-3xl font-semibold  ">Hi, Welcome to <span className="text-orange">PETCO!</span></span>
            </h1>
            <div className="flex gap-6 h-[50vh] mt-16">
                <div className="flex-1 shadow-xl">
                    <div className="flex flex-col justify-center items-center  h-full">
                        <div>
                            <img className="w-40 h-40 rounded-full mb-3" src={user?.photoURL} alt="" />
                        </div>
                        <p className="text-lg font-bold">{user?.displayName}</p>
                        <p className="text-red-500">{user?.email}</p>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl uppercase mb-5 font-semibold">OUR MAIN GOAL IS <span className="text-orange">TO PROTECT ANIMALS</span></h3>
                    <div className="space-y-1">
                        <p className="text-2xl font-medium">Total <span className="text-orange">Donation</span>: <span className=" text-2xl font-medium"> $ </span>{totalDonation}</p>
                        <p className="text-2xl font-medium">Donation <span className="text-orange">User</span>: <span className=" text-2xl font-medium"></span>{myDonations.length}</p>
                        <p className="text-2xl font-medium">My <span className="text-orange">Pets </span>Items: <span className=" text-2xl font-medium"></span>{myPets.length}</p>
                        <p className="text-2xl font-medium">My <span className="text-orange">Donation Campaigns </span>Items: <span className=" text-2xl font-medium"></span>{MyDonationCampaigns.length}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default UserProfile;