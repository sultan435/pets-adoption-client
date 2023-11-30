import { NavLink } from "react-router-dom";
import error from '../../assets/home/error.png'

const Error = () => {
    return (
        <div className='w-full h-full relative'>
            <img className='w-full h-[100vh]' src={error} alt="" />
            <div className='absolute h-[100vh]  w-full flex justify-center items-center top-0'>
            <NavLink
                    to="/"
                    className="hover:text-white font-medium uppercase text-black px-4 py-2 rounded-md bg-orange"
                >
                    Back Home
                </NavLink>
            </div>
        </div>
    );
};

export default Error;