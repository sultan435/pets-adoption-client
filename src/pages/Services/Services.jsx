import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import image from '../../assets/banner-1.jpg'
import Container from "../../components/Ui/Container/Container";
import { GiSittingDog } from "react-icons/gi";
import { FaPlus, FaUserDoctor  } from "react-icons/fa6";
import { SiFoodpanda } from "react-icons/si";
import { MdOutlinePets, MdOutlineMedicalServices, MdLibraryBooks   } from "react-icons/md";
const Services = () => {
    return (
        <div className="pt-36">
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-5xl font-bold text-orange ">Services</h1>
                        <div className="border-2 border-orange w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-offWhite py-5 flex justify-center items-center mb-5">
                <NavLink
                    to="/"
                    className="hover:text-orange font-medium uppercase"
                >
                    Home
                </NavLink>
                <BsArrowRightShort className="text-2xl mx-1" />
                <NavLink
                    to="/petList"
                    className="hover:text-orange font-medium uppercase"
                >
                    Services
                </NavLink>
            </div>

            <Container>
                <div className="mb-20 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border py-16 px-7 rounded-xl hover:border-orange shadow-lg relative">
                            <div className="absolute -top-8 left-44 md:left-40 lg:left-32 xl:left-44 " ><span><GiSittingDog className="text-6xl bg-orange p-2 rounded-full" /></span></div>
                            <h1 className="text-2xl text-center font-semibold">Pet Training</h1>
                            <p className="text-center mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto at dolorem. Temporibus numquam eaque, soluta placeat modi maxime non autem voluptate veniam earum commodi cumque tempore nam aut cupiditate.</p>
                            <div className="absolute -bottom-5 left-48 md:left-40 lg:left-36 xl:left-48 "><span><FaPlus className="text-4xl bg-orange p-2 rounded-full"/></span></div>
                            
                        </div>
                        <div className="border py-16 px-7 rounded-xl hover:border-orange shadow-lg relative">
                        <div className="absolute -top-8 left-44 md:left-40 lg:left-32 xl:left-44 " ><span><FaUserDoctor  className="text-6xl bg-orange p-2 rounded-full" /></span></div>
                            <h1 className="text-2xl text-center font-semibold">Pet Veterinary</h1>
                            <p className="text-center mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto at dolorem. Temporibus numquam eaque, soluta placeat modi maxime non autem voluptate veniam earum commodi cumque tempore nam aut cupiditate.</p>
                            <div className="absolute -bottom-5 left-48 md:left-40 lg:left-36 xl:left-48 "><span><FaPlus className="text-4xl bg-orange p-2 rounded-full"/></span></div>
                        </div>
                        <div className="border py-16 px-7 rounded-xl hover:border-orange shadow-lg relative">
                        <div className="absolute -top-8 left-44 md:left-40 lg:left-32 xl:left-44 " ><span><SiFoodpanda  className="text-6xl bg-orange p-2 rounded-full" /></span></div>
                            <h1 className="text-2xl text-center font-semibold">Food & Nutrition</h1>
                            <p className="text-center mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto at dolorem. Temporibus numquam eaque, soluta placeat modi maxime non autem voluptate veniam earum commodi cumque tempore nam aut cupiditate.</p>
                            <div className="absolute -bottom-5 left-48 md:left-40 lg:left-36 xl:left-48 "><span><FaPlus className="text-4xl bg-orange p-2 rounded-full"/></span></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
                        <div className="border py-16 px-7 rounded-xl hover:border-orange shadow-lg relative">
                        <div className="absolute -top-8 left-44 md:left-40 lg:left-32 xl:left-44 " ><span><MdOutlinePets className="text-6xl bg-orange p-2 rounded-full" /></span></div>
                            <h1 className="text-2xl text-center font-semibold">Owner Training</h1>
                            <p className="text-center mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto at dolorem. Temporibus numquam eaque, soluta placeat modi maxime non autem voluptate veniam earum commodi cumque tempore nam aut cupiditate.</p>
                            <div className="absolute -bottom-5 left-48 md:left-40 lg:left-36 xl:left-48 "><span><FaPlus className="text-4xl bg-orange p-2 rounded-full"/></span></div>
                        </div>
                        <div className="border py-16 px-7 rounded-xl hover:border-orange shadow-lg relative">
                        <div className="absolute -top-8 left-44 md:left-40 lg:left-32 xl:left-44 " ><span><MdOutlineMedicalServices  className="text-6xl bg-orange p-2 rounded-full" /></span></div>
                            <h1 className="text-2xl text-center font-semibold">Emergency Services</h1>
                            <p className="text-center mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto at dolorem. Temporibus numquam eaque, soluta placeat modi maxime non autem voluptate veniam earum commodi cumque tempore nam aut cupiditate.</p>
                            <div className="absolute -bottom-5 left-48 md:left-40 lg:left-36 xl:left-48 "><span><FaPlus className="text-4xl bg-orange p-2 rounded-full"/></span></div>
                        </div>
                        <div className="border py-16 px-7 rounded-xl hover:border-orange shadow-lg relative">
                        <div className="absolute -top-8 left-44 md:left-40 lg:left-32 xl:left-44 " ><span><MdLibraryBooks  className="text-6xl bg-orange p-2 rounded-full" /></span></div>
                            <h1 className="text-2xl text-center font-semibold">Pet Records</h1>
                            <p className="text-center mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto at dolorem. Temporibus numquam eaque, soluta placeat modi maxime non autem voluptate veniam earum commodi cumque tempore nam aut cupiditate.</p>
                            <div className="absolute -bottom-5 left-48 md:left-40 lg:left-36 xl:left-48 "><span><FaPlus className="text-4xl bg-orange p-2 rounded-full"/></span></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;