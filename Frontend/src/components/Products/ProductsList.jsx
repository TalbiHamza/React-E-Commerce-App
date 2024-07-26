import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import ProductcardSkeleton from "./ProductcardSkeleton";
import Pagination from "../Common/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");

  const { Data, Errors, isLoading } = useFetch(
    "/products",
    {
      params: { category: category, page: page },
    },
    [category, page]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleChangePage = (page) => {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  };

  return (
    <section className="py-2 ">
      <header className="flex justify-between pl-8 pr-4">
        <h2 className="text-[20px] font-bold">Products</h2>
        <select
          name="sort"
          id=""
          className="rounded py-1 px-2 font-[450] outline-none"
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
            Data.products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                title={product.title}
                image={product.images[0]}
                rate={product.reviews.rate}
                counts={product.reviews.counts}
                price={product.price}
                stock={product.stock}
              />
            ))}
      </div>
      <Pagination
        totalProducts={Data?.totalProducts}
        ProductsPerPage={8}
        onClick={handleChangePage}
        currentPage={parseInt(page)}
      />
    </section>
  );
};

export default ProductsList;
