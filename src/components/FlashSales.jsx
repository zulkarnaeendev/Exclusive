import React from "react";
import SecHead from "./SecHead";
import Count from "./Count";
import Card from "./Card";
import Frame from "../assets/Frame 570.png";
import Button from "./Button";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router";

const FlashSales = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='flex items-center justify-center absolute -top-12 left-280.75 p-2.75 bg-[#F5F5F5] rounded-full cursor-pointer'
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
        className='flex items-center justify-center absolute -top-12 left-267.5 p-2.75 bg-[#F5F5F5] rounded-full cursor-pointer'
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
      <div className="mt-38.5">
        <div className="container flex gap-21.75 items-end">
          <SecHead title="Today’s" heading="Flash Sales" />
          <Count />
        </div>
        <Slider {...settings} className="container flex">
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
          <Card
            img={Frame}
            discount="-40%"
            Name="HAVIT HV-G92 Gamepad"
            prize="$120"
            prevprize="$160"
            rating="88"
            display={true}
          />
        </Slider>
        <div className="container flex justify-center mt-9.25">
          <NavLink to="/shop">
            <Button btn="View All Products" />
        </NavLink>
      </div>
      <div className="container mt-15 mb-20">
        <hr />
      </div>
    </div >
    </>
  );
};

export default FlashSales;
