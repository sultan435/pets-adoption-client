import Container from "../../../components/Ui/Container/Container";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/image-1.jpg'
import img2 from '../../../assets/home/image-2.jpg'
import img3 from '../../../assets/home/image-3.jpg'
import img4 from '../../../assets/home/image-4.jpg'

const ProtectAnimals = () => {
    return (
        <div className="pb-10">
            <Container>
                <SectionTitle subHeading="what we do" heading="what we do to protect animals"></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 ">
                    <div>
                        <div className="relative flex flex-col text-gray-700 bg-offWhite shadow-md hover:-translate-y-2 overflow-hidden transition duration-200 rounded-xl bg-clip-border">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                <img className="w-full h-full" src={img1} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="block mb-2 text-xl font-bold tracking-normal text-gray">
                                Raising money to help
                                </h4>
                                
                                <p className="block text-base  font-medium  text-slate-800 bg-clip-text">
                                Create a powerful and effective message for fundraising and YOU WILL GET DONATIONS instead of blank stares from prospective donors
                                </p>
                            </div>
                        </div>                      

                    </div>
                    <div>
                        <div className="relative flex flex-col bg-offWhite shadow-md hover:-translate-y-2 overflow-hidden transition duration-200 rounded-xl bg-clip-border">
                            <div className="relative mx-4 mt-4 overflow-hidden bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                <img className="w-full h-full" src={img2} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="block mb-2 text-xl  font-bold  tracking-normal text-gray">
                                Close work with services
                                </h4>
                                
                                <p className="block text-base font-medium bg-clip-text text-slate-800">
                                Create a powerful and effective message for fundraising and YOU WILL GET DONATIONS instead of blank stares from prospective donors
                                </p>
                            </div>
                        </div>                      
                    </div>
                    <div>
                        <div className="relative flex flex-col bg-offWhite shadow-md hover:-translate-y-2 overflow-hidden transition duration-200 rounded-xl bg-clip-border">
                            <div className="relative mx-4 mt-4 overflow-hidden  bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                <img className="w-full h-full" src={img3} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="block mb-2 text-xl  font-bold tracking-normal text-gray">
                                Pro Guided tours only
                                </h4>
                                
                                <p className="block text-base  font-medium  text-slate-800 bg-clip-text">
                                Create a powerful and effective message for fundraising and YOU WILL GET DONATIONS instead of blank stares from prospective donors
                                </p>
                            </div>
                        </div>                      
                    </div>
                    <div>
                        <div className="relative flex flex-col  bg-offWhite shadow-md hover:-translate-y-2 overflow-hidden transition duration-200 rounded-xl bg-clip-border">
                            <div className="relative mx-4 mt-4 overflow-hidden  bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                <img className="w-full h-full" src={img4} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="block mb-2 text-xl font-bold  tracking-normal text-gray">
                                Protecting animal area
                                </h4>                                
                                <p className="block text-base font-medium  text-slate-800 bg-clip-text">
                                Create a powerful and effective message for fundraising and YOU WILL GET DONATIONS instead of blank stares from prospective donors
                                </p>
                            </div>
                        </div>                      
                    </div>                   
                </div>
            </Container>
        </div>
    );
};

export default ProtectAnimals;