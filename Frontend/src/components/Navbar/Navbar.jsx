import React, { memo, useContext, useEffect, useState } from "react";

import Rocket from "../../assets/rocket.png";
import Star from "../../assets/glowing-star.png";
import Id from "../../assets/id-button.png";
import Memo from "../../assets/memo.png";
import Package from "../../assets/package.png";
import Lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { SuggestionApi } from "../../services/ProductService";

const Navbar = () => {
  const [search, setsearch] = useState("");
  const [selectedItem, setselectedItem] = useState(-1);

  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [suggestions, setsuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
      setsearch("");
      setsuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedItem < suggestions.length) {
      if (e.keyCode === 40) {
        setselectedItem((current) =>
          current === suggestions.length - 1 ? 0 : current + 1
        );
      } else if (e.keyCode === 38) {
        setselectedItem((current) =>
          current === 0 ? suggestions.length - 1 : current - 1
        );
      } else if (e.key === "Enter" && selectedItem > -1) {
        const item = suggestions[selectedItem];
        navigate(`/products/?search=${item.title}`);
        setsearch("");
        setsuggestions([]);
      }
    } else {
      setselectedItem(-1);
    }
  };

  useEffect(() => {
    const delaySuggestions = setTimeout(() => {
      if (search.trim() !== "") {
        SuggestionApi(search)
          .then((res) => {
            setsuggestions(res.data);
          })
          .catch((err) => console.log(err));
      }
      setsuggestions([]);
    }, 500);
    return () => {
      clearTimeout(delaySuggestions);
    };
  }, [search]);

  return (
    <nav className="flex justify-between items-center px-8 bg-[#fff] border-b border-b-black">
      <div className="flex items-center ">
        <h1 className="pr-4 text-[30px] font-bold">TechStoreX</h1>
        <form
          action=""
          className="border border-slate-800 rounded-[5px] p-[3px] h-[40px] flex items-center relative"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search Product"
            className="flex-1 h-full outline-none px-[7px] text-[20px] font-[500]"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary btn-sm text-[20px] font-[500]">
            Search
          </button>
          <ul className="absolute top-full bg-white w-full mt-2 rounded-md z-50">
            {suggestions.map((item, index) => (
              <li key={item._id} className="flex">
                <Link
                  to={`products?search=${item.title}`}
                  className={
                    selectedItem === index
                      ? "w-full font-semibold bg-[#e3e3e3] p-2"
                      : "w-full hover:font-semibold hover:bg-[#e3e3e3] p-2"
                  }
                  onClick={() => {
                    setsearch("");
                    setsuggestions([]);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </form>
      </div>
      <div className="flex gap-5">
        <LinkWithIcon title="Home" link="/" icon={Rocket} />
        <LinkWithIcon title="Products" link="/products" icon={Star} />
        {!user && (
          <>
            <LinkWithIcon title="Login" link="login" icon={Id} />
            <LinkWithIcon title="SignUp" link="/signup" icon={Memo} />
          </>
        )}
        {user && (
          <>
            <LinkWithIcon title="My Orders" link="/myorders" icon={Package} />
            <LinkWithIcon title="Logout" link="/logout" icon={Lock} />
            <NavLink
              to="/cart"
              className="flex items-center  text-[18px] font-[600]"
            >
              Cart
              <p className="flex justify-center rounded-[100%] bg-purple-700 w-5 h-6 ml-1 text-white">
                {cart.length}
              </p>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
