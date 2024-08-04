import React from "react";
import { NavLink } from "react-router-dom";

const LinkWithIcon = ({ title, link, icon, sidebar }) => {
  return (
    <NavLink
      to={link}
      className={`flex items-center  text-[18px] font-semibold ${
        sidebar
          ? "flex-row-reverse place-content-start gap-x-[2px] hover:bg-[#f6f8fa] duration-500 ease-in-out rounded-sm py-2 px-3"
          : ""
      }`}
    >
      {title} <img src={icon} alt="" className="w-6 h-6 ml-1" />
    </NavLink>
  );
};

export default LinkWithIcon;
