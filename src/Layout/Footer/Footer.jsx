import React from "react";
import logo from "../../Asset/Image/logo.png";
import { topCategory, socialLinks, contactInfo } from "../../data.js";
const Footer = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1440px] px-7 lg:px-3 py-20">
        <div className="flex flex-col sm:flex-row justify-between sm:block md:block lg:flex">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0 text-left">
            <img
              src={logo}
              alt="Bottom Logo"
              className="max-w-full h-auto w-52 mx-10"
            />
            <p className="text-left mt-2 mx-10 tracking-wide font-medium text-gray-600">
              @ 2023 Mishisa.
              <br />
              All Rights Reserved
            </p>
          </div>
          <div className="flex  justify-between items-center sm:mx-6 mx-2 mt-3">
            {["Top Category", "Help"].map((heading) => (
              <div key={heading} className="sm:mx-6 mx-1">
                <p className="font-bold text-lg text-gray-800 mb-3">
                  {heading}
                </p>
                {topCategory.map((item) => (
                  <div key={item.id} className="mb-2">
                    <a href="#" rel="rr">
                      <p className="leading-4 text-gray-700 text-base tracking-wide ">
                        {item.anchor}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-between sm:mx-6  mx-2 mt-3">
            {["Quick Links", "Social"].map((heading, index) => (
              <div key={index} className="sm:mx-6 mx-1">
                <p className="font-bold text-gray-800 mb-3 text-[17px]">
                  {heading}
                </p>
                {heading === "Social"
                  ? socialLinks.map((link, linkIndex) => (
                      <div key={linkIndex} className="mb-2">
                        <p className="leading-4  text-gray-700 text-base tracking-wide">
                          {link}
                        </p>
                      </div>
                    ))
                  : topCategory.map((item) => (
                      <div key={item.id} className="mb-2">
                        <p className="leading-4 text-gray-700 text-base tracking-wide">
                          {item.anchor}
                        </p>
                      </div>
                    ))}
              </div>
            ))}
          </div>
          <div>
            <div className="mr-20 mt-3 px-3 sm:px-3 md:px-12 lg:px-0">
              <p className="font-bold text-lg text-gray-800 mb-3">Contact</p>
              {contactInfo.map((info, infoIndex) => (
                <div key={infoIndex} className="mb-2">
                  <p className="leading-4 text-gray-700 text-base tracking-wide">
                    {info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
