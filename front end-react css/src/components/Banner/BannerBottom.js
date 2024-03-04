import React from "react";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <p className="text-lightText text-base">PropLuxe's Verified</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
          </span>
          <p className="text-lightText text-base">Pay Via Crypto</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <p className="text-lightText text-base">Government Assurance</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
