import { Values } from "./Values";
import { Steps } from "../../consts/Steps";
import StepMain from "../../assets/images/StepMain.svg";

export const BookTrip = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="w-[1228px] px-5 grid grid-cols-2">
        <div>
          <h2 className="text-[#5E6282] font-poppins font-semibold text-lg">
            Easy and Fast
          </h2>
          <h3 className="font-bold font-volkhov text-5xl text-[#14183E] mt-5 w-[511px]">
            Book Your Next Trip In 3 Easy Steps
          </h3>
          <div className="mt-5">
            {Steps.map((step, index) => (
              <Values
                key={index}
                image={step.image}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
        <img src={StepMain} alt="" className="justify-self-end mt-10" />
      </div>
    </section>
  );
};
