import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyDonation = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: myDonations = [] } = useQuery({
        queryKey: ["myDonations-history", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/payments?email=${user.email}`)
            return res.data
        }
    })
    console.log(myDonations);
    return (
        <div className="pt-16 min-h-screen bg-offWhite">
            <div className="px-8">
                <h1 className='text-5xl text-gray text-center font-bold'>My <span className="text-orange">Donation</span></h1>
                <div className="overflow-x-auto rounded-lg mt-10">
                    <table className="table">
                        <thead>
                            <tr className="bg-orange text-black">
                                <th className="text-lg py-7 font-bold">
                                    #
                                </th>
                                <th className="text-lg py-7 font-bold">Image</th>
                                <th className="text-lg py-7 font-bold">Name</th>
                                <th className="text-lg py-7 font-bold">Donation Amount</th>


                                <th className="text-lg py-7 font-bold">Action</th>


                            </tr>
                        </thead>
                        <tbody >
                            {
                                myDonations?.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="">
                                            <div className="avatar">
                                                <div className="mask mask-square w-14 h-14">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td className="text-lg font-bold">
                                        {item.name}
                                    </td>
                                    <td className="">
                                        <p className="text-xl font-semibold"><span className="text-2xl text-gray">$</span>{item.donation}</p>
                                    </td>
                                   <td>
                                        <Link >
                                            <button className="bg-orange text-lg py-4 px-6 rounded-lg text-black font-semibold">Refund</button>
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

export default MyDonation;