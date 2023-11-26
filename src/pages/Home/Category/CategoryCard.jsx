import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../../components/Ui/Container/Container";
import SectionTitle from "../../../components/Ui/SectionTitle/SectionTitle";
import CategoriesCards from "./CategoriesCards";


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
    console.log(categoryCard);
    return (
        <div className="mt-20">
            <Container>
                <div className="py-16">
                    <SectionTitle subHeading="All Pets" heading="WHAT WE DO TO PROTECT ANIMALS"></SectionTitle>
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