import React from "react";
import Slider from "react-slick";
import { fivePerOff1 } from "../../data.js";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";

import "../../Asset/Device.css";
function SampleNextArrow({ onClick }) {
  return (
    <div className="relative">
      <div
        className="arrwo arrow-right  bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full  -right-1  shadow-md absolute sm:bottom-30 bottom-[210px] lg:bottom-[200px]"
        onClick={onClick}
      >
        <BiChevronRight size={35} />
      </div>
    </div>
  );
}
function SamplePrevArrow({ onClick }) {
  return (
    <div className="relative">
      <div
        className="arrwo arrow-left bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full -left-1 absolute z-10 shadow-md lg:top-[135px] top-[152px] md:top-[120px] sm:top-[203px]"
        onClick={onClick}
      >
        <BiChevronLeft size={35} />
      </div>
    </div>
  );
}
const Loreal = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <section>
      <div className="container mx-auto max-w-[1440px] px-7 lg:py-3 mt-14">
        <div className="flex items-center justify-between mt-24">
          <h1 className="font-bold text-4xl text-[#061221]">
            Products you dont miss
          </h1>
          <div className="flex items-center">
            <p>View All </p>
            <MdArrowForwardIos className="font-thin" />
          </div>
        </div>
        <div className="mt-12">
          <Slider {...settings}>
            {fivePerOff1.map((item) => {
              return (
                <div key={item.id} className="px-2">
                  <div className=" min-h-[395px] flex flex-col">
                    <div className="bg-[#FFE5E2] p-4 shadow-sm rounded-sm">
                      <div className="flex justify-center mt-8">
                        <img
                          src={item.image2}
                          alt="make_Up_Products"
                          className="max-w-full h-auto w-52 z-20 rounded-md  object-contain "
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-vibrant mt-4 font-bold text-2xl">
                          {item.title}
                        </p>
                        <p className="font-bold text-gray-800">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Loreal;
