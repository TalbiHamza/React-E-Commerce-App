import React from "react";

import { useState } from "react";
import QuantityInput from "../Common/QuantityInput";

const SingleProduct = () => {
  const [SelectedImg, setSelectedImg] = useState(0);

  const product = {
    id: 1,
    title: "Product Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
    price: 9.99,
    images: [
      "https://via.placeholder.com/500x500?text=Product+Image+1",
      "https://via.placeholder.com/500x500?text=Product+Image+2",
      "https://via.placeholder.com/500x500?text=Product+Image+3",
      "https://via.placeholder.com/500x500?text=Product+Image+4",
    ],
    stock: 10,
  };

  return (
    <div>
      <section className="flex justify-center items-center pt-10">
        <div className="flex items-center">
          <div className="flex flex-col gap-y-4 p-2 m-4 ">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
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
            src={product.images[SelectedImg]}
            alt={product.title}
            className="rounded object-cover"
          />
        </div>

        <div className=" w-[35%] py-4 px-8">
          <h2 className="text-[24px] font-bold mb-2">{product.title}</h2>
          <p className="mb-3">{product.description}</p>
          <p className="text-[20px] font-bold mb-2">${product.price}</p>
          <h2 className="text-[20px] font-bold mb-1">Quantity:</h2>
          <div className="flex items-center gap-x-10 mb-3">
            <QuantityInput />
          </div>
          <button className="bg-indigo-600 text-white rounded-md py-1 w-36">
            Add To Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
