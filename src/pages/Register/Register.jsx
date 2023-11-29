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
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.photo[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        console.log(res.data);
        if (res.data.success) {

            createUser(data.email, data.password)
                .then(result => {
                    console.log(result.user);
                    updateUserProfile(data.name, res.data.data.display_url)
                        .then(() => {
                            const user = {
                                name: data.name,
                                email: data.email,
                                image: res.data.data.display_url
                            }
                            axiosPublic.post('/users-info', user)
                                .then(res => {
                                    if (res.data.insertedId) {
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
        <div className='bg-offWhite pt-36'>
            <Container>
                <div className='py-16 flex flex-col lg:flex-row '>
                    <div className='flex-1'>
                        <img className='w-full h-full hidden lg:block' src={img} alt="" />
                    </div>
                    <div className='flex-1'>
                        <div className="">
                            <div className="w-full px-4 md:px-16 ">
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl text-gray font-semibold">Register</h1>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mt-6">
                                        <div className="mb-4">
                                            <label>
                                                <span className="text-gray font-semibold">Your Name*</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("name", { required: true })}
                                                className="border-b border-slate-600 hover:border-orange hover:border-b-2 transition py-2 w-full bg-offWhite outline-none"
                                            />
                                            {errors.name && <span className='text-red-700'>Name field is required</span>}
                                        </div>
                                        <div className="mb-4">
                                            <label>
                                                <span className="text-gray font-semibold">Photo URL*</span>
                                            </label>
                                            <input
                                                type="file"
                                                {...register("photo", { required: true })}
                                                className="border-b border-slate-600 hover:border-orange hover:border-b-2 transition py-2 w-full bg-offWhite outline-none"
                                            />
                                            {errors.photo && <span className='text-red-500'>Photo is required</span>}
                                        </div>
                                        <div className="mb-4">
                                            <label>
                                                <span className="text-gray font-semibold">Email address*</span>
                                            </label>
                                            <input
                                                type="email"
                                                {...register("email", { required: true })}
                                                className="border-b border-slate-600 hover:border-orange hover:border-b-2 transition py-2 w-full bg-offWhite outline-none"
                                            />
                                            {errors.email && <span className='text-red-500'>Email is required</span>}
                                        </div>
                                        <div className="mb-4">
                                            <label >
                                                <span className="text-gray font-semibold">Password*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    {...register("password", {
                                                         required: true,
                                                          minLength: 6,
                                                           maxLength: 20,
                                                           pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                         })}

                                                         className="border-b border-slate-600 hover:border-orange hover:border-b-2 transition py-2 w-full bg-offWhite outline-none"
                                                />
                                                {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                                                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password is 6 less then </span>}
                                                {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password is less then 20 character</span>}
                                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one uppercase, one lower case, one number and one special character</span>}

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
                                            <input type="submit" className=" text-black text-xl cursor-pointer font-medium bg-orange py-3 px-6" value="REGISTER" />
                                        </div>
                                    </div>
                                </form>
                                <p className='mt-7'><Link to="/login" className="font-semibold border-b-2 px-1 border-orange text-black cursor-pointer  hover:bg-[#f6c09e]" >Return to Login in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;