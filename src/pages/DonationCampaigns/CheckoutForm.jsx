import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ name, image, ownerEmail }) => {
    const [error, setError] = useState('')
    const [donation, setDonation] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const [transactionId, setTransactionId] = useState()
    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()


    const axiosSecure = useAxiosSecure()
    // const donation = amount.reduce((total, item) => total + item.price, 0)

    // console.log(amount)
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { donation })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, donation])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log('error', error);
            setError(error.message)
        }
        else {
            console.log('paymentMethod', paymentMethod);
            setError('')
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    donation: parseInt(donation),
                    transactionId: paymentIntent.id,
                    name: name,
                    image: image,
                    ownerEmail: ownerEmail,

                }
                const res = await axiosSecure.post('/users/payments', payment)
                // console.log('payment save', res.data);
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Donation Payment has been successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   

                }
            }
        }

    }
    return (

        <div>
            <button className="w-full py-4 bg-orange text-black font-bold rounded-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Donate Now</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black">
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-6">
                <label>
                    <span className="text-[#403F3F] text-2xl font-semibold">Donation Amount</span>
                </label>
                <input
                    type="number"
                    onBlur={(e) => setDonation(e.target.value)}
                    name="amount"
                    placeholder="Enter Donatio Amount"
                    className="border rounded-lg border-gray-400 hover:border-[#f1823d]  transition py-2 mt-2 px-2 bg-[#f8f3e8] outline-none"
                    required />

            </div>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
             <input method="dialog" className=" px-4 py-3 cursor-pointer bg-orange text-white rounded-lg font-medium mt-4 w-full" disabled={!stripe || !clientSecret} type="submit" value="Donation Pay" onClick={() => document.getElementById('my_modal_5').close()} />
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>}
                       
                    </form>
                </div>
            </dialog>
        </div>


        // <form onSubmit={handleSubmit}>
        //     <div className="flex flex-col mb-6">
        //         <label>
        //             <span className="text-[#403F3F] text-2xl font-semibold">Donation Amount</span>
        //         </label>
        //         <input
        //             type="number"
        //             onBlur={(e) => setDonation(e.target.value)}
        //             name="amount"
        //             placeholder="Enter Donatio Amount"
        //             className="border rounded-lg border-gray-400 hover:border-[#f1823d]  transition py-2 mt-2 px-2 bg-[#f8f3e8] outline-none"
        //             required />

        //     </div>
        //     <CardElement
        //         options={{
        //             style: {
        //                 base: {
        //                     fontSize: '16px',
        //                     color: '#424770',
        //                     '::placeholder': {
        //                         color: '#aab7c4',
        //                     },
        //                 },
        //                 invalid: {
        //                     color: '#9e2146',
        //                 },
        //             },
        //         }}
        //     />
        //     <button className="py-2 px-5 bg-orange text-black font-bold rounded-lg mt-6" type="submit" disabled={!stripe || !clientSecret}>
        //         Donation Pay
        //     </button>
        //     <p className="text-red-600">{error}</p>
        //     {transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>}
        // </form >
    );
};

export default CheckoutForm;