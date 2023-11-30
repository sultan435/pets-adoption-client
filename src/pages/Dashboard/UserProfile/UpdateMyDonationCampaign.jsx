import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMyDonationCampaign = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { name, shortDescription, maximumAmount, highestAmount, longDescription, _id } = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const axiosPublicHook = useAxiosPublic()


    const onSubmit = async (data) => {
        // console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await axiosPublicHook.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })

        if (res.data.success) {
            const updateItem = {
                name: data.name,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                image: res.data.data.display_url,
                maximumAmount: data.maximumAmount,
                highestAmount: data.highestAmount,
            }
            const myDonationPet = await axiosSecure.patch(`/user/donation-campaign-update/${_id}`, updateItem)
            console.log(myDonationPet.data);
            if (myDonationPet.data.modifiedCount > 0) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is update to the Donation Campaign item`,
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
                <div className=' pt-16 px-4 lg:px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] text-center font-semibold'>Update Donation<span className="text-orange"> Campaign</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='shadow-xl p-10 rounded-xl'>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Name</span>
                                </label>
                                <label>
                                    <input type="text" defaultValue={name} {...register("name", { required: true })} placeholder="Enter Name" className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-base pl-1">Image</span>
                                </label>

                                <input type="file"  {...register("image", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                {errors.image && <span className='text-red-500'>Image is required</span>}

                            </div>

                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Maximum Amount</span>
                                </label>
                                <label>
                                    <input type="number" defaultValue={maximumAmount} {...register("maximumAmount", { required: true })} placeholder="Enter Name" className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-base pl-1">Highest Amount</span>
                                </label>
                                <label>
                                    <input type="number" defaultValue={highestAmount} {...register("highestAmount", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" />
                                </label>
                            </div>

                        </div>
                        <div className='w-full'>
                            <label >
                                <span className="text-base pl-1 text-gray font-medium">Short Description</span>
                            </label>
                            <textarea className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" defaultValue={shortDescription} {...register("shortDescription", { required: true })} id="" cols="30" rows="1"></textarea>
                        </div>
                        <div className='w-full'>
                            <label >
                                <span className="text-base pl-1 text-gray font-medium">Long Description</span>
                            </label>
                            <textarea className="w-full border border-slate-400 py-3 px-4 bg-white my-2 outline-none rounded-xl" defaultValue={longDescription} {...register("longDescription", { required: true })} id="" cols="30" rows="3"></textarea>
                        </div>

                        <input type="submit" value="Update Donation" className='py-4 mt-4 outline-none cursor-pointer w-full rounded-lg bg-orange text-black text-lg font-bold' />
                    </form>
                </div>
            </div>
        </div>
    );
}


export default UpdateMyDonationCampaign;