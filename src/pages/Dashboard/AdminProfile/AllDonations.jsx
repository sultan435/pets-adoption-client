import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import useAllDonationCampaigns from "../../../hooks/useAllDonationCampaigns";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllDonations = () => {
    const [donationsItem, refetch] = useAllDonationCampaigns()
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
                const res = await axiosSecure.delete(`/user/donation-campaign-delete/${id}`)
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
        <div>
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
                                <th className="text-lg py-4">Maximum Amount</th>                                                   
                                <th className="text-lg py-4">ACTION</th>
                                <th className="text-lg py-4">ACTION</th>
                                <th className="text-lg py-4">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>                      
                            {
                                donationsItem.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td >
                                        <div className="avatar flex items-center gap-2">
                                            <div className="mask mask-square w-14 h-14">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                            <div className="">
                                                <p className="text-lg font-semibold">{item.name}</p>                                           
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg font-semibold">
                                        {item.maximumAmount}
                                    </td>
                                    
                                    
                                    <td>
                                        {
                                            <button  className="btn bg-[#D1A054]">Paused</button>
                                        }

                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateMyDonationCampaign/${item._id}`}>
                                            <button  className="btn bg-[#D1A054]">Update</button>
                                        </Link>
                                        

                                    </td>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="btn bg-red-700">Delete<FaTrashAlt className="text-white"></FaTrashAlt></button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllDonations;