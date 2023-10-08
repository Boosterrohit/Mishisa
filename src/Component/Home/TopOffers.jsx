import React from "react";
import { fivePerOff } from "../../data";
import purchases from "../../Asset/Image/purchases.png";
const TopOffers = () => {
  return (
    <div className="container mx-auto max-w-[1440px] px-7 lg:py-3">
      <h1 className="font-bold text-4xl py-5 mt-5 mb-4">Top Offers</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fivePerOff.map((item) => {
          return (
            <div key={item.id}>
              <div className=" col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4">
                <img
                  src={item.image2}
                  alt="TopOffer"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <img
          src={purchases}
          alt="purchases"
          className="rounded-xl sm:mt-20 mt-8"
        />
      </div>
    </div>
  );
};

export default TopOffers;
