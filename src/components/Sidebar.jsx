import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { sidebarData } from "../constants/data";
const Sidebar = () => {
  return (
    <div className="fixed top-0 pt-4 w-[200px] bg-white shadow h-screen">
      {sidebarData.map((data) => {
        return (
          <div key={data.id}>
            <Link to="#" className="flex flex-col items-center gap-2 my-4">
              <div>{data.icons}</div>
              <div className="mb-4">{data.name}</div>
            </Link>
          </div>
        );
      })}
      <div>
        <button className="cursor-pointer bg-green-400 py-2 px-4 shadow-lg text-white rounded-full mb-4 mx-auto flex items-center">
          Connect Wallet
        </button>
      </div>

      <div className="w-full h-[1px] bg-gray-400"></div>

      <div className="my-4 px-2 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>USD</p>
          <MdArrowDropDown />
        </div>
        <div className="flex items-center justify-between">
          <p>English</p>
          <MdArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
