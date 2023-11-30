import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllPets = () => {
    const axiosSecure = useAxiosSecure()

    const {data: allPets = [], refetch} = useQuery({
        queryKey:["allUsers-allPets"],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users/pets')
            return res.data
        }
    })
    return [allPets, refetch]
};

export default useAllPets;