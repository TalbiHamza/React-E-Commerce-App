import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import ProductcardSkeleton from "./ProductcardSkeleton";
import Pagination from "../Common/Pagination";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");
  const searchQuery = search.get("search");

  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setsortedProducts] = useState([]);

  const { Data, Errors, isLoading } = useFetch(
    "/products",
    {
      params: { category: category, page: page, search: searchQuery },
    },
    [category, page, search]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  /*useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        const currentParams = Object.fromEntries([...search]);

        setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);*/

  const handleChangePage = (page) => {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  };

  useEffect(() => {
    if (Data && Data.products) {
      const products = [...Data.products];
      switch (sortBy) {
        case "price desc":
          setsortedProducts(products.sort((a, b) => b.price - a.price));
          break;
        case "price asc":
          setsortedProducts(products.sort((a, b) => a.price - b.price));
          break;
        case "rate desc":
          setsortedProducts(
            products.sort((a, b) => b.reviews.rate - a.reviews.rate)
          );
          break;
        case "rate asc":
          setsortedProducts(
            products.sort((a, b) => a.reviews.rate - b.reviews.rate)
          );
          break;
        default:
          setsortedProducts(products);
      }
    }
  }, [sortBy, Data]);

  return (
    <section className="py-2 ">
      <header className="flex justify-between pl-8 pr-4">
        <h2 className="text-[20px] font-bold">Products</h2>
        <select
          name="sort"
          id=""
          className="rounded py-1 px-2 font-[450] outline-none bg-white"
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>
      <div className="flex flex-wrap justify-evenly pl-5">
        {Errors && <em className="">{Errors}</em>}
        {isLoading
          ? skeletons.map((n) => <ProductcardSkeleton key={n} />)
          : Data?.products &&
            sortedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
      {
        <Pagination
          totalProducts={Data?.totalProducts}
          ProductsPerPage={8}
          onClick={handleChangePage}
          currentPage={parseInt(page)}
        />
      }
    </section>
  );
};

export default ProductsList;
