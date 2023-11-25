import React from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const shopping = [
    {
      id: 1,
      name: "Subtotal",
      price: "Rs 0",
    },
    {
      id: 2,
      name: "Shipping",
      price: "Rs 0",
    },
    {
      id: 3,
      name: "Coupon",
      price: "Rs 0",
    },
  ];
  return (
    <section className="bg-[#F3F4F6]">
      <div className=" bg-white py-3">
        <div className="max-w-6xl m-auto px-5">
          <ul className="breadcrumb list-none text-[#465562] text-sm">
            <li className="inline">Home</li>
            <li className="inline">Cart</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl m-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between py-10">
          <div>
            <p className="bg-white lg:w-[712px] md:w-full for1024 sm:w-full py-3 px-5 rounded-md">
              No items in cart
            </p>
            <button className="bg-vibrant p-3 mt-4 rounded-md lg:w-auto w-full md:w-full text-white font-medium">
              Continue Shopping
            </button>
          </div>
          <div className="bg-white sm:w-full md:w-full lg:mt-0 mt-4 md:mt-4 lg:w-96 p-7 border-[1px] border-gray-300 shadow-sm rounded-md">
            <h3 className="font-medium mb-2 text-[#152533]">Order Summary</h3>
            <div className=" items-center flex justify-between mb-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="outline-none w-80 px-3  h-12 border-[1px] rounded-tl-lg rounded-bl-lg shadow-sm"
              />
              <button className="bg-vibrant  h-12 px-5 rounded-tr-lg rounded-br-lg text-white">
                Apply
              </button>
            </div>
            <div className="mb-3">
              {shopping.map((item) => {
                return (
                  <div key={item.id} className="flex mb-1 justify-between">
                    <span className="text-[#697480] text-[16px]">
                      {item.name}
                    </span>
                    <span className="font-medium text-[15px] text-[#152533]">
                      {item.price}
                    </span>
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="flex justify-between mt-3 mb-4">
              <span className="text-[#465562] font-medium">Total</span>
              <span className="text-[#465562] font-bold">Rs 0</span>
            </div>
            <hr />
            <p className="text-[12.5px] text-center text-[#697480]">
              By placing an order, you agree to the mishisa.com's{" "}
              <Link to="/cart" className="underline font-medium text-[#465562]">
                Terms
              </Link>{" "}
              <Link to="/cart" className="underline font-medium text-[#465562]">
                & Conditions
              </Link>
              and
              <Link to="/cart" className="underline font-medium text-[#465562]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
