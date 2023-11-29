import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../assets/category/robbit.jpg'
import Container from '../../components/Ui/Container/Container';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loggedUser, googleUser } = useAuth();

    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const from = location.state?.from.pathname || '/'

    const onSubmit = (data) => {
        console.log(data);
        loggedUser(data.email, data.password)
            .then(result => {
                console.log('user login successfully', result.user)
                navigate(from, { replace: true })
            })
    }

    const handleGoogleLogin = (googleProvider) => {
        googleUser(googleProvider)
            .then((result) => {
                console.log(result.user);
                const user = {
                    email: result.user.email,
                    name: result.user.displayName,
                    image: result.user.photoURL,
                }
                axiosPublic.post('/users-info', user)
                    .then(res => {
                        if (res.data.insertedId || res.data.insertedId === null) {
                            console.log('user added to the database');
                            navigate('/')
                        }
                    })

            })
    }
    return (
        <div className='bg-[#f8f3e8] pt-36'>
            <Container>
                <div className=' py-16 flex flex-col lg:flex-row '>
                    <div className='flex-1'>
                        <img className='w-full h-full hidden lg:block' src={img1} alt="" />
                    </div>
                    <div className='flex-1'>
                        <div className="">
                            <div className="w-full px-4 md:px-16 mb-10">
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl text-gray font-semibold">Login</h1>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mt-6">
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
                                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
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
                                        </div>
                                        <div className="form-control">
                                            <input type="submit" className=" text-black text-xl cursor-pointer font-medium bg-orange py-3 px-6" value="Login" />
                                        </div>
                                    </div>
                                </form>
                                <p className="text-center">OR</p>
                                <div className="">
                                    <button onClick={handleGoogleLogin} className="btn w-full hover:bg-orange hover:text-black font-medium border-slate-600 my-3">
                                        <FaGoogle></FaGoogle>
                                        Sign in with Google
                                    </button>
                                </div>
                                <p className='mt-7'>Don’t have a My Animals Australia account yet? <Link to="/register" className="font-semibold border-b-2 px-1 border-orange text-black cursor-pointer  hover:bg-[#f6c09e]" >Register here.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;