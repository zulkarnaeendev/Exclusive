import React from "react";
import SecHead from "./SecHead";
import Button from "./Button";
import Speaker from "../assets/speaker.png";
import Card from "./Card";
import Slider from "react-slick";
import { NavLink } from "react-router";

const Month = () => {

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="container">
      <div className="flex justify-between items-end">
        <SecHead title="This Month" heading="Best Selling Products" />
        <NavLink to="/shop">
          <Button btn="View All" className="height-fit" />
        </NavLink>
      </div>
      <Slider {...settings} className="container flex">
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
        <Card
          img={Speaker}
          Name="HAVIT HV-G92 Gamepad"
          prize="$120"
          prevprize="$160"
          rating="88"
        />
      </Slider>
    </div>

  );
};

export default Month;