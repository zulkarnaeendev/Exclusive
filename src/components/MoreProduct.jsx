import React from "react";
import SecHead from "./SecHead";
import Slider from "react-slick";
import Card from "./Card";
import Button from "./Button";
import Dog from "../assets/Dog.png";
import Camera from "../assets/Camera.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const MoreProduct = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="flex items-center justify-center absolute -top-12 left-280.75 p-2.75 bg-[#F5F5F5] rounded-full cursor-pointer"
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
        className="flex items-center justify-center absolute -top-12 left-267.5 p-2.75 bg-[#F5F5F5] rounded-full cursor-pointer"
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-[20px] text-black" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="">
        <div className="container flex gap-21.75 items-end">
          <SecHead title="Our Products" heading="Explore Our Products" />
        </div>
        <Slider {...settings} className="container flex">
          <div className="">
            <Card
              img={Dog}
              Name="Breed Dry Dog Food"
              prize="$100"
              rating="88"
              display={true}
            />
            <Card
              img={Dog}
              Name="Breed Dry Dog Food"
              prize="$100"
              rating="88"
              display={true}
            />
          </div>
          <div className="">
            <Card
              img={Camera}
              Name="Breed Dry Dog Food"
              prize="$360"
              rating="88"
              display={true}
            />
            <Card
              img={Camera}
              Name="Breed Dry Dog Food"
              prize="$360"
              rating="88"
              display={true}
            />
          </div>
          <div className="">
            <Card
              img={Dog}
              Name="Breed Dry Dog Food"
              prize="$100"
              rating="88"
              display={true}
            />
            <Card
              img={Dog}
              Name="Breed Dry Dog Food"
              prize="$100"
              rating="88"
              display={true}
            />
          </div>
          <div className="">
            <Card
              img={Camera}
              Name="Breed Dry Dog Food"
              prize="$360"
              rating="88"
              display={true}
            />
            <Card
              img={Camera}
              Name="Breed Dry Dog Food"
              prize="$360"
              rating="88"
              display={true}
            />
          </div>
          <div className="">
            <Card
              img={Dog}
              Name="Breed Dry Dog Food"
              prize="$100"
              rating="88"
              display={true}
            />
            <Card
              img={Dog}
              Name="Breed Dry Dog Food"
              prize="$100"
              rating="88"
              display={true}
            />
          </div>
          <div className="">
            <Card
              img={Camera}
              Name="Breed Dry Dog Food"
              prize="$360"
              rating="88"
              display={true}
            />
            <Card
              img={Camera}
              Name="Breed Dry Dog Food"
              prize="$360"
              rating="88"
              display={true}
            />
          </div>
        </Slider>
        <div className="container flex justify-center mt-9.25">
          <Button btn="View All Products" />
        </div>
      </div>
    </>
  );
};

export default MoreProduct;
