import Container from "../../../components/Ui/Container/Container";
import img from '../../../assets/home/achivement.jpg'


const Achievements = () => {
    return (
        <div className="pt-20 pb-32">
            <Container>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <img className="w-full h-full rounded-xl" src={img} alt="" />
                    </div>
                    <div className="flex-1">
                        <div className="mb-12">
                            <p className="text-orange mb-3 text-xl uppercase font-semibold">----  ACHIEVEMENTS </p>
                            <h1 className="text-4xl text-gray uppercase mb-7 font-bold">A LOT OF ANIMALS NEED OUR PROTECTION</h1>
                            <p className="text-gray font-medium">I have been guarded and protected by cats, dogs, horses, and goats.</p>
                            <p className="text-gray font-medium py-4">I had a horse stand guard over me when I fell off him, until my mother could get there and make sure I was alright.</p>
                            <p className="text-gray font-medium">I have had cats growl while staring out the window at strangers walking past. One cat jumped up on my shoulder and spit, hissed and growled at my husband when we were arguing -- it was so funny we forgot about arguing (he was a 5 month old kitten at the time)</p>
                        </div>
                        <div className="flex justify-evenly items-center gap-10">
                            <div className="text-center">
                                <span className="text-6xl font-bold text-orange">850</span>
                                <p className="text-gray text-lg font-medium">Poaching cases</p>
                            </div>
                            <div className="text-center">
                                <span className="text-6xl font-bold text-orange">230</span>
                                <p className="text-gray text-lg font-medium">Rescued animals</p>
                            </div>
                            <div className="text-center">
                                <span className="text-6xl font-bold text-orange">160</span>
                                <p className="text-gray text-lg font-medium">Volunteers</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Achievements;