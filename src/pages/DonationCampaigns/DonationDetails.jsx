import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/Ui/SectionTitle/SectionTitle";
import Container from "../../components/Ui/Container/Container";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import DonationSection from "./DonationSection";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)

const DonationDetails = () => {
    // const [amount, setAmount] = useState('')
    const { image, name} = useLoaderData();

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
                        {/* <form>
                            <div className="mb-4 flex flex-col">
                                <label>
                                    <span className="text-[#403F3F] text-2xl font-semibold">Donation Amount</span>
                                </label>
                                <input
                                    type="number"
                                    onBlur={(e)=>setAmount(e.target.value)}
                                    name="amount"
                                    className="border-2 border-gray-400 hover:border-[#f1823d] transition py-2 mt-2 px-2 bg-[#f8f3e8] outline-none"
                                    required />
                            </div>
                        </form> */}
                        {/* <div className="pt-6">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm amount={amount}></CheckoutForm>
                            </Elements>
                        </div> */}
                        <button className="py-4 px-4 text-xl bg-pink text-black font-bold rounded-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Donation Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box text-black w-11/12 max-w-5xl">
                                <form>

                                    <div className="flex flex-col w-full">
                                        <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Donation Amount</label>
                                        <input className="border-2 border-red-400 outline-none px-2 py-2 rounded-lg" type="text" placeholder="Enter Amount" name="amount" />
                                    </div>
                                    {/* <div className="pt-6">
                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm amount={donatedAmount}></CheckoutForm>
                                            </Elements>
                                        </div> */}


                                    {/* <div className=" w-full hidden">
                                        <input className="border px-2 py-2 rounded-lg" type="text" defaultValue={email} name="ownerEmail" />
                                    </div> */}
                                    <input method="dialog" className=" px-4 py-3 cursor-pointer bg-pink text-white rounded-lg font-medium mt-4 w-full" type="submit" value="Submit" onClick={() => document.getElementById('my_modal_5').close()} />
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        moreDonations.map((donation)=><DonationSection key={donation._id} donation={moreDonations}></DonationSection>)
                    }
                    
                </div> */}
            </Container>
        </div>
    );
};

export default DonationDetails;