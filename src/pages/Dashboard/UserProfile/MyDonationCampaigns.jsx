import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

const MyDonationCampaigns = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: MyDonationCampaigns = [] } = useQuery({
        queryKey: ["my-donations-campaigns", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/donation-campaign?email=${user.email}`)
            return res.data
        }
    })
    console.log(MyDonationCampaigns);



    return (
        <div className="pt-10 min-h-screen bg-[#f8f3e8]">
            <div className="px-8">
                <SectionTitle subHeading="Hurry Up!" heading="MANAGE ALL ITEMS"></SectionTitle>
                <div className="overflow-x-auto rounded-lg">
                    <table className="table">                    
                        <thead>
                            <tr className="bg-[#f1823d] text-[#333333]">
                                <th className="text-lg py-4">
                                    #
                                </th>
                                <th className="text-lg py-4">Image</th>
                                <th className="text-lg py-4">Maximum Donation</th>
                                <th className="text-lg py-4">Progress Bar</th>
                                <th className="text-lg py-4">Action</th>
                                <th className="text-lg py-4">Action</th>


                            </tr>
                        </thead>
                        <tbody >
                            {
                                MyDonationCampaigns?.map((item, index) => <tr key={item._id}>
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
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">

                                       <span className="text-xl">$</span>{item.maximumAmount}
                                    </td>
                                    <td>
                                    <ProgressBar completed= {item.progress} maxCompleted={100} />
                                       

                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateMyDonationCampaign/${item._id}`}>
                                            <div className="flex items-center justify-center gap-2 bg-gray-600 text-white py-2 rounded-md">
                                                <span><FaEdit /></span>
                                                <button className="">Update</button>
                                            </div>
                                        </Link>

                                    </td>
                                    <td>
                                        <Link >
                                            <div className="bg-gray-600 text-white text-center py-2 rounded-md">
                                                
                                                <button className="">Pause</button>
                                            </div>
                                        </Link>
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

export default MyDonationCampaigns;