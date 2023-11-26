import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdoptionRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: adoptionRequest = [] } = useQuery({
        queryKey: ["pet-adoption-request",user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/pet-adoption?email=${user.email}`)
            return res.data
        }
    })
    console.log(adoptionRequest);
    return (
        
        <div>
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
                            <th className="text-lg py-4">Name</th>
                            <th className="text-lg py-4">Phone Number</th>
                            <th className="text-lg py-4">Email</th>
                            <th className="text-lg py-4">OwnerEmail</th>
                            <th className="text-lg py-4">Location</th>
                            <th className="text-lg py-4">Action</th>
                            <th className="text-lg py-4">Action</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            adoptionRequest?.map((item, index) => <tr key={item._id}>
                         
                                <th>
                                    {index + 1}
                                </th>
                               
                                <td className="">

                                    {item.name}
                                </td>
                                <td>
                                  {item.phone}                    
                                </td>
                                <td>
                                  {item.email}                    
                                </td>
                                <td>
                                  {item.ownerEmail}                    
                                </td>
                                <td>
                                  {item.address}                    
                                </td>
                                <td>
                                    <Link >
                                        <button className="btn btn-neutral">Accept</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link >
                                        <button className="btn btn-neutral">Reject</button>
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
        </div>
    );
};

export default AdoptionRequest;