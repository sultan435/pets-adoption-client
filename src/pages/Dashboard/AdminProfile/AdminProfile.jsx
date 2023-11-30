import useAllDonationCampaigns from "../../../hooks/useAllDonationCampaigns";
import useAllPets from "../../../hooks/useAllPets";
import useAllUsers from "../../../hooks/useAllUsers";
import useAuth from "../../../hooks/useAuth";


const AdminProfile = () => {
    const {user} = useAuth()
    const [donationsItem] = useAllDonationCampaigns()
    const [allPets] = useAllPets()
    const [usersInfo] =useAllUsers()
    return (
        <div className="py-16 px-8">
            <h1 className="text-gray">
                <span className="text-3xl font-semibold  ">Hi, Welcome <span className="text-orange">Admin!</span></span>
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
                        <p className="text-2xl font-medium "> All <span className="text-orange">User:</span> <span className=" text-2xl font-medium">{usersInfo.length}</span></p>
                        <p className="text-2xl font-medium"> Users All <span className="text-orange">Pets:</span> <span className=" text-2xl font-medium">{allPets.length}</span></p>
                        <p className="text-2xl font-medium"> Users All <span className="text-orange">Donations:</span> <span className=" text-2xl font-medium">{donationsItem.length}</span></p>                                         
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AdminProfile;