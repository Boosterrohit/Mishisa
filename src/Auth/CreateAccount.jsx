import React from "react";
import { Link } from "react-router-dom";
const CreateAccount = () => {
  return (
    <section>
      <div className="max-w-3xl px-7 lg:py-20 py-5 m-auto">
        <h1 className="text-4xl font-semibold">My Account Login</h1>
        <div className="flex mt-10">
          <Link to="/login">
            <button className="border-hover_cart font-semibold text-lg hover:text-red-400 border-2 py-2 px-9 sm:px-16 mr-2 sm:mr-3 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/createAccount">
            <button className="border-hover_cart border-2 py-2 px-5 text-lg sm:px-10 font-semibold hover:text-red-400 rounded-md">
              Create Account
            </button>
          </Link>
        </div>
        <div>
          <form>
            <p className="text-sm text-gray-500 mt-4">
              Creating an account is easy. Just fill out the form below and
              enjoy the benefits of being a registered customer
            </p>
            <div className="flex flex-col mt-4">
              <label htmlFor="fName">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="Email">Email Address</label>
              <input
                type="text"
                placeholder="Email"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Password"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Password must have minimum 8 characters, at least 1 uppercase,
                lowercase, special character and number
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="confirm password">Confirm Password</label>
              <input
                type="text"
                placeholder="Confirm Password"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>
            <div>
              <button
                type="submit"
                className="border-2 mt-10 border-red-500 px-20 rounded-md hover:bg-red-500 hover:text-white font-semibold py-3"
              >
                Create Account
              </button>
              <p className="text-sm text-gray-500 mt-5">
                Mishisa does not share or sell personal info. See privacy policy
              </p>
            </div>
          </form>
        </div>
      </div>
      <hr className="py-2 mt-4" />
    </section>
  );
};

export default CreateAccount;
