import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdoptionRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: adoptionRequest = [] } = useQuery({
        queryKey: ["pet-adoption-request", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/pet-adoption?email=${user.email}`)
            return res.data
        }
    })
    console.log(adoptionRequest);
    return (

        <div>
            <div className="py-16 min-h-screen bg-offWhite">
                <div className="px-8">
                    <h1 className='text-5xl text-gray text-center font-bold'><span className="text-orange">Adoption</span> Request</h1>
                    <div className="overflow-x-auto rounded-lg mt-10">
                        <table className="table">

                            <thead>
                                <tr className="bg-orange text-black">
                                    <th className="text-lg py-7 font-bold">
                                        #
                                    </th>
                                    <th className="text-lg py-7 font-bold">Name</th>
                                    <th className="text-lg py-7 font-bold">Phone Number</th>
                                    <th className="text-lg py-7 font-bold">Email</th>
                                    <th className="text-lg py-7 font-bold">Location</th>
                                    <th className="text-lg py-7 font-bold">Action</th>
                                    <th className="text-lg py-7 font-bold">Action</th>

                                </tr>
                            </thead>
                            <tbody >
                                {
                                    adoptionRequest?.map((item, index) => <tr key={item._id}>

                                        <th>
                                            {index + 1}
                                        </th>

                                        <td className="text-lg font-bold">

                                            {item.name}
                                        </td>
                                        <td className="text-lg font-bold text-gray">
                                            {item.phone}
                                        </td>
                                        <td className="text-lg font-bold text-red-400">
                                            {item.email}
                                        </td>

                                        <td className="text-lg font-bold text-gray">
                                            {item.address}
                                        </td>
                                        <td>
                                            <Link >
                                                <button className="bg-orange py-4 px-6 rounded-lg text-black font-semibold">Accept</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link >
                                                <button className="bg-gray py-4 px-6 rounded-lg text-white font-semibold">Reject</button>
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