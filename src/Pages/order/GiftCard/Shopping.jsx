import React from "react";
import gif from "../../../Asset/Image/gif.gif";
const GiftCard = () => {
  return (
    <section>
      <div className="giftbanner1">
        <div className="max-w-6xl px-7 m-auto ">
          <h1 className="pt-8 text-[30px] text-white font-medium">
            Mishisa Gift Card
          </h1>
          <p className="text-white font-medium mb-3">For someone you love .</p>
          <div className="bg-white sm:w-[500px]  w-full card1024 p-5 rounded-md">
            <img
              src={gif}
              className="w-20 mb-7 flex justify-center m-auto"
              alt=""
            />
            <div>
              <p className="font-normal text-center text-[20px] text-vibrant">
                A GIFT OF HAPPINESS NOW ON ITS WAY!
              </p>
              <p className="text-center mt-6 mb-6 text-sm text-gray-500">
                <span className="block">
                  Your Sweet Surprise Has Been Delivered to Your Beloved! Thank
                </span>
                <span>You for Spreading Happiness with Mishisha.</span>
              </p>
            </div>
            <div>
              <div>
                <form action="/giftcart">
                  <button className="bg-vibrant px-3 py-3 flex items-center justify-center m-auto text-white rounded-md">
                    CONTINUE SHOPPING
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
