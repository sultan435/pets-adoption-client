import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckoutForm = ({amount}) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const stripe = useStripe()
    const elements = useElements()

    const axiosSecure = useAxiosSecure()
    const donation = amount.reduce((total, item) => total + item.price, 0)

    // console.log(amount)
    useEffect(()=>{
         axiosSecure.post('/create-payment-intent', donation)
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, donation])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if(error){
            console.log('error', error);
            setError(error.message)
        }
        else{
            console.log('paymentMethod', paymentMethod);
            setError('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
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
            <button className="py-2 px-3 bg-purple-700 text-white rounded-lg mt-6" type="submit" disabled={!stripe || !clientSecret}>
                Donation Pay
            </button>
            <p className="text-red-600">{error}</p>
            {/* {transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>} */}
        </form>
    );
};

export default CheckoutForm;