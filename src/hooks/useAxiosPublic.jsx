import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://pet-adoption-server-side.vercel.app/api/v1'
})
const useAxiosPublic = () => {
    return axiosSecure;
};

export default useAxiosPublic;