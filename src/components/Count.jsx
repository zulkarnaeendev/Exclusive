import React, { useEffect, useState } from "react";
import { countDownDateAndTime } from "countdown-date-time";

const Count = () => {
  const conduct_date = "2026-03-25 16:54:00";

  const [count, setcount] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setcount(countDown);
    }, 1000);
  }, []);

  return (
    <div className="flex">
      <div className="flex items-center">
        <div className="flex flex-col items-center">
            <h4 className="font-medium text-xs">Days</h4>
            <h2 className="font-bold text-3xl">{count.days}</h2>
        </div>
        <div className="flex flex-col gap-1 mr-4.25 ml-4.25 mt-5">
          <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
          <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-end">
            <h4 className="font-medium text-xs">Hours</h4>
            <h2 className="font-bold text-3xl">{count.hours}</h2>
        </div>
        <div className="flex flex-col gap-1 mr-4.25 ml-4.25 mt-5">
          <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
          <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="">
            <h4 className="font-medium text-xs">Minutes</h4>
            <h2 className="font-bold text-3xl">{count.minutes}</h2>
        </div>
        <div className="flex flex-col gap-1 mr-4.25 ml-4.25 mt-5">
          <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
          <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="">
            <h4 className="font-medium text-xs">Seconds</h4>
            <h2 className="font-bold text-3xl">{count.seconds}</h2>
        </div>
      </div>
    </div>
  );
};

export default Count;
