import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/Ui/SectionTitle/SectionTitle";
import Container from "../../components/Ui/Container/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import DonationSection from "./DonationSection";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)

const DonationDetails = () => {
    const { image, name, ownerEmail } = useLoaderData();

    // const axiosSecure = useAxiosSecure()

    // const {data: moreDonations = []} = useQuery({
    //     queryKey: ["more-donation-section"],
    //     queryFn:async()=>{
    //         const res = await axiosSecure.get(`/user/donation-section/${_id}`)
    //         return res.data
    //     }
    // })
    // console.log(moreDonations);
    // console.log(amount);


    return (
        <div className="mt-24">
            <SectionTitle subHeading="Donation" heading="Your Money saves Lives"></SectionTitle>
            <Container>
                <div className="flex mb-10 gap-4">
                    <div className="flex-1">
                        <img className="w-full h-full" src={image} alt="" />
                    </div>
                    <div className="flex-1 space-y-4">
                        <span><p className="text-5xl font-bold text-violet">Make a Donation and Save Lives</p></span>
                        <h3 className="text-5xl">{name}</h3>
                        <p >Thanks to generous supporters like you, North Shore Animal League America has saved the lives of more than 1,100,000 dogs, cats, puppies, and kittens. Many have been the victims of abuse and neglect.</p>
                        <p>Your tax-deductible donation helps us continue the critical hands-on work we do every day and bring these homeless animals to safety, provide them with high-quality medical care to rehabilitate them and prepare them for adoption into loving, responsible homes.</p>
                        <div className="pt-6">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm image={image} name={name} ownerEmail={ownerEmail}></CheckoutForm>
                            </Elements>
                        </div>                      
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DonationDetails;