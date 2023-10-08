import React from "react";
import Logo from "../../Asset/Image/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiSolidUser, BiSolidShoppingBagAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../Asset/Device.css";
const TopBar = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between py-3 max-w-[1440px] px-7 lg:py-3 Nest_Hub_py ">
        <div className="flex">
          <img
            src={Logo}
            alt="Mishisa"
            className="max-w-full w-36 sm:w-56 Nest_Hub_img"
          />
          <div className="hidden sm:hidden md:hidden lg:block xl:block ">
            <div className="flex items-center border px-1 rounded-md ml-16 Nest_Hub_input bg-white">
              <input
                type="text"
                autoFocus
                className="text-gray-500 w-custom-input h-11 outline-none px-3 "
                placeholder="Search your beauty"
              />
              <BsSearch className="text-gray-500 mx-3" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <div className="flex items-center mx-3">
              <BiSolidUser className="mr-1 m-custom-margin" size={20} />
              <Link
                to="/"
                className="hover:underline font-medium hidden sm:hidden md:hidden lg:block xl:block"
              >
                Login/SignUp
              </Link>
            </div>
          </div>
          <div className="flex relative">
            <div className="flex">
              <AiFillHeart
                className="text-gray-500 mx-4 hidden sm:hidden md:hidden lg:block xl:block "
                size={28}
              />
              <div className="hidden sm:hidden md:hidden lg:block xl:block">
                <span className="absolute bg-red-500 w-5 h-5 rounded-full flex justify-center items-center bottom-4 left-7 text-white">
                  0
                </span>
              </div>
            </div>
            <div className="flex relative">
              <BiSolidShoppingBagAlt className="text-gray-500" size={28} />
              <span className="bg-red-500  rounded-full w-5 text-white bottom-4 left-3 absolute h-5 flex justify-center items-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
