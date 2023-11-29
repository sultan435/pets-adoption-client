import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDonationCampaign = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: MyDonationCampaigns = [] } = useQuery({
        queryKey: ["my-donations-campaigns", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/donation-campaign?email=${user.email}`)
            return res.data
        }
    })
    return [MyDonationCampaigns]
};

export default useDonationCampaign;