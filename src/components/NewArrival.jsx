import React from "react";
import SecHead from "./SecHead";
import PS5 from "../assets/Frame 684.png";
import Lady from "../assets/Frame 685.png";
import Speaker from "../assets/Frame 686.png";
import Perfume from "../assets/Frame 687.png";

const NewArrival = () => {
  return (
    <div className="container mt-42 mb-34">
      <SecHead title="Featured" heading="New Arrival" />
      <div className="flex mt-15 gap-7.5">
        <div className="">
          <img src={PS5} alt="" className="w-142.5 h-150" />
          <div className="text-white ml-8 -mt-38.5 w-60.5">
            <h3 className="font-semibold text-2xl mb-4">PlayStation 5</h3>
            <p className="text-sm mb-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="" className="font-medium">
              Shop Now
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="">
            <img src={Lady} alt="" className="w-142.5 h-71" />
            <div className="text-white ml-8 -mt-38.5 w-60.5">
              <h3 className="font-semibold text-2xl mb-4">Women’s Collections</h3>
              <p className="text-sm mb-4">
                Featured woman collections that give you another vibe.
              </p>
              <a href="" className="font-medium">
                Shop Now
              </a>
            </div>
          </div>
          <div className="flex gap-7.5">
            <div className="">
              <img src={Speaker} alt="" className="w-67.5 h-71" />
              <div className="text-white ml-8 -mt-27.5 w-60.5">
                <h3 className="font-semibold text-2xl mb-2">Speakers</h3>
                <p className="text-sm mb-2">
                  Amazon wireless speakers.
                </p>
                <a href="" className="font-medium">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="">
              <img src={Perfume} alt="" className="w-67.5 h-71" />
              <div className="text-white ml-8 -mt-27.5 w-60.5">
                <h3 className="font-semibold text-2xl mb-2">Perfume</h3>
                <p className="text-sm mb-2">
                  GUCCI INTENSE OUD EDP.
                </p>
                <a href="" className="font-medium">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
