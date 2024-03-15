/* eslint-disable react/prop-types */
import { useState } from "react";

export const Category = ({ title, text, image }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div
      className={`w-60 flex flex-col items-center rounded-3xl px-8 ${
        active ? "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" : ""
      }`}
      onClick={handleClick}
    >
      <img className="w-24" src={image} alt="" />
      <h2 className="font-sans font-semibold text-xl text-[#1E1D4C] text-center mt-5">
        {title}
      </h2>
      <p className="font-poppins font-normal text-[#5E6282] text-center mt-5">
        {text}
      </p>
    </div>
  );
};
