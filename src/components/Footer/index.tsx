import React from "react";

const Footer = () => {
  return (
  <div className="flex text-[#cac1c1] border-t-2 border-[#bda9a9]">
      <div className="h-[15rem] flex justify-start items-center px-10 rounded-tr-full border bg-[#692121]">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-lg font-medium">Nos contacts</span>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-black">F</div>
              <span>facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-black">F</div>
              <span>facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-black">F</div>
              <span>facebook</span>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-black">F</div>
              <span>facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-black">F</div>
              <span>facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-black">F</div>
              <span>facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-2 items-center justify-center text-2xl font-light text-[#221212]">
      <div className="flex gap-4">
        <span className="">Home</span>
        <span>Categories</span>
      </div>
      <div className="flex gap-4">
        <span>Articles</span>
        <span>Locations</span>
      </div>
      <div className="flex gap-4">
        <span>Calendar</span>
        <span>About us</span>
      </div>
      <div className="">
        <span>Politics and Confidentialities</span>
      </div>
    </div>
  </div>
  );
};

export default Footer;
