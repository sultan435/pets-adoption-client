import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdatePet = () => {
    const { register, handleSubmit} = useForm()
    const {name, category, age, location, shortDescription, longDescription, _id} = useLoaderData()

    const axiosPublicHook = useAxiosPublic()
    const axiosSecure = useAxiosSecure()


    const onSubmit = async(data)=>{
        console.log(data);
        const imageFile = {image: data.image[0]}
        const res = await axiosPublicHook.post(image_hosting_api, imageFile, {
            headers:{
                "content-type": "multipart/form-data",
            }
        })
        if(res.data.success){
            const petItem ={
                name:data.name,
                age: data.age,
                category: data.category,
                location: data.location,
                shortDescription:data.shortDescription,
                longDescription:data.longDescription,
                image:res.data.data.display_url,
            }
            const updatePet = await axiosSecure.patch(`/user/pet-update/${_id}`, petItem)
            // console.log(addPet.data);
            if(updatePet.data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the pet item`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div>
            <div>
            <div className="bg-[#f8f3e8]">
                <div className=' py-10 px-4 lg:px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] mb-8 text-center font-semibold'>Updated <span className="text-pink">Pet</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1">Name</span>
                                </label>
                                <label>
                                    <input type="text" defaultValue={name} {...register("name", { required: true })} placeholder="Enter Name" className="border py-3 px-4 bg-white my-2 w-full outline-none" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-base pl-1">Category Name</span>
                                </label>
                                <select defaultValue={category} {...register("category", { required: true })} className="border  py-3 px-4 bg-white my-2 w-full outline-none">
                                    <option disabled selected>Choose one</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Rabbit">Rabbit</option>
                                    <option value="Pet">Pet</option>
                                    <option value="Parrot">Parrot</option>
                                </select>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-base pl-1">Age</span>
                                </label>
                                <label>
                                    <input type="text" defaultValue={age}  {...register("age", { required: true })} placeholder="Enter Age" className="border py-3 px-4 bg-white my-2 w-full outline-none" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-base pl-1">Image</span>
                                </label>
                                <label>
                                    <input type="file"  {...register("image", { required: true })} className="border py-3 px-4 bg-white my-2 w-full outline-none" />
                                </label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <label >
                                <span className="text-base pl-1">Location</span>
                            </label>
                            <label>
                                <input type="text" defaultValue={location} {...register("location", { required: true })} placeholder="Enter Location" className="border py-3 px-4 bg-white my-2 w-full outline-none" />
                            </label>
                        </div>




                        <div className='w-full'>
                            <label >
                                <span className="text-base pl-1">Short Description</span>
                            </label>
                            <textarea className="w-full border py-3 px-4 bg-white my-2 outline-none" defaultValue={shortDescription} {...register("shortDescription", { required: true })} id="" cols="30" rows="1"></textarea>
                        </div>
                        <div className='w-full'>
                            <label >
                                <span className="text-base pl-1">Long Description</span>
                            </label>
                            <textarea className="w-full border py-3 px-4 bg-white my-2 outline-none" defaultValue={longDescription} {...register("longDescription", { required: true })} id="" cols="30" rows="3"></textarea>
                        </div>

                        <input type="submit" value="Add Pet" className='py-3 mt-4 cursor-pointer w-full border bg-pink text-white text-lg font-semibold' />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdatePet;