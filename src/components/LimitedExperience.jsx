import React, { useEffect, useState } from "react";
import BigFrame from "../assets/Frame 600.png";
import { countDownDateAndTime } from "countdown-date-time";
<<<<<<< HEAD
import { NavLink } from "react-router";
=======
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e

const LimitedExperience = () => {
  const conduct_date = "2026-03-25 16:54:00";

  const [count, setcount] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setcount(countDown);
    }, 1000);
  }, []);
  return (
    <div className="container mt-35 mb-17.75 relative">
      <div className="">
        <img src={BigFrame} alt="experience music" />
      </div>
      <div className="absolute top-20 left-20">
        <div className="flex flex-col gap-6">
          <h6 className="text-[#47B486] flex gap-4 font-semibold">
            Categories
          </h6>
          <h2 className="font-semibold text-4xl text-white">
            Enhance Your <br /> Music Experience
          </h2>
        </div>
        <div className="flex mt-8 gap-6 mb-10">
          {/* Repeat this structure for Days, Hours, Minutes, Seconds */}
          <div className="flex flex-col items-center justify-center w-15.5 h-15.5 bg-white rounded-full text-black">
            <h2 className="font-semibold text-[16px] leading-tight">
              {count.days}
            </h2>
            <h4 className="font-normal text-[11px] leading-none">Days</h4>
          </div>

          <div className="flex flex-col items-center justify-center w-15.5 h-15.5 bg-white rounded-full text-black">
            <h2 className="font-semibold text-[16px] leading-tight">
              {count.hours}
            </h2>
            <h4 className="font-normal text-[11px] leading-none">Hours</h4>
          </div>

          <div className="flex flex-col items-center justify-center w-15.5 h-15.5 bg-white rounded-full text-black">
            <h2 className="font-semibold text-[16px] leading-tight">
              {count.minutes}
            </h2>
            <h4 className="font-normal text-[11px] leading-none">Minutes</h4>
          </div>

          <div className="flex flex-col items-center justify-center w-15.5 h-15.5 bg-white rounded-full text-black">
            <h2 className="font-semibold text-[16px] leading-tight">
              {count.seconds}
            </h2>
            <h4 className="font-normal text-[11px] leading-none">Seconds</h4>
          </div>
        </div>
        <div className="bg-[#47B486] pt-4 pb-4 pr-12 pl-12 w-fit rounded-sm text-middle cursor-pointer">
<<<<<<< HEAD
          <NavLink to="/shop">
            <button className="font-medium text-white">Buy Now!</button>
          </NavLink>
=======
          <button className="font-medium text-white">Buy Now!</button>
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
        </div>
      </div>
    </div>
  );
};

export default LimitedExperience;
