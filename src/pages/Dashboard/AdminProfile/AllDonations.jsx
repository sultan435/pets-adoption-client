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
            <div className="py-16 min-h-screen bg-offWhite">
            <div className="px-8">
            <h1 className='text-5xl text-gray text-center font-bold'>All User <span className="text-orange">Donation</span> Campaign</h1>
                <div className="overflow-x-auto rounded-lg mt-10">
                    <table className="table" >
                        <thead>
                            <tr className="bg-orange text-black">
                                <th className="text-lg py-5 font-bold">#</th>
                                <th className="text-lg py-5 font-bold">Image</th>
                                <th className="text-lg py-5 font-bold">Maximum Amount</th>                                                   
                                <th className="text-lg py-5 font-bold">ACTION</th>
                                <th className="text-lg py-5 font-bold">ACTION</th>
                                <th className="text-lg py-5 font-bold">ACTION</th>
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
                                                <p className="text-base font-bold">{item.name}</p>                                           
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-base font-semibold">
                                    <p className="text-lg font-semibold"><span className="text-xl text-gray">$</span>{item.maximumAmount}</p>
                                    </td>
                                    
                                    
                                    <td>
                                        {
                                            <button  className="bg-orange py-3 px-4 rounded-lg text-black font-semibold">Paused</button>
                                        }

                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateMyDonationCampaign/${item._id}`}>
                                            <button  className="bg-orange py-3 px-4 rounded-lg text-black font-semibold">Update</button>
                                        </Link>
                                        

                                    </td>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="bg-gray py-3 px-4 rounded-lg text-white font-semibold">Delete</button>
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