import React from "react";

import Table from "../Common/Table";

const MyOrders = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[60%] mx-auto p-[16px_32px]">
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody className="text-center font-[500]">
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="p-2">1</td>
            <td className="p-2">Macbook Pro</td>
            <td className="p-2">$999</td>
            <td className="p-2">paid</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrders;
