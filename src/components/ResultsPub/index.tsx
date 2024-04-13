import React from "react";
import CardResult from "../CardResult";

const ResultsPub = () => {
  return (
    <div className="flex flex-col gap-4 overflow-clip items-center">
      <div className="flex items-center justify-center">
        <span className="text-6xl font-mono text-[#751616] py-8">
          Our last results
        </span>
      </div>
      <div className="h-fit py-2 flex gap-2">
        <CardResult
          category="Arts&Cultures"
          article="Voiture de luxe"
          offer={1000000}
        ></CardResult>
        <CardResult
          category="Arts&Cultures"
          article="Voiture de luxe"
          offer={1000000}
        ></CardResult>
        <CardResult
          category="Arts&Cultures"
          article="Voiture de luxe"
          offer={1000000}
        ></CardResult>
        <CardResult
          category="Arts&Cultures"
          article="Voiture de luxe"
          offer={1000000}
        ></CardResult>
        <CardResult
          category="Arts&Cultures"
          article="Voiture de luxe"
          offer={1000000}
        ></CardResult>
      </div>
      <div className="border bg-slate-600 rounded-lg px-3 py-2 flex items-center justify-center cursor-pointer text-lg gap-2">
        <span>See more</span>
        <div className="h-[1.5rem] w-[1.5rem] bg-black"></div>
      </div>
    </div>
  );
};

export default ResultsPub;
