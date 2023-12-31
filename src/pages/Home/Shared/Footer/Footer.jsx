import Container from "../../../../components/Ui/Container/Container";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import img1 from '../../../../assets/category/pet.png'
import img2 from '../../../../assets/category/cat.jpg'
import img3 from '../../../../assets/category/dog.jpg'
import img4 from '../../../../assets/category/robbit.jpg'
import img5 from '../../../../assets/category/pet.jpg'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-gray">
            <Container>
                <div className="py-24 flex justify-between flex-col lg:flex-row">
                    <div className="space-y-8 mb-10">
                        <div>
                            <Link to="/"><h2 className="text-white text-5xl font-bold "><span className="text-orange">PET</span>CO</h2></Link>
                        </div>
                        <div className="">
                            <p className="text-white font-bold text-lg">Location:<span className="text-slate-300 font-medium"> av. Washington 165, NY CA 54003</span></p>
                            <p className="text-white font-bold text-lg">Phone:<span className="text-slate-300 font-medium"> +8801833225351</span></p>
                            <p className="text-white font-bold text-lg">Email:<span className="text-slate-300 font-medium"> sultanmahmud5998@email.com</span></p>
                            <p className="text-white font-bold text-lg">Opening hours:<span className="text-slate-300 font-medium"> 9:00 AM - 5:00PM</span></p>
                        </div>
                        <div>
                            <div className='flex items-center mb-2 md:mb-0 gap-3'>
                                <span className='cursor-pointer text-white bg-orange p-2 text-2xl rounded-full'><FaFacebookF /></span>
                                <span className='cursor-pointer text-white bg-orange p-2 text-2xl rounded-full'><FaTwitter /></span>
                                <span className='cursor-pointer text-white bg-orange p-2 text-2xl rounded-full'><BsYoutube /></span>
                                <span className='cursor-pointer text-white bg-orange p-2 text-2xl rounded-full'><AiOutlineInstagram /></span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 mb-10">
                        <h2 className="text-white text-2xl font-bold ">Useful Links</h2>
                        <div >
                            <ul className="text-slate-300 text-lg space-y-3">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Animals</li>
                                <li>Foundation</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-8 mb-10">
                        <h2 className="text-white text-2xl font-bold ">Instagram</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <img className="w-24 rounded-xl" src={img1} alt="" />
                            <img className="w-24 rounded-xl" src={img2} alt="" />
                            <img className="w-24 rounded-xl" src={img3} alt="" />
                            <img className="w-24 rounded-xl" src={img4} alt="" />
                            <img className="w-24 rounded-xl" src={img5} alt="" />
                            <img className="w-24 rounded-xl" src={img1} alt="" />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-white text-2xl font-bold ">Drop a Message</h2>
                        <div className="flex flex-col space-y-4 text-white">
                           <input type="text" placeholder="Enter Your Email" className="px-4 py-5 rounded-3xl" name="" id="" />
                           <button className="text-xl font-semibold bg-orange py-3 text-white rounded-2xl w-3/4">Subscribe</button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="">
                <p className="text-slate-300 border-t border-[#CED5F1] text-center py-6">© 2022 ENVALAB. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;