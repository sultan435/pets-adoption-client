import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyAddedPets = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: myPets = [], refetch } = useQuery({
        queryKey: ["my-add-pets", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/pets?email=${user.email}`)
            return res.data
        }
    })
    return [myPets, refetch]
};

export default useMyAddedPets;