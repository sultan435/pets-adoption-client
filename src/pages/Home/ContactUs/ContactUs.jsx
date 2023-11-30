import Container from "../../../components/Ui/Container/Container";
import image from '../../../assets/contact.png'
// import { VscCallOutgoing } from "react-icons/vsc";


const ContactUs = () => {
    return (       
            <div className="pt-20 mb-10">
                <Container>
                    <div className=" flex gap-8 flex-col md:flex-row">
                        <div className="flex-1">
                            <img className="w-full h-full rounded-xl" src={image} alt="" />
                        </div>
                        <div className="flex-1">
                            <div>
                                <p className="text-orange mb-3 text-xl uppercase font-semibold">---- CONTACT WITH US</p>                      
                                <h1 className="text-5xl text-gray uppercase mb-7 font-bold">Meet Our Adorable Pets Looking for Forever Homes</h1>
                                <p className="text-gray font-medium mb-7"> You save a life. All animals at our shelter are in need of a second chance. They have been lost, given up or abandoned. They are all unwanted and helpless.</p>
                            </div>
                            <button className="py-3 text-xl text-black bg-orange px-10 hover:bg-orange transition font-semibold rounded-xl">Contact us</button>
                        </div>
                    </div>
                    <div>
                    <div className="flex justify-center items-center text-5xl bg-gray text-white h-56 text-center rounded-xl mt-24">
                                <p className=" font-medium">Call Us: +88 01833225351</p>
                               
                            </div>
                    </div>
                </Container>
            </div>

        
    );
};

export default ContactUs;