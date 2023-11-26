import useAxiosSecure from "../../hooks/useAxiosSecure";

const Sidebar = ({ email }) => {
    const axiosSecure = useAxiosSecure();

    const handleAdoption = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const ownerEmail = event.target.ownerEmail.value;
    
        const date = { name, email, phone, address,ownerEmail }
        console.log(date);
       

        axiosSecure.post('/user/pet-adoption', date)
            .then(res => console.log(res.data))
    }
    return (
        <div className="sticky top-28 rounded-xl w-full bg-violet shadow-xl p-8 space-y-2 text-white">
            <h2 className="text-3xl mb-5">Interested in Adopting?</h2>
            <p className="text-sm pb-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <button className="w-full py-4 bg-pink text-black font-bold rounded-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Adopted</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black">
                    <form onSubmit={handleAdoption}>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Name</label>
                                <input className="border px-2 py-2 rounded-lg" type="text" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Email</label>
                                <input className="border px-2 py-2 rounded-lg" type="email" placeholder="Enter Email" name="email" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Phone Number</label>
                                <input className="border px-2 py-2 rounded-lg" type="text" placeholder="Enter Phone Number" name="phone" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Address</label>
                                <input className="border px-2 py-2 rounded-lg" type="text" placeholder="Enter Address" name="address" />
                            </div>

                        </div>
                        <div className=" w-full hidden">
                        <input className="border px-2 py-2 rounded-lg" type="text" defaultValue={email}  name="ownerEmail" />
                        </div>
                        <input method="dialog" className=" px-4 py-3 cursor-pointer bg-pink text-white rounded-lg font-medium mt-4 w-full" type="submit" value="Submit" onClick={() => document.getElementById('my_modal_5').close()} />
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Sidebar;