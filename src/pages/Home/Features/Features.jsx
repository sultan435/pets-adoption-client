import Container from "../../../components/Ui/Container/Container";
import featureImg1 from '../../../assets/home/features/feature-1.jpg'
import featureImg2 from '../../../assets/home/features/feature-2.jpg'
import featureImg3 from '../../../assets/home/features/feature-3.jpg'
import featureImg4 from '../../../assets/home/features/feature-4.jpg'
import featureImg5 from '../../../assets/home/features/feature-5.jpg'
import featureImg6 from '../../../assets/home/features/feature-6.jpg'


const Features = () => {
    return (
        <div className="pt-20 pb-10">
            <Container>
                <div>
                    <div>
                        <p className="text-orange mb-3 text-xl uppercase font-semibold">---- OUR WORK</p>
                        <h1 className="text-4xl text-gray uppercase mb-14 font-bold">WE CONSIDER ANIMAL WELFARE OUR TOP <br /> PRIORITY</h1>                      
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        <img className="w-full h-full rounded-xl cursor-pointer hover:-translate-y-2 overflow-hidden transition duration-200" src={featureImg1} alt="" />
                        <img className="w-full h-full rounded-xl cursor-pointer hover:-translate-y-2 overflow-hidden transition duration-200" src={featureImg2} alt="" />
                        <img className="w-full h-full rounded-xl cursor-pointer hover:-translate-y-2 overflow-hidden transition duration-200" src={featureImg3} alt="" />
                        <img className="w-full h-full rounded-xl cursor-pointer hover:-translate-y-2 overflow-hidden transition duration-200" src={featureImg4} alt="" />
                        <img className="w-full h-full rounded-xl cursor-pointer hover:-translate-y-2 overflow-hidden transition duration-200" src={featureImg5} alt="" />
                        <img className="w-full h-full rounded-xl cursor-pointer hover:-translate-y-2 overflow-hidden transition duration-200" src={featureImg6} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;