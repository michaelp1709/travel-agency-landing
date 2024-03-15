export const Values = ({ image, title, description }) => {
  return (
    <div className="grid grid-cols-7 h-16 w-4/5 text-[#5E6282] font-poppins mt-14 items-center">
      <img src={image} alt="" className="col-span-1" />
      <div className="col-span-6">
        <h4 className="font-bold text-base">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
