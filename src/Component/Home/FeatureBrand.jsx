import React from "react";
import Slider from "react-slick";
import { brand } from "../../data.js";
import gift1 from "../../Asset/Image/giftproduct1.png";
import gift2 from "../../Asset/Image/giftproduct2.png";
import { Link } from "react-router-dom";
const FeatureBrand = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-pink-50 mt-14">
      <div className="container mx-auto max-w-[1440px] px-7 lg:py-3 ">
        <h1 className="font-bold text-4xl mt-12">Featured Brand</h1>
        <div>
          <Slider {...settings}>
            {brand.map((item) => {
              return (
                <div key={item.id} className="px-2 relative mt-11">
                  <div className="relative ">
                    <img
                      src={item.image7}
                      alt="New Brand"
                      className="w-full h-full rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b to-black opacity-60 from-transparent rounded-2xl"></div>
                  </div>
                  <div className="px-5 top-24 sm:top-28 md:top-20 lg:top-52 xl:top-52 absolute text-white font-bold">
                    <p>{item.title}</p>
                    <h2 className="py-2 mt-3 sm:mt-3 md:mt-0 text-lg sm:text-xl md:text-sm lg:text-lg sm:leading-4">
                      {item.text}
                    </h2>
                    <p className="mt-2 sm:mt-2 md:mt-0">{item.link}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="flex justify-center mt-6 sm:mt-28 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <Link to="/productlist">
              <img src={gift1} alt="Mishisa gift card" />
            </Link>
            <Link to="/productlist">
              <img src={gift2} alt="Mishisa gift card" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBrand;
