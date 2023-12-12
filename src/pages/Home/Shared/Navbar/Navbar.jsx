import { useContext, useEffect, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../../assets/logo.png'
import Container from "../../../../components/Ui/Container/Container";
import { AuthContext } from "../../../../provider/AuthProvider";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import userLogo from '../../../../assets/userLogo.png'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDashboard, setIsDashboard] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
    const { user, logout } = useContext(AuthContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const toggleDashboard = () => {
        setIsDashboard(!isDashboard)
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
        <li><NavLink to='/services' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Services</NavLink></li>
        <li><NavLink to='/donationCampaigns' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Donation Campaigns</NavLink></li>
        <li><NavLink to='/dashboard/userProfile' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Dashboard</NavLink></li>
        {
            user ? <>
                <li><button onClick={logout} className="text-base font-bold text-gray uppercase hover:text-orange cursor-pointer">Logout</button> </li>
            </> :
                <><li><NavLink to='/login' className={({ isActive }) =>
                    isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
                }>Login</NavLink></li></>
        }
    </>;
    const navLinks = <>
        <li><NavLink to='/dashboard/userProfile' className={({ isActive }) =>
            isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
        }>Dashboard</NavLink></li>
        {
            user ? <>
                <li><button onClick={logout} className="text-base font-bold text-gray uppercase hover:text-orange cursor-pointer">Logout</button> </li>
            </> :
                <><li><NavLink to='/login' className={({ isActive }) =>
                    isActive ? 'text-orange underline font-bold uppercase' : 'text-base font-bold text-gray uppercase hover:text-orange cursor-pointer'
                }>Login</NavLink></li></>
        }
    </>

    return (
        <header className="w-full bg-[#f8f3e8] z-10 fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <div className='bg-offWhite border-b border-t border-slate-300 text-white hidden md:block'>
                <div className=' w-full max-w-screen-2xl px-4 mx-auto'>
                    <div className='flex justify-end text-sm'>
                        <div className="text-gray border-l border-r border-slate-300 flex items-center justify-center gap-6 px-6">
                            <p>FAQS</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='flex items-center mb-2 md:mb-0 gap-3 px-6 '>
                            <span className='cursor-pointer bg-gray p-2 rounded-full hover:text-[#e41f05]'><BsFacebook /></span>
                            <span className='cursor-pointer bg-gray p-2 rounded-full hover:text-[#e41f05]'><AiFillTwitterCircle /></span>
                            <span className='cursor-pointer bg-gray p-2 rounded-full hover:text-[#e41f05]'><BsPinterest /></span>
                            <span className='cursor-pointer bg-gray p-2 rounded-full hover:text-[#e41f05]'><AiOutlineInstagram /></span>
                        </div>
                        <Link to='/dashboard/userProfile'>
                            <div className="border-l border-slate-300 text-orange flex items-center justify-center gap-1 px-4 py-3">
                                <span><FaUser></FaUser></span>
                                {
                                    user ? user.displayName : <span>MyAA account</span>
                                }
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Container>
                <nav className={`py-6 ${isSticky ? "sticky top-0 left-0 right-0 md:border-b border-slate-300 transition-all duration-300 ease-in" : "md:border-b border-slate-300 transition-all duration-300 ease-in"}`}>
                    {/* for large devices */}
                    <div className="flex justify-between items-center text-base gap-8">
                        <Link>
                            <div className="flex justify-center items-center">
                                <img className="text-pink w-12 h-12" src={logo} alt="" />
                                <h5 className="text-3xl font-bold text-gray "><span className="text-orange">PET</span>CO</h5>
                            </div>
                        </Link>
                        {/* menu item for large devices */}
                        <ul className="lg:flex space-x-12 hidden list-none">
                            {navItems}
                        </ul>
                        <div className="space-x-12 hidden lg:flex items-center">
                            <div className="avatar cursor-pointer">
                                <div onClick={toggleDashboard} className="w-12 rounded-full">
                                    {
                                        user ? <img className="w-full mx-auto" src={user?.photoURL} /> : <img className="w-full mx-auto" src={userLogo} />
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
                    <div className={`space-y-4 px-4 mt-24 md:mt-32 py-7 bg-offWhite shadow-lg ${isMenuOpen ? "block md:flex lg:hidden flex-col fixed top-0 right-0 left-0 list-none transition-all ease-in duration-300" : "hidden"}`}>
                        {navItems}
                    </div>
                    <div className={`space-y-4 px-4 mt-32 py-7 w-48 bg-offWhite rounded-xl shadow-lg ${isDashboard ? " hidden lg:flex flex-col fixed top-0 right-6 list-none transition-all ease-in duration-300" : "hidden"}`}>
                        {navLinks}
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;