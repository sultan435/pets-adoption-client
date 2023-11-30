import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../Ui/Container/Container";
import Sidebar from "./Sidebar";

const DetailsPet = () => {
    const params = useParams();

    const axiosSecure = useAxiosSecure()

    const { data: petDetails = [] } = useQuery({
        queryKey: ["pets-details"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pets-details/${params.id}`)
            return res.data;
        }
    })
    // console.log(petDetails)
    return (
        <div className="pt-36">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-28 p-4 md:p-10">
                    <div className="col-span-3">
                        <div className="mb-10">
                            <img className="w-full h-full rounded-xl" src={petDetails.image} alt="" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-violet mb-5">Hi, I Am {petDetails.name}</h1>
                            <p className="text-[#293255] font-medium">{petDetails.longDescriPtion}</p>
                        </div>
                        <div className="mt-8 mb-4">
                            <h3 className="font-bold text-gray text-xl">More about {petDetails.name}</h3>
                        </div>
                        <div className="grid grid-cols-2 bg-gray py-3 px-4 text-white">
                            <h4>Weight</h4>
                            <p>42 Pounds</p>
                        </div>
                        <div className="grid grid-cols-2 py-3 px-4">
                            <h4>Age</h4>
                            <p>{petDetails.age}</p>
                        </div>
                        <div className="grid grid-cols-2 bg-gray py-3 text-white px-4">
                            <h4>Location</h4>
                            <p>{petDetails.location}</p>
                        </div>
                        <div className="grid grid-cols-2 py-3 px-4">
                            <h4>Adoption Fee</h4>
                            <p>$420</p>
                        </div>
                        <div className="my-16">
                            <h1 className="mb-5 text-xl font-semibold text-violet">{petDetails.name} Gallery</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <img className="w-full h-full rounded-xl mb-10" src={petDetails.image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-2">
                       <Sidebar email={petDetails.email}></Sidebar>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DetailsPet;