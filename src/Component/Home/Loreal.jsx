import React from "react";
import Slider from "react-slick";
import { skinCare } from "../../data.js";
import { AiFillHeart } from "react-icons/ai";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "../../Asset/Device.css";
function SampleNextArrow({ onClick }) {
  return (
    <div className="relative">
      <div
        className="arrwo arrow-right  bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full  -right-1  shadow-md absolute sm:bottom-30 bottom-[210px] lg:bottom-[220px]"
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
        className="arrwo arrow-left bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full -left-1 absolute z-10 shadow-md lg:top-[167px] top-[212px] md:top-[230px] sm:top-[203px]"
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
    <section className="bg-pink-50">
      <div className="container mx-auto max-w-[1440px] px-7 lg:py-3 mt-14">
        <div className="flex items-center justify-between mt-24">
          <h1 className="font-bold text-4xl">L'oreal</h1>
        </div>
        <div className="mt-12">
          <Slider {...settings}>
            {skinCare.map((item) => {
              return (
                <div key={item.id} className="px-2">
                  <div className=" min-h-[395px] flex flex-col">
                    <div className="bg-white p-4 h-[255px] shadow-md box rounded-md">
                      <div className="flex justify-between items-center">
                        <span
                          className={
                            item.discount
                              ? "border border-gray-500 px-3 text-gray-500 font-normal rounded-2xl text-sm"
                              : ""
                          }
                        >
                          {item.discount}
                        </span>
                        <AiFillHeart className="text-gray-600" size={20} />
                      </div>
                      <div className="flex justify-center mt-8">
                        <img
                          src={item.image4}
                          alt="make_Up_Products"
                          className="max-w-full h-auto w-48 z-20  object-contain rounded-3xl"
                        />
                      </div>
                    </div>

                    <div className="w-full h-[100px] rounded-[50%] shadow-md bottom-16 relative bg-white"></div>
                    <div className="px-2 bottom-11 relative">
                      <p className="text-sm  text-gray-500">{item.title}</p>
                      <p className="text-gray-500 text-[16.8px] hover:text-vibrant hover:underline   font-medium">
                        {item.text}
                      </p>
                    </div>
                    <div className="flex mt-auto relative bottom-8 px-2">
                      <p className="font-medium text-xl text-gray-700">
                        {item.price}
                      </p>
                      <del className="ml-2 text-red-500 text-xl font-bold">
                        {item.delPrice}
                      </del>
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
