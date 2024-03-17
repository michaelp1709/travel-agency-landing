import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="w-[1165px] px-5 grid grid-cols-2">
        <div>
          <h2 className="text-[#5E6282] font-poppins font-semibold text-lg">
            TESTIMONIALS
          </h2>
          <h3 className="font-bold font-volkhov text-5xl text-[#14183E] mt-5 w-[511px]">
            What People Say About Us.
          </h3>
        </div>
      <div className="">
        {/* TODO: Slider*/}
        <TestimonialCard />
      </div>
      </div>
    </section>
  );
};
