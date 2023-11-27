import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/category/pet.png'
import Container from '../../components/Ui/Container/Container';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {register, handleSubmit} = useForm()
    const {createUser, updateUserProfile} = useContext(AuthContext)
   
    const axiosPublic= useAxiosPublic()
    const navigate = useNavigate()

    const onSubmit = async(data) =>{
        console.log(data);
        const imageFile = {image: data.photo[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                "content-type": "multipart/form-data",
            }
        })
        console.log(res.data);
        if(res.data.success){

            createUser(data.email, data.password)
            .then(result=>{
                console.log(result.user);
                updateUserProfile(data.name, res.data.data.display_url)
                .then(()=> {
                    const user={
                        name: data.name,
                        email: data.email,
                    }
                    axiosPublic.post('/users-info', user)
                    .then(res =>{
                        if(res.data.insertedId){
                            console.log('user added to the database');
                            navigate('/')
                        }
                    })
                })
                // reset()
            })
        }

    }
    return (
        <div className='bg-[#f8f3e8]'>
            <Container>
                <div className='mt-24 py-8 flex flex-col md:flex-row '>
                    <div className='flex-1'>
                        <img className='w-full h-full' src={img} alt="" />
                    </div>
                    <div className='flex-1'>
                        <div className="">
                            <div className="w-full px-4 md:px-16 mb-10">
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl text-[#403F3F] font-semibold">Register</h1>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mt-6">
                                        <div className="mb-4">
                                            <label>
                                                <span className="text-[#403F3F] font-semibold">Your Name*</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("name", { required: true })}
                                                className="border-b border-gray-400 hover:border-[#f1823d] hover:border-b-2 transition py-2 w-full bg-[#f8f3e8] outline-none"
                                                required />
                                        </div>
                                        <div className="mb-4">
                                            <label>
                                                <span className="text-[#403F3F] font-semibold">Photo URL*</span>
                                            </label>
                                            <input
                                                type="file"
                                                {...register("photo", { required: true })}
                                                className="border-b border-gray-400 hover:border-[#f1823d] hover:border-b-2 transition py-2 w-full bg-[#f8f3e8] outline-none"
                                                required />
                                        </div>
                                        <div className="mb-4">
                                            <label>
                                                <span className="text-[#403F3F] font-semibold">Email address*</span>
                                            </label>
                                            <input
                                                type="email"
                                                {...register("email", { required: true })}
                                                className="border-b border-gray-400 hover:border-[#f1823d] hover:border-b-2 transition py-2 w-full bg-[#f8f3e8] outline-none"
                                                required />
                                        </div>
                                        <div className="mb-4">
                                            <label >
                                                <span className="text-[#403F3F] font-semibold">Password*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    {...register("password", { required: true })}

                                                    className="border-b border-gray-400 hover:border-[#f1823d] hover:border-b-2 transition py-2 w-full bg-[#f8f3e8] outline-none"
                                                    required />
                                                <span className="absolute top-3 right-7" onClick={() => setShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                    }
                                                </span>
                                            </div>
                                            <div className="my-5">
                                                <input className="" type="checkbox" name="terms" id="" />
                                                <label >
                                                    <a href="#" className="ml-2">I agree all statements in <span>Terms of service</span></a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <input type="submit" className=" text-[#333333] text-xl cursor-pointer font-medium bg-[#f1823d] py-3 px-6" value="REGISTER" />
                                        </div>
                                    </div>
                                </form>
                                <p className='mt-7'><Link to="/login" className="font-semibold border-b-2 px-1 border-[#f1823d] text-[#333333] cursor-pointer  hover:bg-[#f6c09e]" >Return to Login in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;