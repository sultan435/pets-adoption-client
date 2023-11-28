import memberImg from '../../../assets/home/petco.png'

const OurMember = () => {
    return (
        <div className="hero h-[70vh]" style={{ backgroundImage: `url(${memberImg})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-8 text-2xl md:text-4xl lg:text-5xl font-bold uppercase">IT`S COOL TO BE OUR MEMBER</h1>
                    <p className="mb-8">PATCO is an online adoption platform that helps animals find homes and facilitates safe and easy adoptions</p>
                    <button className="py-4 text-xl text-black bg-orange px-10 hover:bg-orange transition  font-semibold rounded-xl">Become a member</button>
                </div>
            </div>
        </div>
    );
};

export default OurMember;