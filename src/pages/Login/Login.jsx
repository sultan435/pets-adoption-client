import { Link } from 'react-router-dom';
import img1 from '../../assets/category/robbit.jpg'
import Container from '../../components/Ui/Container/Container';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit } = useForm()
    const { loggedUser,googleUser } = useAuth();

    const onSubmit = (data) => {
        console.log(data);
        loggedUser(data.email, data.password)
            .then(result => {
                console.log('user login successfully', result.user)
            })
    }

    const handleGoogleLogin = (googleProvider) =>{
        googleUser(googleProvider)
        .then(()=> console.log('google login user....'))
    }
    return (
        <div className='bg-[#f8f3e8]'>
            <Container>
                <div className='mt-24 py-8 flex flex-col md:flex-row '>
                    <div className='flex-1'>
                        <img className='w-full h-full' src={img1} alt="" />
                    </div>
                    <div className='flex-1'>
                        <div className="">
                            <div className="w-full px-4 md:px-16 mb-10">
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl text-[#403F3F] font-semibold">Login</h1>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mt-6">
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
                                        </div>
                                        <div className="form-control">
                                            <input type="submit" className=" text-[#333333] text-xl cursor-pointer font-medium bg-[#f1823d] py-3 px-6" value="Login" />
                                        </div>
                                    </div>
                                </form>
                                <p className="text-center">OR</p>
                                <div className="">
                                    <button onClick={handleGoogleLogin} className="btn w-full hover:bg-[#ff3115] hover:text-white font-medium border-black my-3">
                                        <FaGoogle></FaGoogle>
                                        Sign in with Google
                                    </button>
                                </div>
                                <p className='mt-7'>Don’t have a My Animals Australia account yet? <Link to="/register" className="font-semibold border-b-2 px-1 border-[#f1823d] text-[#333333] cursor-pointer  hover:bg-[#f6c09e]" >Register here.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;