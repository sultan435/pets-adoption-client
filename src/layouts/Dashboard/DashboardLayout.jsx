import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePets } from "react-icons/md";
import img from '../../assets/category/robbit.jpg'
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { FaBook,  FaEnvelope, FaHome, FaList, FaSearch, FaUsers,FaAddressBook } from 'react-icons/fa';
// import { useState } from "react";


const DashboardLayout = () => {
    const { user } = useAuth()
    // const [isDashboard, setIsDashboard] = useState(false)

    // const toggleDashboard = () => {
    //     setIsDashboard(!isDashboard)
    // }

    const [isAdmin] = useAdmin()
    return (
        <div className="flex relative">
            <div className="w-64 min-h-screen bg-orange text-gray  shadow-xl fixed z-10">
                <div className="avatar flex items-center justify-center pt-16 mb-5">
                    <div className="w-24 rounded-full">
                        {
                            user ? <img src={user.photoURL} /> : <img src={img} />
                        }
                    </div>
                </div>
                <ul className="menu p-2 space-y-1 font-semibold">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminProfile"><FaHome/>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers />All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/user-allPets"><FaList />All Pets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/user-allDonations"><FaBook />All Donations</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userProfile"><FaHome/>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addPet"><MdOutlinePets />Add a pet</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myAddPets"><FaList />My added pets</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/adoptionRequest"><FaBook />Adoption Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/createDonationCampaign"><MdOutlinePets />Create Donation Campaign</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myDonationCampaign"><FaList />My Donation Campaigns</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myDonations"><FaAddressBook/> My Donations</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome/>Home</NavLink></li>
                    <li >
                        <NavLink to="/petList"><FaSearch></FaSearch> All Pets List</NavLink>
                    </li>
                    <li >
                        <NavLink to="/"><FaEnvelope /> Contact</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1 ml-64 min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;