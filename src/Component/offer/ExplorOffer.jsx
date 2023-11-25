import React from "react";
import { fivePerOff3 } from "../../data";
const TopOffers = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl py-5 mt-5 mb-4 text-[#061221]">
        Explore offers
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
        {fivePerOff3.map((item) => {
          return (
            <div key={item.id}>
              <div className=" col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 items-center">
                <img
                  src={item.image2}
                  alt="TopOffer"
                  className="max-w-full h-auto rounded-lg"
                />
                <p className="font-medium text-[19px] text-gray-700">
                  {item.title}
                </p>
                <p className="text-gray-400 font-medium">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopOffers;
