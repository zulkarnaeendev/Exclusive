import React from "react";

const SecHead = ({ title, heading }) => {
  return (
    <div className="flex flex-col gap-6">
      <h6 className="text-reddish flex gap-4 font-semibold">
        <div className="w-5 h-10 bg-reddish"></div>
        {title}
      </h6>
      <h2 className="font-semibold text-4xl">{heading}</h2>
    </div>
  );
};

export default SecHead;
