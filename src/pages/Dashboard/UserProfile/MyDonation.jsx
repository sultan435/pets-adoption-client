import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MyDonation = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: myDonations = []} = useQuery({
        queryKey: ["myDonations-history", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/payments?email=${user.email}`)
            return res.data
        }
    })
    console.log(myDonations);
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
                                <th className="text-lg py-4">Name</th>
                                <th className="text-lg py-4">Donation Amount</th>
                              
                              
                                <th className="text-lg py-4">Action</th>


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
                                    <td className="text-xl">

                                       {item.name}
                                    </td>
                                    <td className="">

                                       <span className="text-xl">$</span>{item.donation}
                                    </td>
                                   
                                   
                                    <td>
                                        <Link >
                                            <div className="bg-gray-600 text-white text-center py-2 rounded-md">
                                                
                                                <button className="">Refund</button>
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

export default MyDonation;