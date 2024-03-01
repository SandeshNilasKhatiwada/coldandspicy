import React from "react";
import "./TheAdminSidebar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { HiOutlineCube } from "react-icons/hi2";
import { TfiWallet } from "react-icons/tfi";
import { LuBus, LuContact } from "react-icons/lu";
import { PiChartLineUpBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

function TheAdminSidebar() {
  return (
    <div className="relative text-xs border h-[97vh]">
      <div className="sticky top-0 z-10">
        <nav>
          <div className="h-[12vh] flex justify-center items-center border">
            <Link to="/" title="Tokri Logo">
              <p className="text-xl font-bold">Hot and Spicy</p>
            </Link>
          </div>
          <div className="h-[86vh] flex flex-col justify-between">
            <div className="h-[45vh]">
              <ul className="flex flex-col gap-3 p-7">
                <div className="flex flex-col gap-[5rem]">
                <li>
                  <NavLink
                    className="flex items-center gap-1 px-3 p-2 rounded-md admin"
                    to="/admin-products"
                  >
                    <HiOutlineCube className="text-xl -mt-1" />
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center gap-1 px-3 p-2 rounded-md admin"
                    to="/admin-orders"
                  >
                    <LuBus className="text-xl -mt-1" />
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center gap-1 px-3 p-2 rounded-md admin"
                    to="/admin-users"
                  >
                    <LuContact className="text-xl -mt-1" />
                    Users
                  </NavLink>
                </li>
                </div>
              </ul>
            </div>
            <div>
              <div className="border-t border-gray-200 p-7">
                <NavLink
                  className="flex items-center gap-1 px-3 p-2 rounded-md admin"
                  to="/"
                >
                  <TbLogout2 className="text-xl -mt-1" />
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>{" "}
    </div>
  );
}

export default TheAdminSidebar;
