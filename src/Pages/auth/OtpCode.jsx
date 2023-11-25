import React from "react";
import { Link } from "react-router-dom";
const OtpCode = () => {
  return (
    <section>
      <div className="m-auto max-w-3xl px-7 lg:py-20 py-5">
        <h1 className="text-4xl font-medium text-[#061221]">
          My Account Login
        </h1>
        <div className="flex mt-10">
          <Link to="/login">
            <button className="text-[#31404F] font-medium border-hover_cart  text-lg hover:text-red-400 border-2 py-2 px-9 sm:px-16 mr-2 sm:mr-3 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/createAccount">
            <button className="text-[#31404F] border-hover_cart border-2 py-2 px-5 text-lg sm:px-10 font-medium hover:text-red-400 rounded-md">
              Create Account
            </button>
          </Link>
        </div>
        <div>
          <form action="/login">
            <p className="text-sm text-gray-500 mt-6 mb-2">
              Creating an account is easy. Just fill out the form below and
              enjoy the benefits of being a registered customer.
            </p>
            <div className="flex flex-col mt-4">
              <label htmlFor="otp" className="text-sm mb-1">
                OTP Code
              </label>
              <input
                type="text"
                placeholder="OTP Code"
                required
                className="border-2 px-3 text-sm rounded-md outline-none text-hover_card border-hover_cart  h-12"
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-[#31404F] border-[1px] mt-10 border-vibrant px-24 rounded-md hover:bg-vibrant hover:text-white font-medium py-3"
              >
                Verify
              </button>
              <p className="text-sm text-gray-500 mt-5">
                Mishisa does not share or sell personal info. See privacy policy
              </p>
            </div>
          </form>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default OtpCode;
