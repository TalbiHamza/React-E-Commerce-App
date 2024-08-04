import React, { useContext } from "react";
import { Audio } from "react-loader-spinner";

import { useState } from "react";
import QuantityInput from "../Common/QuantityInput";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import UserContext from "../../contexts/UserContext";

import config from "../../config.json";

const SingleProduct = () => {
  const { AddToCart } = useContext(CartContext);
  const user = useContext(UserContext);

  const [SelectedImg, setSelectedImg] = useState(0);

  const { id } = useParams();
  const { Data: product, Errors, isLoading } = useFetch(`/products/${id}`);

  const [Quantity, setQuantity] = useState(1);

  return (
    <div>
      <section className="flex justify-center items-center pt-10">
        {Errors && <em>{Errors}</em>}
        {isLoading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
        {product && (
          <>
            {" "}
            <div className="flex items-center">
              <div className="flex flex-col gap-y-4 p-2 m-4 ">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`${config.backendURL}/products/${image}`}
                    alt={product.title}
                    className={`w-[80px] rounded cursor-pointer ${
                      SelectedImg === index
                        ? "scale-110 duration-500 ease-in-out"
                        : ""
                    }`}
                    onClick={() => setSelectedImg(index)}
                  />
                ))}
              </div>
              <img
                src={`${config.backendURL}/products/${product.images[SelectedImg]}`}
                alt={product.title}
                className="rounded object-cover w-[500px] h-[500px]"
              />
            </div>
            <div className=" w-[35%] py-4 px-8">
              <h2 className="text-[24px] font-bold mb-2">{product.title}</h2>
              <p className="mb-3">{product.description}</p>
              <p className="text-[20px] font-bold mb-2">${product.price}</p>

              {user && (
                <>
                  <h2 className="text-[20px] font-bold mb-1">Quantity:</h2>
                  <div className="flex items-center gap-x-10 mb-3">
                    <QuantityInput
                      Quantity={Quantity}
                      setQuantity={setQuantity}
                      stock={product.stock}
                    />
                  </div>{" "}
                  <button
                    className="bg-indigo-600 text-white rounded-md py-1 w-36"
                    onClick={() => {
                      AddToCart(product, Quantity);
                    }}
                  >
                    Add To Cart
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default SingleProduct;
