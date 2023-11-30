

const DonationSection = ({donation}) => {
    const { image, name, maximumDonationAmount} = donation;
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md hover:-translate-y-2 overflow-hidden transition duration-200 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className="w-full h-full" src={image} alt="profile-picture" />
                </div>
                <div className="p-6 text-left">
                    <h4 className="block mb-2 text-2xl antialiased font-bold leading-snug tracking-normal text-violet">
                        {name}
                    </h4>
                    <p className="block text-base antialiased font-medium leading-relaxed text-gray-700 bg-clip-text">
                        Save our life
                    </p>

                    <div className="flex justify-between">
                        <p className="block text-base antialiased font-medium leading-relaxed text-gray-700 bg-clip-text">
                            <span className="text-violet font-semibold text-lg">${maximumDonationAmount}</span><br />
                            Target Amount
                        </p>
                        <p className="block text-base antialiased font-medium leading-relaxed text-gray-700 bg-clip-text">
                            <span className="text-violet font-semibold text-lg">$5000</span><br />
                            Rasied so far
                        </p>
                        <p className="block text-base antialiased font-medium leading-relaxed text-gray-700 bg-clip-text">
                            <span className="text-violet font-semibold text-lg">$5000</span><br />
                            Still need
                        </p>
                    </div>                      
                </div>               
            </div>
        </div>
    );
};

export default DonationSection;