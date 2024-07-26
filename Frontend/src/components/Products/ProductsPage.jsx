import React from "react";
import Sidebar from "./Sidebar";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  return (
    <section className="grid grid-cols-[1fr_4fr] p-5">
      <Sidebar />
      <ProductsList />
    </section>
  );
};

export default ProductsPage;
