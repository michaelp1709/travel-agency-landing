import Send from "../../assets/images/Send.svg";
import Plus from "../../assets/images/plus.svg";
export const SuscribeSection = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="w-[1356px] flex justify-center">
        <div className="w-[1170px]  bg-[#f9f7fe]  rounded-tl-[150px] rounded-xl relative px-28 py-16">
          <div className="flex h-16 w-16 rounded-full justify-center items-center bg-gradient-to-r from-[#747DEF] to-[#5E3BE1] absolute -right-5 -top-5">
            <img src={Send} alt="" />
          </div>
          <h3 className="font-poppins font-semibold text-3xl text-center text-[#5E6282]">
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h3>

          <form action="" className="mt-28 flex justify-center">
            <div className="flex w-1/2 gap-10 ">
              <input
                type="text"
                className="appearance-none w-full bg-white text-[#39425D] rounded-lg py-3 px-4"
                placeholder="Your email"
              />
              <button
                type="buton"
                className="rounded-lg bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-5 text-sm font-medium text-white py-3"
              >
                Suscribe
              </button>
            </div>
          </form>
          <img
            src={Plus}
            alt=""
            className="rotate-90 -bottom-16 -right-24 absolute -z-50"
          />
        </div>
      </div>
    </section>
  );
};
