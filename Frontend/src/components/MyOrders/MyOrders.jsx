import React from "react";

import Table from "../Common/Table";
import useFetch from "../../hooks/useFetch";
import { Audio } from "react-loader-spinner";

const MyOrders = () => {
  const { Data, Errors, isLoading } = useFetch("/order");
  console.log(Data);
  const getProductString = (order) => {
    const ProductStringArr = order.products.map(
      (p) => `${p.product.title}(${p.quantity})`
    );
    return ProductStringArr.join(", ");
  };
  return (
    <section className="flex flex-col items-center justify-center w-[60%] mx-auto p-[16px_32px]">
      {isLoading && <Audio></Audio>}
      {Errors && <em className="text-red-500">{Errors}</em>}
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody className="text-center font-[500]">
          {Data?.map((order, index) => (
            <tr key={order._id} className="odd:bg-white even:bg-slate-50">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{getProductString(order)}</td>
              <td className="p-2">${order.total}</td>
              <td className="p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrders;
