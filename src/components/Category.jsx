import React from "react";
import SecHead from "./SecHead";
import { MdSmartphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { PiHeadphones } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Category = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="flex items-center justify-center absolute -top-25 left-275.75 p-2.75 bg-[#F5F5F5] rounded-full cursor-pointer"
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <FaArrowRight className="text-[20px] text-black" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="flex items-center justify-center absolute -top-25 left-262.5 p-2.75 bg-[#F5F5F5] rounded-full cursor-pointer"
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-[20px] text-black" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      <div className="container flex">
        <SecHead title="Categories" heading="Browse By Category" />
      </div>
      <Slider {...settings} className="container flex gap-7.5 mt-15">
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <MdSmartphone className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Phones</h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <RiComputerLine className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Computers</h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <BsSmartwatch className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">
              SmartWatch
            </h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <BsCamera className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Camera</h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <PiHeadphones className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">
              HeadPhones
            </h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <MdOutlineVideogameAsset className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Gaming</h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <MdSmartphone className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Phones</h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <RiComputerLine className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Computers</h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <BsSmartwatch className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">
              SmartWatch
            </h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <BsCamera className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Camera</h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <PiHeadphones className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">
              HeadPhones
            </h3>
          </div>
        </div>
        <div className="">
          <div className="group category-card rounded-sm border-2 border-gray-300 gap-4 flex flex-col justify-center items-center w-42.5 h-36.25 cursor-pointer hover:border-reddish hover:bg-reddish">
            <MdOutlineVideogameAsset className="category-icon text-[56px] group-hover:text-white" />
            <h3 className="category-title group-hover:text-white">Gaming</h3>
          </div>
        </div>
      </Slider>
      <div className="container mt-17.5 mb-17.5">
        <hr />
      </div>
    </div>
  );
};

export default Category;
