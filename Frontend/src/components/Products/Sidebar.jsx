import LinkWithIcon from "../Navbar/LinkWithIcon";

import useFetch from "../../hooks/useFetch";
import SidebarLinkSkeleton from "./SidebarLinkSkeleton";

import config from "../../config.json";

const Sidebar = () => {
  const { Data: Categories, Errors: errors, isLoading } = useFetch("/category");
  const skeletons = [1, 2, 3, 4, 5];
  return (
    <aside className="bg-white py-2 px-5">
      <h2 className="text-[20px] font-bold mb-2">Category</h2>
      <div className="flex flex-col gap-y-1">
        {isLoading && skeletons.map((n) => <SidebarLinkSkeleton key={n} />)}
        {errors && <em className="text-red-500">{errors}</em>}
        {Categories &&
          Categories.map((category) => {
            return (
              <LinkWithIcon
                key={category._id}
                title={category.name}
                link={`/products?category=${category.name}`}
                icon={`${config.backendURL}/category/${category.image}`}
                sidebar={true}
              />
            );
          })}
      </div>
    </aside>
  );
};

export default Sidebar;
