import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDonation = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: myDonations = [], refetch } = useQuery({
        queryKey: ["myDonations-history", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/payments?email=${user.email}`)
            return res.data
        }
    })
    return [myDonations, refetch]
};

export default useDonation;