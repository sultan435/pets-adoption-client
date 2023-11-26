const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-full mx-auto text-center">
                <p className="text-[#f1823d] mb-3 text-xl uppercase font-semibold">--- {subHeading}</p>
                <h3 className="text-4xl text-violet uppercase mb-14 font-bold">{heading}</h3>
            </div>
    );
};

export default SectionTitle;