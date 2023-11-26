import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const MyAddPets = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: myPets = [], refetch } = useQuery({
        queryKey: ["my-add-pets", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/pets?email=${user.email}`)
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
                        // text: `${id.name} has been deleted.`,
                        text: "item has been deleted.",
                        icon: "success"
                    });
                }



            }
        });
    }



    return (
        <div className="pt-10 min-h-screen bg-[#f8f3e8]">
            <div className="px-8">
                <SectionTitle subHeading="Hurry Up!" heading="MANAGE ALL ITEMS"></SectionTitle>
                <div className="overflow-x-auto rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#f1823d] text-[#333333]">
                                <th className="text-lg py-4">
                                    #
                                </th>
                                <th className="text-lg py-4">Image</th>
                                <th className="text-lg py-4">Category</th>
                                <th className="text-lg py-4">Status</th>
                                <th className="text-lg py-4">Action</th>
                                <th className="text-lg py-4">Action</th>
                                <th className="text-lg py-4">Action</th>

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
                                                <div className="text-sm font-bold opacity-90">{item.name}</div>
                                                <div className="text-sm font-bold opacity-70">{item.age}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">

                                        {item.category}
                                    </td>
                                    <td>
                                        {item.adoption === true ? "Adoption" : "Not Adoption"}

                                    </td>
                                    <td>
                                        <Link >
                                            <div className="flex items-center gap-2 bg-pink py-2 pl-3 rounded-md">
                                                <span><FaEdit /></span>
                                                <button className="">Adopted</button>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updatePetItem/${item._id}`}>
                                            <div className="flex items-center gap-2 bg-pink py-2 pl-3 rounded-md">
                                                <span><FaEdit /></span>
                                                <button className="">Update</button>
                                            </div>
                                        </Link>

                                    </td>
                                    <td>
                                        <div onClick={() => handleDelete(item._id)} className="flex items-center gap-2 bg-pink py-2 pl-3 rounded-md">
                                            <span><FaTrashAlt /></span>
                                            <button className="">Delete</button>
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