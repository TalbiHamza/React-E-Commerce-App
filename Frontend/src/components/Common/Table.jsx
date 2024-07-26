import React from "react";

const Table = ({ headings, children }) => {
  return (
    <table className=" w-full shadow-[0px_3px_8px_rgba(0,0,0,0.24)] my-4">
      <thead className="bg-blue-950 text-white ">
        {headings.map((heading, index) => (
          <th key={index} className="p-2">
            {heading}
          </th>
        ))}
      </thead>
      {children}
    </table>
  );
};

export default Table;
