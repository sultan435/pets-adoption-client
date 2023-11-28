import { FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePets } from "react-icons/md";
import img from '../../assets/category/robbit.jpg'
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";


const DashboardLayout = () => {
    const { user } = useAuth()

    const [isAdmin] = useAdmin()
    return (
        <div className="flex relative">
            <div className="w-72 min-h-screen bg-[#eb8c51] text-[#333333]  shadow-xl fixed">
                <div className="avatar flex items-center justify-center pt-16 mb-8">
                    <div className="w-24 rounded-full">
                        {
                            user ? <img src={user.photoURL} /> : <img src={img} />
                        }
                    </div>
                </div>
                <ul className="menu p-4 space-y-1">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/user-allPets">All Pets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/user-allDonations">All Donations</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userProfile"><FaUser />User Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addPet"><MdOutlinePets />Add a pet</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myAddPets"><FaUser />My added pets</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/adoptionRequest"><MdOutlinePets />Adoption Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/createDonationCampaign"><FaUser />Create Donation Campaign</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myDonationCampaign"><MdOutlinePets />My Donation Campaigns</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myDonations"><MdOutlinePets />My Donations</NavLink>
                                </li>
                            </>
                    }







                    <div className="divider"></div>
                    <li><NavLink to="/"><FaUser />Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 ml-72 min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;