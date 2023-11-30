import Swal from "sweetalert2";
import useAllUsers from "../../../hooks/useAllUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const [usersInfo, refetch] =useAllUsers()

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
                  refetch()
            }
        })
    }

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/users-info/${user._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",                       
                        text: `${user.name}has been deleted.`,
                        icon: "success"
                    });
                }
            }
        });
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
                                    <td className="text-base font-semibold text-gray">
                                        {
                                           user.role === "admin" ? "ADMIN" : "USER"
                                        }
                                    </td>
                                    <td>
                                        {
                                            <button onClick={()=> handleMakeAdmin(user)} className="bg-orange py-3 px-4 rounded-lg text-black font-semibold">Admin</button>
                                        }
                                    </td>
                                    <th>
                                        <button onClick={()=> handleDeleteUser(user)} className="bg-gray py-3 px-4 rounded-lg text-white font-semibold">Delete</button>
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