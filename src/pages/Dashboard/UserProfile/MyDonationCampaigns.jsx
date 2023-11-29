import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
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
    // console.log(MyDonationCampaigns);



    return (
        <div className="py-16  min-h-screen bg-offWhite">
            <div className="px-8">
                <h1 className='text-5xl text-gray text-center font-bold'>My <span className="text-orange">Donation</span> Campaign</h1>
                <div className="overflow-x-auto rounded-lg mt-10">
                    <table className="table">
                        <thead>
                            <tr className="bg-orange text-black">
                                <th className="text-lg py-7 font-bold">
                                    #
                                </th>
                                <th className="text-lg py-7 font-bold">Image</th>
                                <th className="text-lg py-7 font-bold">Maximum Donation</th>
                                <th className="text-lg py-7 font-bold">Progress Bar</th>
                                <th className="text-lg py-7 font-bold">Action</th>
                                <th className="text-lg py-7 font-bold">Action</th>


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
                                                <div className="text-lg font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">

                                        <p className="text-xl font-semibold"><span className="text-2xl text-gray">$</span>{item.maximumAmount}</p>
                                    </td>
                                    <td>
                                        <ProgressBar completed={item.progress} maxCompleted={100} />


                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateMyDonationCampaign/${item._id}`}>


                                            <button className="bg-orange text-lg py-4 px-6 rounded-lg text-black font-semibold">Update</button>

                                        </Link>

                                    </td>
                                    <td>
                                        <Link >


                                            <button className="bg-gray text-lg py-4 px-6 rounded-lg text-white font-semibold">Pause</button>

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