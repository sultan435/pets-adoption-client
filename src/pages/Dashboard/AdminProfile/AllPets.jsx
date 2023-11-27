import { FaTrashAlt } from "react-icons/fa";
import useAllPets from "../../../hooks/useAllPets";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const AllPets = () => {

    const [allPets, refetch] = useAllPets()

    const axiosSecure = useAxiosSecure()

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
                                <th className="text-lg py-4">Category</th>
                                <th className="text-lg py-4">Location</th>

                                <th className="text-lg py-4">ACTION</th>
                                <th className="text-lg py-4">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allPets.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td >
                                        <div className="avatar flex gap-2">
                                            <div className="mask mask-square w-14 h-14">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold">{item.name}</p>
                                                <p className="text-sm">{item.age}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg font-semibold">
                                        {item.category}
                                    </td>
                                    <td>
                                        <div>
                                            <div className="text-[#737373]">{item.location}</div>
                                        </div>
                                    </td>

                                    <td>
                                        <Link to={`/dashboard/updatePetItem/${item._id}`}>

                                            <button className="btn bg-[#D1A054]">Update</button>
                                        </Link>



                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn bg-red-700">Delete<FaTrashAlt className="text-white"></FaTrashAlt></button>
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

export default AllPets;