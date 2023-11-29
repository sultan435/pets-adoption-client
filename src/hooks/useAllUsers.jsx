import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: usersInfo = [],refetch } = useQuery({
        queryKey: ["user-information"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users-info')
            return res.data;
        }
    })
    return [usersInfo, refetch]
};

export default useAllUsers;