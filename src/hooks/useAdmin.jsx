import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure= useAxiosSecure()
    const {user,isLoading} = useAuth()
    const {data: isAdmin, isPending: isAdminPending} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !isLoading,
        queryFn:async()=>{
            console.log('asking or checking is admin')
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            console.log(res.data);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminPending]
};

export default useAdmin;