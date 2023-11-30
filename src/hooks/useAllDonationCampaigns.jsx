import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllDonationCampaigns = () => {
    const axiosSecure = useAxiosSecure()

    const { data: donationsItem = [],refetch } = useQuery({
        queryKey: ["donation-campaigns"],
        queryFn: async () => {
            const res = await axiosSecure.get('/user/donation-campaign')
            return res.data;
        }
    })
    return [donationsItem,refetch]
};

export default useAllDonationCampaigns;