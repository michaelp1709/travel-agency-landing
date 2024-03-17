import Traveller from "../../assets/images/Traveller.svg";
export const HeroContent = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="lg:w-[1197px] px-5 flex">
        <div className="lg:mt-28">
          <h4 className="text-xl text-center lg:text-left font-bold text-[#DF6951] uppercase font-poppins">
            Best Destinations around the world
          </h4>
          <h1 className="text-5xl lg:text-[84px] text-center lg:text-left font-bold text-[#2F2F2F] lg:w-[590px] font-volkhov tracking-tight leading-none mt-10">
            Travel,enjoy and live a new and full life
          </h1>
          <p className="text-justify lg:text-left font-light font-poppins text-base lg:w-[450px] text-[#5E6282] mt-10">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="mt-10 lg:flex lg:w-96 justify-between">
            <button className="bg-[#F1A501]  text-white py-2 px-4 border rounded-lg font-medium font-sans text-lg shadow-[rgba(255,_255,_0,_0.25)_0px_25px_50px_-12px]">
              Find out more
            </button>
            <button className="font-bold py-2 px-4 rounded inline-flex items-center lg:w-44  justify-between">
              <div className="bg-[#DF6951] rounded-full h-12 w-12 flex justify-center items-center shadow-[rgba(255,_0,_0,_1)_0px_25px_50px_-12px]">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                    fill="white"
                  />
                </svg>
              </div>

              <span className="font-poppins font-medium text-[#686D77] text-base ml-1">
                Play Demo
              </span>
            </button>
          </div>
        </div>
        <img className="-ml-40 md:block hidden" src={Traveller} alt="" />
      </div>
    </section>
  );
};
