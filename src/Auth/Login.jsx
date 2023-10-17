import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
        <div className="mt-5">
          <form>
            <p className="text-sm text-gray-500">
              If you are a registered user, please enter your email and
              password.
            </p>
            <div className="flex flex-col mt-4">
              <label htmlFor="Emain">Email Address</label>
              <input
                type="text"
                placeholder="Email"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <p className="text-red-500 font-semibold cursor-pointer">
                  Forget Password?
                </p>
              </div>

              <input
                type="text"
                placeholder="Password"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>
            <div className="mt-4">
              <input type="checkbox" className="mr-1 " />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button
              type="submit"
              className="border-2 mt-4 border-red-500 px-24 rounded-md hover:bg-red-500 hover:text-white font-semibold py-3"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Login;
