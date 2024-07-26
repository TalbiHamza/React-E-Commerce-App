import React, { memo } from "react";

import Rocket from "../../assets/rocket.png";
import Star from "../../assets/glowing-star.png";
import Id from "../../assets/id-button.png";
import Memo from "../../assets/memo.png";
import Package from "../../assets/package.png";
import Lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 bg-[#fff] border-b border-b-black">
      <div className="flex items-center ">
        <h1 className="pr-4 text-[30px] font-bold">TechStoreX</h1>
        <form
          action=""
          className="border border-slate-800 rounded-[5px] p-[3px] h-[40px] flex items-center"
        >
          {" "}
          <input
            type="text"
            placeholder="Search Product"
            className="flex-1 h-full outline-none px-[7px] text-[20px] font-[500]"
          />
          <button className="btn btn-primary btn-sm text-[20px] font-[500]">
            Search
          </button>
        </form>
      </div>
      <div className="flex gap-5">
        <LinkWithIcon title="Home" link="/" icon={Rocket} />
        <LinkWithIcon title="Products" link="/products" icon={Star} />
        <LinkWithIcon title="Login" link="login" icon={Id} />
        <LinkWithIcon title="SignUp" link="/signup" icon={Memo} />
        <LinkWithIcon title="My Orders" link="/myorders" icon={Package} />
        <LinkWithIcon title="Logout" link="/logout" icon={Lock} />
        <NavLink
          to="/cart"
          className="flex items-center  text-[16px] font-[600]"
        >
          Cart{" "}
          <p className="flex justify-center rounded-[100%] bg-purple-700 w-5 h-6 ml-1 text-white">
            0
          </p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
