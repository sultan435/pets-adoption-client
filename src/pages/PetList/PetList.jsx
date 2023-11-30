import PetCard from "./PetCard";
import Container from "../../components/Ui/Container/Container";
import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import image from '../../assets/banner-1.jpg'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const PetList = () => {
    const [category, setCategory] = useState('')
    const axiosSecure = useAxiosSecure()

    const { data: allPets = [] } = useQuery({
        queryKey: ["allPets-sorting", category],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/pets?category=${category}`)
            return res.data
        }
    })

    return (
        <div className="pt-36">
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-5xl font-bold text-orange ">Pet<span className="text-gray"> List</span></h1>
                        <div className="border-2 border-orange w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-offWhite py-5 flex justify-center items-center mb-5">
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
                <div className="flex flex-col md:flex-row lg:flex-row gap-3 ">
                    <input className="border outline-none hover:border-orange rounded-lg py-3 px-3 bg-white my-2" placeholder="Search Pets" type="text" name="search" id="" />
                    <select name="categoryName" onChange={(e) => setCategory(e.target.value)} className="border outline-none hover:border-orange rounded-lg py-3 px-10 bg-white my-2">
                        <option disabled selected>Category</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Pet">Pet</option>
                        <option value="Bird">Bird</option>
                    </select>
                    <button className="text-black font-medium rounded-lg py-3 px-3 bg-orange my-2">Search</button>
                </div>
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                        {
                            allPets.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PetList;