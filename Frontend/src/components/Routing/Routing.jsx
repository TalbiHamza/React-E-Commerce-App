import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./../Home/HomePage";
import ProductsPage from "./../Products/ProductsPage";
import SingleProduct from "./../Products/SingleProduct";
import CartPage from "./../Cart/CartPage";
import MyOrders from "./../MyOrders/MyOrders";
import SigninPage from "./../Authentification/SigninPage";
import SignUp from "./../Authentification/SignUp";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/login" element={<SigninPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routing;
