import { useContext, useEffect, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import img from '../../../../assets/category/robbit.jpg'
import { NavLink } from "react-router-dom";
import logo from '../../../../assets/logo.png'
import Container from "../../../../components/Ui/Container/Container";
import { AuthContext } from "../../../../provider/AuthProvider";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user, logout } = useContext(AuthContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    //for when scrolling, navbar will be sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })


    // menu navLinks
    const navItems = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Home</NavLink></li>
        <li><NavLink to='/petList' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Pet List</NavLink></li>
        <li><NavLink to='/donationCampaigns' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Donation Campaigns</NavLink></li>
        <li><NavLink to='/dashboard/userProfile' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Dashboard</NavLink></li>
        {
            user ? <>
                <li><button onClick={logout} className="text-base font-bold text-gray uppercase hover:text-orange cursor-pointer">Logout</button> </li>
                </>:
                <><li><NavLink to='/login' className={({ isActive }) =>
                isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
            }>Login</NavLink></li></>      
        }
    </>

    return (
        <header className="w-full bg-[#f8f3e8] z-10 fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <Container>
                <nav className={`py-6 ${isSticky ? "sticky top-0 left-0 right-0 border-b transition-all duration-300 ease-in" : "border-b border-gray transition-all duration-300 ease-in"}`}>
                    {/* for large devices */}
                    <div className="flex justify-between items-center text-base gap-8">
                        <div className="flex justify-center items-center">
                            <img className="text-pink w-12 h-12" src={logo} alt="" />
                            <h5 className="text-3xl font-bold text-gray "><span className="text-orange">PET</span>CO</h5>
                        </div>

                        {/* menu item for large devices */}
                        <ul className="lg:flex space-x-12 hidden list-none">
                            {navItems}
                        </ul>
                        <div className="space-x-12 hidden lg:flex items-center">
                            {/* <button className="bg-transparent text-white border rounded-full">
                        </button> */}
                            <div className="avatar cursor-pointer">
                                <div onClick={toggleMenu} className="w-12 rounded-full">
                                    {
                                        user ? <img className="w-full mx-auto" src={user?.photoURL} /> :<img className="w-full mx-auto" src={img} />
                                    }
                                </div>
                            </div>
                        </div>

                        {/* menu btn, visible on mobile screen only */}
                        <div className="lg:hidden focus:outline-none transition-all ease-in duration-300">
                            <button
                                className="text-black"
                                onClick={toggleMenu}>
                                {
                                    isMenuOpen ? <FaXmark className="w-6 h-6"></FaXmark> : <FaBarsStaggered className="w-6 h-6"></FaBarsStaggered>
                                }
                            </button>
                        </div>
                    </div>

                    {/* navItem for small devices */}
                    <div className={`space-y-4 px-4 mt-24 py-7 bg-white shadow-lg ${isMenuOpen ? " fixed top-0 right-0 left-0 list-none transition-all ease-in duration-300" : "hidden"}`}>
                        {navItems}
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;