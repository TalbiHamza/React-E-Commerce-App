import { useEffect, useState, useContext } from "react";

import Table from "../Common/Table";
import { toast } from "react-toastify";

import remove from "../../assets/remove.png";
import QuantityInput from "../Common/QuantityInput";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { checkOutApi } from "./../../services/OrderServices";

const CartPage = () => {
  const [Subtotal, setSubtotal] = useState(0);

  const user = useContext(UserContext);
  const { cart, RemoveFromCart, updateCart, setCart } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    cart?.forEach((element) => {
      total += element.product.price * element.quantity;
    });
    setSubtotal(total);
  }, [cart]);

  const checkOut = () => {
    const oldCart = [...cart];
    setCart([]);
    checkOutApi()
      .then(() => {
        toast.success("Order Placed Successfully");
      })
      .catch((err) => {
        toast.error(err.response.message);
        setCart(oldCart);
      });
  };

  return (
    <section className="flex flex-col items-center justify-center w-[60%] mx-auto p-[16px_32px]">
      <div className="flex items-center mb-4">
        <img
          src={`http://localhost/profile/${user?.profilePic}`}
          alt=""
          className="w-20  h-20 rounded-full mr-3"
        />
        <div>
          <p className="font-[600]">Name: {user?.name}</p>
          <p className="font-[500]">Email: {user?.email}</p>
        </div>
      </div>

      <Table headings={["ITEM", "PRICE", "QUANTITY", "TOTAL", "REMOVE"]}>
        <tbody className="text-center font-[500]">
          {cart?.map((item) => (
            <tr
              key={item.product._id}
              className="odd:bg-white even:bg-gray-300"
            >
              <td className="p-2">{item.product.title}</td>
              <td className="p-2">${item.product.price}</td>
              <td className="p-2 flex justify-evenly">
                <QuantityInput
                  Quantity={item.quantity}
                  stock={item.product.stock}
                  setQuantity={updateCart}
                  cartPage={true}
                  productId={item.product._id}
                />
              </td>
              <td className="p-2">${item.product.price * item.quantity}</td>
              <td className="p-2 ">
                <img
                  src={remove}
                  alt=""
                  className="w-6 h-6 cursor-pointer mx-auto"
                  onClick={() => {
                    RemoveFromCart(item.product._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <table className="self-end w-96 mt-4 bg-white">
        <tbody>
          <tr>
            <td className="py-2 px-4  border-gray-300 border-2">Subtotal</td>
            <td className="py-2 px-4 text-right border-gray-300 border-2">
              {Subtotal}
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
              {Subtotal + 5}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="self-end mt-4 bg-indigo-600 text-white rounded-md py-1 w-36"
        onClick={checkOut}
      >
        Checkout
      </button>
    </section>
  );
};

export default CartPage;
