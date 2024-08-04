import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <section className="grid grid-cols-[1fr_1fr] items-center bg-black text-[#fff] h-[500px] px-24">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[30px] font-bold mb-1">{title}</h2>
        <p className="text-[18px] w-[70%]">{subtitle}</p>
        <Link
          to={link}
          className="mt-3 bg-white text-black rounded-full py-[6px] px-4 font-[700] cursor-pointer hover:scale-110 ease-in-out duration-500 hover:font-[700] "
        >
          BUY NOW
        </Link>
      </div>

      <div>
        <img
          src={image}
          alt=""
          className="w-[1000px] transition-all duration-[0.3s] ease-[ease-in-out] hover:scale-105"
        />
      </div>
    </section>
  );
};

export default HeroSection;
