import React from "react";

import user from "../../assets/user.webp";
import Table from "../Common/Table";

import remove from "../../assets/remove.png";
import QuantityInput from "../Common/QuantityInput";

const CartPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[60%] mx-auto p-[16px_32px]">
      <div className="flex items-center mb-4">
        <img src={user} alt="" className="w-20  h-20 rounded-full mr-3" />
        <div>
          <p className="font-[600]">Name</p>
          <p className="font-[500]">Name@gmail.com</p>
        </div>
      </div>

      <Table headings={["ITEM", "PRICE", "QUANTITY", "TOTAL", "REMOVE"]}>
        <tbody className="text-center font-[500]">
          <tr className="odd:bg-white even:bg-gray-300">
            <td className="p-2">Iphone 14</td>
            <td className="p-2">$999</td>
            <td className="p-2 flex justify-evenly">
              <QuantityInput />
            </td>
            <td className="p-2">$999</td>
            <td className="p-2 ">
              <img
                src={remove}
                alt=""
                className="w-6 h-6 cursor-pointer mx-auto"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <table className="self-end w-96 mt-4 bg-white">
        <tbody>
          <tr>
            <td className="py-2 px-4  border-gray-300 border-2">Subtotal</td>
            <td className="py-2 px-4 text-right border-gray-300 border-2">
              120000
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4  border-gray-300 border-2">
              Shipping Charge
            </td>
            <td className="py-2 px-4 text-right border-gray-300 border-2">5</td>
          </tr>
          <tr className="text-[18px] font-bold">
            <td className="py-2 px-4  border-gray-300 border-2">Final Total</td>
            <td className="py-2 px-4 text-right border-gray-300 border-2 text-orange-500">
              120005
            </td>
          </tr>
        </tbody>
      </table>
      <button className="self-end mt-4 bg-indigo-600 text-white rounded-md py-1 w-36">
        {" "}
        Checkout
      </button>
    </section>
  );
};

export default CartPage;
