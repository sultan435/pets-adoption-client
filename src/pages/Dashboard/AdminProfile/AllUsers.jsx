import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
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
        <div className="py-16 min-h-screen bg-offWhite">
            <div className="px-8">
            <h1 className='text-5xl text-gray text-center font-bold'>All <span className="text-orange">User</span> List</h1>
                <div className="overflow-x-auto rounded-lg mt-10">
                    <table className="table" >
                        <thead>
                            <tr className="bg-orange text-black">
                                <th className="text-lg py-5 font-bold">#</th>
                                <th className="text-lg py-5 font-bold">Image</th>
                                <th className="text-lg py-5 font-bold">Name</th>
                                <th className="text-lg py-5 font-bold">Email</th>
                                <th className="text-lg py-5 font-bold">Role</th>
                                <th className="text-lg py-5 font-bold">ACTION</th>
                                <th className="text-lg py-5 font-bold">ACTION</th>
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
                                    <td className="text-base font-bold">
                                        {user.name}
                                    </td>
                                    <td>
                                        <div>
                                            <div className="text-red-600 font-medium">{user.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                           user.role === "admin" ? <button className="bg-orange py-3 px-4 rounded-lg text-black font-semibold">Admin</button> :  <button className="bg-gray py-4 px-6 rounded-lg text-white font-semibol">User</button>
                                        }

                                    </td>
                                    <td>
                                        {
                                            <button onClick={()=> handleMakeAdmin(user)} className="bg-orange py-3 px-4 rounded-lg text-black font-semibold">Admin</button>
                                        }

                                    </td>
                                    <th>
                                        <button className="bg-gray py-3 px-4 rounded-lg text-white font-semibold">Delete</button>
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