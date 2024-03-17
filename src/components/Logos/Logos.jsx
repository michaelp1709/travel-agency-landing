import Axon from "../../assets/images/Axon.svg"
import Jetstar from "../../assets/images/Jetstar.svg"
import Expedia from "../../assets/images/Expedia.svg"
import Qantas from "../../assets/images/Qantas.svg"
import Alitalia from "../../assets/images/Alitalia.svg"
export const Logos = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="w-[1073px] grid grid-cols-5 items-center gap-15">
        <img src={Axon} alt="" />
        <img src={Jetstar} alt="" />
        <img src={Expedia} alt="" />
        <img src={Qantas} alt="" />
        <img src={Alitalia} alt="" />
      </div>
    </section>
  );
};
