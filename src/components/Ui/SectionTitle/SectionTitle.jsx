const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-full mx-auto text-center pt-20">
                <p className="text-orange mb-3 text-xl uppercase font-semibold">---- {subHeading}</p>
                <h3 className="text-4xl text-gray uppercase font-bold">{heading}</h3>
            </div>
    );
};

export default SectionTitle;