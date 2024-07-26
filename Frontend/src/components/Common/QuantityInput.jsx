import React from "react";

const QuantityInput = () => {
  return (
    <>
      <button
        className="bg-orange-500 rounded-full w-8 h-8 font-bold text-white disabled:opacity-[0.3]"
        disabled
      >
        -
      </button>
      <p className="text-[20px] font-bold">1</p>
      <button className="bg-orange-500 rounded-full w-8 h-8 font-bold text-white">
        +
      </button>
    </>
  );
};

export default QuantityInput;
