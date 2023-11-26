import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PetCard from "./PetCard";
import Container from "../../components/Ui/Container/Container";
import SectionTitle from "../../components/Ui/SectionTitle/SectionTitle";

const PetList = () => {

    const axiosSecure = useAxiosSecure()

    const { data: petsAll = [] } = useQuery({
        queryKey: ["petAll"],
        queryFn: async () => {
            const res = await axiosSecure.get('/user/pets')
            return res.data
        }
    })
    console.log(petsAll);
    return (
        <div className="mt-20">
            <Container>
                <div className="py-16">
                    <SectionTitle subHeading="All Pets" heading="WHAT WE DO TO PROTECT ANIMALS"></SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            petsAll.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PetList;