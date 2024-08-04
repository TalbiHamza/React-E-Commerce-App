import React, { useContext } from "react";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import UserContext from "../../contexts/UserContext";

const ProductCard = ({ product }) => {
  const { AddToCart } = useContext(CartContext);
  const user = useContext(UserContext);

  return (
    <article className="bg-white w-[240px] h-[330px] rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:scale-110 duration-500 ease-in-out m-5">
      <div className="border-b border-b-gray-200 flex justify-center items-center">
        <NavLink to={`/product/${product?._id}`}>
          <img
            src={`http://localhost:5000/products/${product?.images[0]}`}
            alt="product image"
            className="h-[200px]"
          />
        </NavLink>
      </div>
      <div className="mt-2 mb-5 mx-5">
        <h3 className="font-[700] text-xl">{product?.price}</h3>
        <p className="text-[18px] mb-1">{product?.title}</p>
        <footer className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="flex items-center justify-center bg-orange-400 text-white px-[8px] py-[2px] rounded mr-2">
              <img src={star} alt="star" className="w-5 mr-1" />
              {product?.reviews.rate}
            </p>
            <p className="border-l border-l-slate-500 pl-2">
              {product?.reviews.counts}
            </p>
          </div>

          {product?.stock > 0 && user && (
            <button
              className="w-10 h-10"
              onClick={() => {
                AddToCart(product, 1);
              }}
            >
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
