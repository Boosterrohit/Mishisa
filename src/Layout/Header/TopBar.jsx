import React, { useState } from "react";
import Logo from "../../Asset/Image/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiSolidUser, BiSolidShoppingBagAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../Asset/Device.css";
const TopBar = () => {
  const [hoverCard, setHoverCard] = useState(false);
  return (
    <section>
      <div className="container mx-auto flex justify-between py-3 max-w-[1440px] px-7 lg:py-3 Nest_Hub_py ">
        <div className="flex">
          <Link to="/">
            <img
              src={Logo}
              alt="Mishisa"
              className="max-w-full w-36 sm:w-56 Nest_Hub_img"
            />
          </Link>
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
              <div className="hover:underline font-medium hidden sm:hidden md:hidden lg:block xl:block">
                <Link to="/login">Login</Link>/
                <Link to="/createAccount">SignUp</Link>
              </div>
            </div>
          </div>
          <div className="flex relative">
            <Link to="/createAccount">
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
            </Link>
            <div
              className="flex relative"
              onMouseEnter={() => setHoverCard(true)}
              onMouseLeave={() => setHoverCard(false)}
            >
              <div>
                <BiSolidShoppingBagAlt className="text-gray-500" size={28} />
                {hoverCard && (
                  <div className="bg-white p-3 absolute z-10 shadow-md rounded-md right-0 w-80">
                    <div>
                      <div className="flex justify-between border-b border-gray-200 py-1">
                        <h4 className="font-bold text-hover_card">
                          Your Shopping Cart
                        </h4>
                        <p className="text-hover_card font-medium">0 Items</p>
                      </div>
                      <div className="h-72 overflow-y-scroll">
                        <p>No items in cart</p>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className="text-gray-500 font-bold">
                            Estimated Total
                          </p>
                          <p className="text-gray-500 font-bold">Rs.0</p>
                        </div>
                        <div className="flex justify-between mt-5">
                          <button className="rounded-md border border-hover_card py-3 px-8 font-semibold text-hover_card hover:bg-red-500 hover:border-red-500 hover:text-white">
                            View Cart
                          </button>
                          <button className="bg-hover_card py-3 px-8 rounded-md text-white font-semibold hover:bg-red-500">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <span className="bg-red-500  rounded-full w-5 text-white bottom-4 left-3 absolute h-5 flex justify-center items-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
