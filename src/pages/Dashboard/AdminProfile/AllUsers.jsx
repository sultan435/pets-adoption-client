import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: usersInfo = [] } = useQuery({
        queryKey: ["user-information"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users-info')
            return res.data;
        }
    })

    const handleMakeAdmin = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div className="pt-10 min-h-screen bg-[#f8f3e8]">
            <div className="px-8">
                <SectionTitle subHeading="admin!" heading="all users"></SectionTitle>
                <div className="overflow-x-auto rounded-lg">
                    <table className="table" >
                        <thead>
                            <tr className="bg-[#f1823d] text-[#333333]">
                                <th className="text-lg py-4">
                                    #
                                </th>
                                <th className="text-lg py-4">Image</th>
                                <th className="text-lg py-4">Name</th>
                                <th className="text-lg py-4">Email</th>
                                <th className="text-lg py-4">Role</th>
                                <th className="text-lg py-4">ACTION</th>
                                <th className="text-lg py-4">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>                      
                            {
                                usersInfo.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td >
                                        <div className="avatar">
                                            <div className="mask mask-circle w-14 h-14">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-[#737373]">
                                        {user.name}
                                    </td>
                                    <td>
                                        <div>
                                            <div className="text-[#737373]">{user.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                           user.role === "admin" ? "admin" :  <button className="btn bg-[#D1A054]">User<FaUsers className="text-white"></FaUsers></button>
                                        }

                                    </td>
                                    <td>
                                        {
                                            <button onClick={()=> handleMakeAdmin(user)} className="btn bg-[#D1A054]">Admin</button>
                                        }

                                    </td>
                                    <th>
                                        <button className="btn bg-red-700"><FaTrashAlt className="text-white"></FaTrashAlt></button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;