import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import useDonationCampaign from "../../../hooks/useDonationCampaign";
import useDonation from "../../../hooks/useDonation";

const MyDonationCampaigns = () => {
    const [MyDonationCampaigns] = useDonationCampaign()
    const [myDonations] = useDonation()
    const totalDonation = myDonations.reduce((total, item) => total + item.donation, 0)
    const progress = (totalDonation / 10000)*100

    return (
        <div className="py-16  min-h-screen bg-offWhite">
            <div className="px-8">
                <h1 className='text-5xl text-gray text-center font-bold'>My <span className="text-orange">Donation</span> Campaign</h1>
                <div className="overflow-x-auto rounded-lg mt-10">
                    <table className="table">
                        <thead>
                            <tr className="bg-orange text-black">
                                <th className="text-lg py-5 font-bold">#</th>
                                <th className="text-lg py-5 font-bold">Image</th>
                                <th className="text-lg py-5 font-bold">Maximum Donation</th>
                                <th className="text-lg py-5 font-bold">Progress Bar</th>
                                <th className="text-lg py-5 font-bold">Action</th>
                                <th className="text-lg py-5 font-bold">Action</th>
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
                                                <div className="text-base font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <p className="text-lg font-semibold"><span className="text-xl text-gray">$</span>{item.maximumAmount}</p>
                                    </td>
                                    <td>
                                        <ProgressBar completed={progress} maxCompleted={100} />
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateMyDonationCampaign/${item._id}`}>
                                            <button className="bg-orange text-base py-3 px-4 rounded-lg text-black font-semibold">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link >
                                            <button className="bg-gray text-base py-3 px-4 rounded-lg text-white font-semibold">Pause</button>
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