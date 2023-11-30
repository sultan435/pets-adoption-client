import { NavLink,  useParams } from "react-router-dom";
import Container from "../../components/Ui/Container/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../assets/banner-1.jpg'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)

const DonationDetails = () => {
    const params = useParams()
    const axiosPublicHook = useAxiosPublic()

    const {data: donationDetails = []} = useQuery({
        queryKey: ["donationDetails-payment"],
        queryFn:async()=>{
            const res = await axiosPublicHook.get(`/user/donation-campaign-details/${params.id}`)
            return res.data
        }
    })

    return (
        <div className="pt-36">
           <div className="hero h-[350px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-5xl font-bold text-orange ">Payment<span className="text-gray"> Donation</span></h1>
                        <div className="border-2 border-orange w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-offWhite py-5 flex justify-center items-center mb-16">
                <NavLink
                    to="/"
                    className="hover:text-orange font-medium uppercase"
                >
                    Home
                </NavLink>
                <BsArrowRightShort className="text-2xl mx-1" />
                <NavLink
                    to="/donationCampaigns"
                    className="hover:text-orange font-medium uppercase"
                >
                    Donation Campaigns
                </NavLink>
            </div>
            <Container>
                <div className="flex flex-col lg:flex-row mb-16 gap-10">
                    <div className="flex-1">
                        <img className="w-full h-full rounded-lg" src={donationDetails.image} alt="" />
                    </div>
                    <div className="flex-1 space-y-4">
                        <span><p className="text-5xl font-bold text-violet">Make a Donation and Save Lives</p></span>
                        <h3 className="text-5xl">{donationDetails.name}</h3>
                        <p >Thanks to generous supporters like you, North Shore Animal League America has saved the lives of more than 1,100,000 dogs, cats, puppies, and kittens. Many have been the victims of abuse and neglect.</p>
                        <p>Your tax-deductible donation helps us continue the critical hands-on work we do every day and bring these homeless animals to safety, provide them with high-quality medical care to rehabilitate them and prepare them for adoption into loving, responsible homes.</p>
                        <div className="pt-6">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm image={donationDetails.image} name={donationDetails.name} ownerEmail={donationDetails.ownerEmail}></CheckoutForm>
                            </Elements>
                        </div>                      
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DonationDetails;