import Navigation from "../../assets/images/Navigation.svg";
export const DestinationCard = ({ image, place, description, price }) => {
  return (
    <div className="w-80 h-[457px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <img
        src={image}
        alt="Destination"
        className="object-cover w-full h-3/4 object-top"
      />
      <div className="px-4 mt-5 grid grid-cols-2 items-center gap-5 text-[#5E6282]">
        <h1 className="font-medium text-lg font-poppins">{place}</h1>
        <p className="text-lg font-medium font-poppins justify-self-end">
          {price}
        </p>
        <p className="text-base font-medium font-poppins text-gray-500 flex gap-3">
          <span>
            <img src={Navigation} alt="" />
          </span>
          {description}
        </p>
      </div>
    </div>
  );
};
