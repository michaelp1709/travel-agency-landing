import Testimonial1 from "../../assets/images/Testimonial1.svg"
export const TestimonialCard = () => {
  return (
    <div className="w-[541px] h-72">
      <div className="w-[504px] h-60 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-14 text-justify font-poppins py-8 relative">
        <img src={Testimonial1} alt="" className="w-16 h-16 rounded-full absolute -top-7 -left-7" />
        <p className="font-medium text-base">
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <p className="font-semibold text-lg mt-5">Mike taylor</p>
        <p className="font-medium text-sm mt-2">Lahore, Pakistan</p>
      </div>
    </div>
  );
};
