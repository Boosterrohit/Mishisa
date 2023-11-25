import React from "react";
import { fivePerOff1 } from "../../data";
import osn from "../../Asset/Image/offersN.png";
const TopOffers = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl py-5 mt-5 mb-4 text-[#061221]">
        Top Offers
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
        {fivePerOff1.map((item) => {
          return (
            <div key={item.id}>
              <div className=" col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 items-center">
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
        <img src={osn} alt="purchases" className="rounded-xl sm:mt-20 mt-8" />
      </div>
    </div>
  );
};

export default TopOffers;
