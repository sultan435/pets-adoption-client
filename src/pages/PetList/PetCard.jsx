import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
    const { image, name, age, location, _id } = pet;
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md hover:-translate-y-2 overflow-hidden transition duration-200 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                <img className="w-full h-full" src={image} alt="profile-picture" />
            </div>
            <div className="p-6 text-left">
                <h4 className="block mb-2 text-2xl antialiased font-bold leading-snug tracking-normal text-gray uppercase">
                    {name}
                </h4>
                <p className="block text-base antialiased font-medium leading-relaxed text-gray bg-clip-text">
                    {age}
                </p>
                <p className="block text-base antialiased font-medium leading-relaxed text-gray bg-clip-text">
                    {location}
                </p>
            </div>
            <Link to={`/details-pet/${_id}`} className="flex justify-center">
                <button className="w-full py-4 bg-orange text-black font-bold rounded-b-xl">Details</button>
            </Link>
        </div>
    );
};

export default PetCard;