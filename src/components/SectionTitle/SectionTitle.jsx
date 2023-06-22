const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center">
      <p className="text-yellow-500  ">{subHeading}</p>
      <p className="text-3xl font-semibold border-y-4 p-2  my-4 mb-10  ">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
