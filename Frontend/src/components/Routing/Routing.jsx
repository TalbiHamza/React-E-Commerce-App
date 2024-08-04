import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./../Home/HomePage";
import ProductsPage from "./../Products/ProductsPage";
import SingleProduct from "./../Products/SingleProduct";
import CartPage from "./../Cart/CartPage";
import MyOrders from "./../MyOrders/MyOrders";
import SigninPage from "./../Authentification/SigninPage";
import SignUp from "./../Authentification/SignUp";
import LogOut from "../Authentification/LogOut";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="product/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SigninPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
