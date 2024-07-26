import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductcardSkeleton = () => {
  return (
    <Skeleton className="bg-white w-[240px] h-[330px] rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:scale-110 duration-500 ease-in-out m-5"></Skeleton>
  );
};

export default ProductcardSkeleton;
