import React from "react";
import ProductCard from "../Products/ProductCard";
import useFetch from "../../hooks/useFetch";
import ProductcardSkeleton from "../Products/ProductcardSkeleton";

const FeaturedSection = () => {
  const { Data, Error, isLoading } = useFetch("products/featured");
  const skeletons = [1, 2, 3];
  return (
    <section className="m-[65px]">
      <h2 className="text-center text-[30px] font-bold mb-[60px]">
        Featured Products
      </h2>

      <div className="flex items-center justify-evenly mb-[60px]">
        {Error && <em className="">{Error}</em>}
        {isLoading
          ? skeletons.map((n) => <ProductcardSkeleton key={n} />)
          : Data &&
            Data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
