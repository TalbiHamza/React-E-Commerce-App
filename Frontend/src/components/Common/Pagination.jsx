import React from "react";

const Pagination = ({
  totalProducts,
  ProductsPerPage,
  onClick,
  currentPage,
}) => {
  let totalPages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
    totalPages.push(i);
  }
  return (
    <ul className="flex gap-x-2 justify-center m-2">
      {totalPages[1] &&
        totalPages.map((page) => (
          <li key={page}>
            <button
              className={
                currentPage === page
                  ? "border-2 border-black w-8 h-8 bg-black text-white font-semibold rounded-md"
                  : "border-2 border-black w-8 h-8 bg-white  font-semibold rounded-md"
              }
              onClick={() => onClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
