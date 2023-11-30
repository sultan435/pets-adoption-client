import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../../components/Ui/Container/Container";
import CategoriesCards from "./CategoriesCards";
import image from '../../../assets/banner-1.jpg'
import { BsArrowRightShort } from "react-icons/bs";


const CategoryCard = () => {
    const params = useParams()
    const axiosSecure = useAxiosSecure()

    const {data: categoryCard = []} = useQuery({
        queryKey: ["category-card"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/pets-categories/${params.category}`)
            return res.data
        }
    })
    return (
        <div className="pt-36 pb-16">
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-5xl font-bold text-orange ">Pet<span className="text-gray"> Category</span></h1>
                        <div className="border-2 border-orange w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-offWhite py-5 flex justify-center items-center mb-16">
                <NavLink
                    to="/"
                    className="hover:text-orange font-medium uppercase"
                >
                    Home
                </NavLink>
                <BsArrowRightShort className="text-2xl mx-1" />
                <NavLink
                    to="/petList"
                    className="hover:text-orange font-medium uppercase"
                >
                    pet list
                </NavLink>
            </div>
            <Container>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            categoryCard.map(petCard => <CategoriesCards key={petCard._id} petCard={petCard}></CategoriesCards>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryCard;