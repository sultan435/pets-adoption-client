import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyAddPets = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: myPets = [], refetch } = useQuery({
        queryKey: ["my-add-pets", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/pets?email=${user.email}`)
            return res.data
        }
    })  
    const handleDelete = (id) => {
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
                const res = await axiosSecure.delete(`/user/pets-delete/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "item has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div className="py-16 min-h-screen bg-offWhite">
            <div className="px-8">
                <h1 className='text-5xl text-gray text-center font-bold'>My <span className="text-orange">Pet</span> List</h1>
                <div className="overflow-x-auto rounded-lg mt-10">
                    <table className="table">
                        <thead>
                            <tr className="bg-orange text-black">
                                <th className="text-lg py-5 font-bold">#</th>
                                <th className="text-lg py-5 font-bold">Image</th>
                                <th className="text-lg py-5 font-bold">Category</th>
                                <th className="text-lg py-5 font-bold">Status</th>
                                <th className="text-lg py-5 font-bold">Action</th>
                                <th className="text-lg py-5 font-bold">Action</th>
                                <th className="text-lg py-5 font-bold">Action</th>

                            </tr>
                        </thead>
                        <tbody >
                            {
                                myPets?.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-square w-14 h-14">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base font-bold">{item.name}</div>
                                                <div className="text-sm font-bold opacity-70">{item.age}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-base font-bold text-gray">

                                        {item.category}
                                    </td>
                                    <td className="text-gray font-medium">
                                        {item.adoption === true ? "Adoption" : "Not Adoption"}

                                    </td>
                                    <td>
                                        <Link >
                                            <button className="bg-orange py-3 px-4 rounded-lg text-black font-semibold">Adopted</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updatePetItem/${item._id}`}>
                                            <button className="bg-orange py-3 px-4 rounded-lg text-black font-semibold">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <div onClick={() => handleDelete(item._id)} className=" ">
                                            <button className="bg-gray py-3 px-4 rounded-lg text-white font-semibold">Delete</button>
                                        </div>
                                    </td>
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

export default MyAddPets;