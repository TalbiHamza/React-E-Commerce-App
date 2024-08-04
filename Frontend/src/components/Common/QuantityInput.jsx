import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

const QuantityInput = ({
  Quantity,
  setQuantity,
  stock,
  cartPage,
  productId,
}) => {
  return (
    <>
      <button
        className="bg-orange-500 rounded-full w-8 h-8 font-bold text-white disabled:opacity-[0.3]"
        disabled={Quantity <= 1}
        onClick={() => {
          if (cartPage) {
            setQuantity(productId, "-");
          } else {
            setQuantity(Quantity - 1);
          }
        }}
      >
        -
      </button>
      <p className="text-[20px] font-bold">{Quantity}</p>
      <button
        className="bg-orange-500 rounded-full w-8 h-8 font-bold text-white disabled:opacity-[0.3]"
        onClick={() => {
          if (cartPage) {
            setQuantity(productId, "+");
          } else {
            setQuantity(Quantity + 1);
          }
        }}
        disabled={Quantity >= stock}
      >
        +
      </button>
    </>
  );
};

export default QuantityInput;
