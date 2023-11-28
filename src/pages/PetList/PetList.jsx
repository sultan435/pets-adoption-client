import PetCard from "./PetCard";
import Container from "../../components/Ui/Container/Container";
import SectionTitle from "../../components/Ui/SectionTitle/SectionTitle";
import useAllPets from "../../hooks/useAllPets";

const PetList = () => {

    const [allPets] = useAllPets()

    return (
        <div className="mt-20">
            <Container>
                <div className="">
                    <SectionTitle subHeading="All Pets" heading="WHAT WE DO TO PROTECT ANIMALS"></SectionTitle>
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