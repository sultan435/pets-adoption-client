import Container from "../../../../components/Ui/Container/Container";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-violet">
            <Container>
                {/* <div className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> */}
                <div className="py-24 flex justify-between flex-col lg:flex-row">
                    <div className="space-y-8">
                        <h2 className="text-white text-5xl font-bold "><span className="text-pink">PET</span>CO</h2>
                        <div className="">
                            <p className="text-white font-bold text-lg">Location:<span className="text-[#CED5F1] font-medium"> av. Washington 165, NY CA 54003</span></p>
                            <p className="text-white font-bold text-lg">Phone:<span className="text-[#CED5F1] font-medium"> +8801833225351</span></p>
                            <p className="text-white font-bold text-lg">Email:<span className="text-[#CED5F1] font-medium"> sultanmahmud5998@email.com</span></p>
                            <p className="text-white font-bold text-lg">Opening hours:<span className="text-[#CED5F1] font-medium"> 9:00 AM - 5:00PM</span></p>
                        </div>
                        <div>
                            <div className='flex items-center mb-2 md:mb-0 gap-3'>
                                <span className='cursor-pointer text-white bg-pink p-2 text-2xl rounded-full'><FaFacebookF /></span>
                                <span className='cursor-pointer text-white bg-pink p-2 text-2xl rounded-full'><FaTwitter /></span>
                                <span className='cursor-pointer text-white bg-pink p-2 text-2xl rounded-full'><BsYoutube /></span>
                                <span className='cursor-pointer text-white bg-pink p-2 text-2xl rounded-full'><AiOutlineInstagram /></span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-white text-2xl font-bold ">Useful Links</h2>
                        <div >
                            <ul className="text-[#CED5F1] text-lg space-y-3">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Animals</li>
                                <li>Foundation</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-white text-2xl font-bold ">Instagram</h2>
                        <div >
                            
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-white text-2xl font-bold ">Drop a Message</h2>
                        <div className="flex flex-col space-y-4 text-white">
                           <input type="text" placeholder="Enter Your Email" className="px-4 py-5 rounded-3xl" name="" id="" />
                           <button className="text-xl font-semibold bg-pink py-3 rounded-2xl w-3/4">Subscribe</button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="">
                <p className="text-[#CED5F1] border-t border-[#CED5F1] text-center py-6">© 2022 ENVALAB. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;