import Container from "../../../components/Ui/Container/Container";


const Newsletter = () => {
    return (
        <div className="my-28">
            <Container>
                <div className="bg-orange p-20 rounded-xl flex lg:justify-between lg:items-center flex-col lg:flex-row">

                    <h3 className="text-3xl lg:text-7xl font-bold text-white mb-4">our <br /> newsletter</h3>
                    <div className="flex gap-5 lg:items-center lg:justify-center flex-col lg:flex-row">
                        <input type="email" placeholder="Enter Your Email" className="py-5 px-5 rounded-xl w-full text-white bg-orange border-2 border-white outline-none" id="" />
                        <button className="py-5 text-xl text-white bg-gray px-10 hover:bg-orange transition  font-semibold rounded-xl">Subscribe</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Newsletter;