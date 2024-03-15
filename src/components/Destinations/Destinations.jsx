import { DestinationCard } from "./DestinationCard";
import { TopDestinations } from "../../consts/Destinations";

export const Destinations = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="w-[1228px] px-5">
        <h2 className="uppercase text-center text-[#5E6282] font-poppins font-semibold text-lg">
          Top Selling
        </h2>
        <h3 className="font-bold font-volkhov text-5xl text-center text-[#14183E] mt-2">
          Top Destinations
        </h3>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {TopDestinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              description={destination.description}
              place={destination.place}
              price={destination.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
