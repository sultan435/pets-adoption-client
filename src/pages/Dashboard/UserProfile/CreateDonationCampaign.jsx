import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import moment from "moment";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonationCampaign = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm()

    const axiosPublicHook = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const onSubmit = async (data) => {
        // console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await axiosPublicHook.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })

        const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        const progress = 60;
        if (user && user.email && res.data.success) {
            const petItem = {
                name: data.name,               
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                image: res.data.data.display_url,
                maximumAmount:parseInt(data.maximumAmount),
                highestAmount:data.highestAmount,
                dateAndTime: dateTime,
                ownerEmail: user.email,
                progress: progress,
            }
            const addPet = await axiosSecure.post('/user/create-donation-campaign', petItem)
            console.log(addPet.data);
            if (addPet.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the Donation Campaign item`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        // console.log(res.data);
    }
    return (
        <div>
            <div className="bg-offWhite min-h-screen">
                <div className='pt-16 px-4 lg:px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] text-center font-semibold'>Create Donation<span className="text-orange"> Campaign</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='shadow-xl p-10 rounded-xl'>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Name</span>
                                </label>
                               
                                    <input type="text" {...register("name", { required: true })} placeholder="Enter Name" className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Image</span>
                                </label>
                               
                                    <input type="file" {...register("image", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                    {errors.image && <span className='text-red-500'>Image is required</span>}
                            </div>

                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Maximum Amount</span>
                                </label>
                                
                                    <input type="number" {...register("maximumAmount", { required: true })} placeholder="Enter Name" className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                    {errors.maximumAmount && <span className='text-red-500'>MaximumAmount is required</span>}
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Highest Amount</span>
                                </label>
                                
                                    <input type="number" {...register("highestAmount", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                    {errors.highestAmount && <span className='text-red-500'>HighestAmount is required</span>}
                            </div>

                        </div>
                        <div className='w-full'>
                            <label >
                                <span className="text-base pl-1 text-gray font-medium">Short Description</span>
                            </label>
                            <textarea className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" placeholder="Enter Short Description" {...register("shortDescription", { required: true })} id="" cols="30" rows="1"></textarea>
                            {errors.shortDescription && <span className='text-red-500'>ShortDescription is required</span>}
                        </div>
                        <div className='w-full'>
                            <label >
                                <span className="text-base pl-1 text-gray font-medium">Long Description</span>
                            </label>
                            <textarea className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" placeholder="Enter Long Description" {...register("longDescription", { required: true })} id="" cols="30" rows="3"></textarea>
                            {errors.longDescription && <span className='text-red-500'>LongDescription is required</span>}
                        </div>

                        <input type="submit" value="Create Donation" className='py-4 mt-4 cursor-pointer w-full rounded-lg bg-orange text-black text-lg font-bold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateDonationCampaign;