import Container from "../../../components/Ui/Container/Container";
import aboutImg from '../../../assets/about .jpg'


const AboutUs = () => {
    return (
        <div className="pt-20 pb-10">
            <Container>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div>
                            <p className="text-orange mb-3 text-xl uppercase font-semibold">---- ABOUT US</p>
                            <h1 className="text-4xl text-gray uppercase mb-7 font-bold">our main goal is <br /> toProtect animals</h1>
                            <p className="text-gray font-medium mb-7">Petco is the largest specialty pet retailer of services and solutions for the lifetime needs of pets. At Pawscare, we love pets, and we believe pets make us better people.</p>
                        </div>
                        <div>
                            <button className="py-3 text-xl text-black bg-orange px-10 hover:bg-orange transition font-semibold rounded-xl">More About</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img className="w-full h-full rounded-xl" src={aboutImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;