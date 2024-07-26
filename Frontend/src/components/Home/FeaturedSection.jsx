import React from "react";
import ProductCard from "../Products/ProductCard";

const FeaturedSection = () => {
  return (
    <section className="m-[65px]">
      <h2 className="text-center text-[30px] font-bold mb-[60px]">
        Featured Products
      </h2>

      <div className="flex items-center justify-evenly mb-[60px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FeaturedSection;
