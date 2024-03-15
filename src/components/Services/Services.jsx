import { Category } from "./Category";
import Plus from "../../assets/images/plus.svg";
import Weather from "../../assets/images/weather.svg";
import Flights from "../../assets/images/Flights.svg";
import Events from "../../assets/images/Events.svg";
import Customization from "../../assets/images/Customization.svg";

export const Services = () => {
  return (
    <section className="flex justify-center mt-20">
      <div
        className="w-[1228px] px-5 bg-no-repeat bg-right-top"
        style={{ backgroundImage: `url(${Plus})` }}
      >
        <h2 className="uppercase text-center text-[#5E6282] font-poppins font-semibold text-lg">
          category
        </h2>
        <h3 className="font-bold font-volkhov text-5xl text-center text-[#14183E] mt-2">
          We Offer Best Services
        </h3>

        <div className="grid grid-cols-4 mt-20 gap-28">
          <Category
            image={Weather}
            title="Calculated Weather"
            text="Built Wicket longer admire do barton vanity itself do in it."
          />
          <Category
            image={Flights}
            title="Best Flights"
            text="Engrossed listening. Park gate sell they west hard for the."
          />
          <Category
            image={Events}
            title="Local Events"
            text="Barton vanity itself do in it. Preferd to men it engrossed listening."
          />
          <Category
            image={Customization}
            title="Customization"
            text="We deliver outsourced aviation services for military customers"
          />
        </div>
      </div>
    </section>
  );
};
