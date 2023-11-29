import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useDonation from "../../../hooks/useDonation";

const MyDonation = () => {
    const axiosSecure = useAxiosSecure()

    const [myDonations, refetch] = useDonation()

    const handleRfund = (item) => {
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
                const res = await axiosSecure.delete(`/users/payments-delete/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",                       
                        text: "Payment has been Refund.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div className="py-16 min-h-screen bg-offWhite">
            <div className="px-8">
                <h1 className='text-5xl text-gray text-center font-bold'>My <span className="text-orange">Donation</span></h1>
                <div className="overflow-x-auto rounded-lg mt-10">
                    <table className="table">
                        <thead>
                            <tr className="bg-orange text-black">
                                <th className="text-lg py-5 font-bold">
                                    #
                                </th>
                                <th className="text-lg py-5 font-bold">Image</th>
                                <th className="text-lg py-5 font-bold">Name</th>
                                <th className="text-lg py-5 font-bold">Donation Amount</th>
                                <th className="text-lg py-5 font-bold">Action</th>


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
                                    <td className="text-base font-bold">
                                        {item.name}
                                    </td>
                                    <td className="">
                                        <p className="text-lg font-semibold"><span className="text-xl text-gray">$</span>{item.donation}</p>
                                    </td>
                                   <td>                                     
                                            <button onClick={() => handleRfund(item)} className="bg-orange text-lg py-4 px-6 rounded-lg text-black font-semibold">Refund</button>                                       
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