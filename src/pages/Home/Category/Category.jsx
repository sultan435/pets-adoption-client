import Container from "../../../components/Ui/Container/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const Category = () => {
    const axiosSecure = useAxiosSecure()

    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axiosSecure.get('/pets-category')
            return res.data;
        }
    })
    return (
        <div className="mb-10">
            <Container>
                <SectionTitle heading="what we do to protect animals" subHeading="category"></SectionTitle>
                <div className=" rounded-lg  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14"> 
                    {
                        categories.map(item => <div key={item._id} className="shadow-xl rounded-lg relative hover:-translate-y-2 overflow-hidden transition duration-200 cursor-pointer">
                            <img className="h-80 hover:-mt-2 rounded-t-lg w-full transition-all z-10 hover:-z-10 duration-300 " src={item.image} alt="" />
                       
                            <div className="absolute flex flex-col justify-center items-center w-full h-full bg-opacity-60 bg-black opacity-0 hover:opacity-100 duration-75 inset-0 p-2">

                                <Link to={`/category-card/${item.category}`}>
                                    <button className="py-3 px-4 text-white text-xl font-medium border-2 shadow-lg border-orange rounded-full">See All</button>
                                </Link>
                            </div>
                            <p className="text-gray font-bold text-xl my-4 text-center">{item.category}</p>
                        </div>)
                    }                  
                </div>
            </Container>
        </div>
    );
};

export default Category;