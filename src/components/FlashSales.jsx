import React from "react";
import SecHead from "./SecHead";
import Count from "./Count";
import Card from "./Card";
import Frame from "../assets/Frame 570.png";
import Button from "./Button";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
<<<<<<< HEAD
import { NavLink } from "react-router";
=======
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e

const FlashSales = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='flex items-center justify-center absolute -top-12 left-280.75 p-2.75 bg-[#F5F5F5] rounded-full cursor-pointer'
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
<<<<<<< HEAD
        <FaArrowRight className="text-[20px] text-black" />
=======
          <FaArrowRight className="text-[20px] text-black" />
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
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
<<<<<<< HEAD
        <FaArrowLeft className="text-[20px] text-black" />
=======
          <FaArrowLeft className="text-[20px] text-black" />
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
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
<<<<<<< HEAD
          <NavLink to="/shop">
            <Button btn="View All Products" />
        </NavLink>
      </div>
      <div className="container mt-15 mb-20">
        <hr />
      </div>
    </div >
=======
          <Button btn="View All Products" />
        </div>
        <div className="container mt-15 mb-20">
          <hr />
        </div>
      </div>
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
    </>
  );
};

export default FlashSales;
