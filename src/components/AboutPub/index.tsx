import React from "react";
import AboutSwiper from "../AboutSwiper";

const AboutPub = () => {
  return (
    <div className="flex overflow-clip items-center h-[35rem] border-t-2 border-[#643e3e] border-b-2">
      <div className="ml-8 flex-1">
        <AboutSwiper></AboutSwiper>
      </div>
      <div className="flex-1">
        <div className="flex flex-col pr-16 gap-8">
          <span className="text-5xl text-end font-mono">
            Who are we and how do we work?
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-end text-2xl">
              We are a group organisation
              vsdkdjjqcdkqjFFSzdDDFFFFFFFFEFjzdjzlKKdsz
            </span>
            <span className="text-end text-2xl">
              We are a group organisation vsdkdjjqcdkVDVSDVZEEDVDVDVDqjzdj
            </span>
            <span className="text-end text-2xl">
              We are a group organisation vsdkdjjVDVLDKDODKFFFFOqcdkq
            </span>
            <span className="text-end text-2xl">
              We are a group organisation vsdkDKFKDKOKKKdjHH¨PNjqc
            </span>
            <span className="text-end text-2xl">
              We are a group organisation vsdkdDSSSDjLLPPj.qc
            </span>
            <span className="text-end text-2xl">
              We are a group organisation vsdkdKKjjPPPPqc
            </span>
            <span className="text-end text-2xl">
              We are a group organisation vsdkdjjqMMc
            </span>
            <span className="text-end text-2xl">
              We are a group organisation vsdkdjjqc
            </span>
          </div>
          <div className="flex justify-end">
            <div className="bg-slate-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer">
              More info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPub;
