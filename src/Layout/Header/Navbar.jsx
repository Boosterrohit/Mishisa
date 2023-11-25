import React, { useState } from "react";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { links, links2 } from "../../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <div
        className="top-0 mt-3 px-8 absolute md:hidden block"
        onClick={toggleMenu}
      >
        <CgMenuLeft size={27} className="text-gray-500" />
      </div>
      <div className={`overlay ${open ? "block" : "hidden"}`}></div>
      <nav className="bg-vibrant overflow-y-auto mb-2 sm:mb-2 md:mb-3 lg:mb-0">
        <div className="container max-w-[85rem] w-full mx-auto px-7 lg:px-44 devid">
          <div
            className={`md:flex hidden justify-between items-center ${
              open ? "" : "hidden"
            }`}
          >
            {links.map((item) => (
              <div key={item.id} className="py-3 group">
                <p
                  href="#"
                  rel="noopener noreferrer"
                  className="text-white font-bold flex justify-center items-center"
                >
                  <Link to={item.slux}>{item.name}</Link>
                  <span className="mt-[4.5px] mx-1">{item.arrow}</span>
                </p>
                {item.submenu && (
                  <div className="absolute bg-white shadow-md max-w-[1440px]  container mx-auto  top-[113.4px]  mt-margintop hidden group-hover:block hover:block   left-0 right-0 z-20">
                    <div className="flex ">
                      {item.sublink.map((mysublink) => (
                        <div key={mysublink.id} className="block px-10">
                          <p href="/" className="text-gray-500 font-bold">
                            {mysublink.head}
                          </p>
                          {mysublink.sublink.map((slink) => (
                            <div key={slink.id}>
                              <p
                                key={slink.id}
                                href="/"
                                className="block text-base py-1 text-gray-500 hover:text-red-400"
                              >
                                <Link to={slink.slux}>{slink.name}</Link>
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* mobile navbar menu */}
        {open && (
          <div className="md:hidden bg-white h-full max-h-full fixed top-0 w-[75%] z-20">
            <div onClick={toggleMenu} className="flex justify-end mx-3 py-5">
              <AiOutlineClose />
            </div>
            <div className="border w-full px-0" />
            {links2.map((item) => (
              <div key={item.id} className="py-3 group px-3">
                <p
                  href="#"
                  rel="noopener noreferrer"
                  className="text-gray-500 font-bold flex"
                >
                  {item.name}
                  <span className="mt-[4.5px] mx-1">{item.arrow}</span>
                </p>
                {item.submenu && (
                  <div className="absolute mt-margintop hidden group-hover:block hover:block bg-white shadow-md w-full left-0 right-0 z-20">
                    <div className="block border-2 h-48 overflow-auto">
                      {item.sublink.map((mysublink) => (
                        <div key={mysublink.id} className="block px-10">
                          <p href="#" className="text-gray-500 font-bold">
                            {mysublink.head}
                          </p>
                          {mysublink.sublink.map((slink) => (
                            <div key={slink.id}>
                              <p
                                key={slink.id}
                                href="#"
                                className="block text-base py-1 text-gray-500 hover:text-red-400"
                              >
                                {slink.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="border w-full px-0" />
            <div className="my-4">
              <div className="flex items-center mx-3 " onClick={toggleMenu}>
                <BiSolidUser className="mr-1 m-custom-margin" size={20} />
                <div className="px-1">
                  <Link to="/login">Login / Sign Up</Link>
                </div>
              </div>
              <div className="mx-3 my-3 flex items-center" onClick={toggleMenu}>
                <AiFillHeart size={20} />
                <div>
                  <p className="px-2">Wishlist</p>
                </div>
              </div>
            </div>
            <div className="border w-full px-0" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
