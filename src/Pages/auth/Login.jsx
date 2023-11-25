import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length === 0) {
      setError(true);
    }
  };
  const [modalVisiable, setModalVisiable] = useState(false);
  const openModal = () => {
    setModalVisiable(true);
  };
  const onClose = () => {
    setModalVisiable(false);
  };
  const modalRef = useRef();
  useEffect(() => {
    const closeModalFromOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", closeModalFromOutside);
    return () => {
      document.removeEventListener("mousedown", closeModalFromOutside);
    };
  }, []);

  return (
    <section>
      <div className="max-w-3xl px-7 lg:py-20 py-5 m-auto">
        <div
          className="boxmodal  justify-center fixed top-0 left-0  w-[100%] h-[100%] "
          style={{ display: modalVisiable ? "flex" : "none" }}
        >
          <div
            ref={modalRef}
            className="bg-white   mt-8 px-10 py-3 rounded-md resetpassword w-full mx-3 h-80 sm:w-[500px]"
          >
            <div className="closeBtn text-right bottom-2 left-4 relative">
              <span
                id="closetext"
                onClick={onClose}
                className="text-[33px] cursor-pointer text-gray-400 font-light"
              >
                &times;
              </span>
            </div>
            <div className="relative bottom-6 modalText">
              <h2 className="text-2xl text-[#061221] font-bold">
                Forgot Password?
              </h2>
              <p className="text-[#31404F] text-sm pt-3 pb-5">
                Provide your account email address to receive an email to reset
                your password.
              </p>
              <form className="flex flex-col mt-1">
                <label htmlFor="email" className="text-[#061221]">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="border-2 px-3 outline-none h-12 rounded-md"
                />
                <button
                  type="submit"
                  className="border-[1px] text-[#31404F] font-bold border-vibrant hover:bg-vibrant w-60 rounded-md hover:text-white py-3 mt-6"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-medium text-[#061221]">
          My Account Login
        </h1>
        <div className="flex mt-10">
          <Link to="/login">
            <button className="text-[#31404F] border-hover_cart font-medium text-lg hover:text-red-400 border-2 py-2 px-9 sm:px-16 mr-2 sm:mr-3 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/createAccount">
            <button className="text-[#31404F] border-hover_cart border-2 py-2 px-5 text-lg sm:px-10 font-medium hover:text-red-400 rounded-md">
              Create Account
            </button>
          </Link>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit} action="/">
            <p className="text-sm text-[#697480]">
              If you are a registered user, please enter your email and
              password.
            </p>
            <div className="flex flex-col mt-4">
              <label htmlFor="Emain" className="text-[#061221]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <p
                  className="text-red-500 font-medium cursor-pointer mainforgotpws"
                  onClick={openModal}
                >
                  Forget Password?
                </p>
              </div>

              <input
                type="password"
                placeholder="Password"
                // required
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 rounded-md outline-none text-hover_card border-hover_cart px-2 h-12"
              />
              {error && password.length <= 0 ? (
                <label htmlFor="validation">Password is required</label>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <input
                type="checkbox"
                className="mr-3 "
                id="remember"
                name="remember"
              />
              <label htmlFor="remember" className="text-[#465562]">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="border-[1px] mt-4 border-vibrant px-24 rounded-md hover:bg-vibrant hover:text-white font-semibold py-3"
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
