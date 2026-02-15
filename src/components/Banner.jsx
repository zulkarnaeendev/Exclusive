import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import BannerImage from "../assets/banner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }} className="absolute -top-14.25 left-87.5">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3.5 h-3.5 rounded-full bg-gray-700"></div>
    ),
  };

  return (
    <>
      <div className="container flex ">
        <div className="border-r-[1px] h-96">
          <ul className="flex flex-col gap-y-4 w-54.25 font-normal pr-6 pt-10">
            <li className="flex justify-between items-center text-base cursor-pointer hover:text-black">
              Woman’s Fashion <MdKeyboardArrowRight className="w-5 h-5" />
            </li>
            <li className="flex justify-between items-center text-base cursor-pointer hover:text-black">
              Men’s Fashion <MdKeyboardArrowRight className="w-5 h-5" />
            </li>
            <li className="text-base cursor-pointer hover:text-black">
              Electronics
            </li>
            <li className="text-base cursor-pointer hover:text-black">
              Home & Lifestyle
            </li>
            <li className="text-base cursor-pointer hover:text-black">
              Medicine
            </li>
            <li className="text-base cursor-pointer hover:text-black">
              Sports & Outdoor
            </li>
            <li className="text-base cursor-pointer hover:text-black">
              Baby’s & Toys
            </li>
            <li className="text-base cursor-pointer hover:text-black">
              Groceries
            </li>
            <li className="text-base cursor-pointer hover:text-black">
              Health & Beauty
            </li>
          </ul>
        </div>
        <div className="w-full pt-10.25 pl-12.25">
          <Slider {...settings}>
            <div className="">
              <img src={BannerImage} alt="Banner" />
            </div>
            <div className="">
              <img src={BannerImage} alt="Banner" />
            </div>
            <div className="">
              <img src={BannerImage} alt="Banner" />
            </div>
            <div className="">
              <img src={BannerImage} alt="Banner" />
            </div>
            <div className="">
              <img src={BannerImage} alt="Banner" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
