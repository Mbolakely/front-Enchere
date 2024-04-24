import React, { useEffect, useState } from "react";

const Locations = () => {

  return (
    <div className="flex gap-2 -translate-y-36 px-4 flex-col">
      <div className="flex gap-2 cursor-pointer">
        <div className="flex-1 h-[25rem] bg-slate-400 flex gap-2 rounded-lg">
          <div className="flex-1 bg-majungaTall bg-center bg-cover bg-no-repeat rounded-l-lg"></div>
          <div className="flex-1 text-center p-6 flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-semibold font-serif">MAHAJANGA</span>
            <span className="text-lg font-semibold font-serif"><b className="text-black">4 locaux</b> disponibles aux heures de bureau</span>
          </div>
        </div>
        <div className="flex-1 h-[25rem] bg-slate-400 flex gap-2 rounded-lg">
          <div className="flex-1 bg-fianarTall bg-center bg-cover bg-no-repeat rounded-l-lg"></div>
          <div className="flex-1 text-center p-6 flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-semibold font-serif">FIANARANTSOA</span>
            <span className="text-lg font-semibold font-serif"><b className="text-black">3 locaux</b> disponibles aux heures de bureau</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 cursor-pointer">
        <div className="flex-1 h-[25rem] bg-slate-400 flex gap-2 rounded-lg">
          <div className="flex-1 bg-diegoTall bg-center bg-cover bg-no-repeat rounded-l-lg"></div>
          <div className="flex-1 text-center p-6 flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-semibold font-serif">ANTSIRANANA</span>
            <span className="text-lg font-semibold font-serif"><b className="text-black">4 locaux</b> disponibles aux heures de bureau</span>
          </div>
        </div>
        <div className="flex-1 h-[25rem] bg-slate-400 flex gap-2 rounded-lg">
          <div className="flex-1 bg-toliaraTall bg-center bg-cover bg-no-repeat rounded-l-lg"></div>
          <div className="flex-1 text-center p-6 flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-semibold font-serif">TOLIARA</span>
            <span className="text-lg font-semibold font-serif"><b className="text-black">2 locaux</b> disponibles aux heures de bureau</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 cursor-pointer">
        <div className="flex-1 h-[25rem] bg-slate-400 flex gap-2 rounded-lg">
          <div className="flex-1 bg-tanaTall bg-center bg-cover bg-no-repeat rounded-l-lg"></div>
          <div className="flex-1 text-center p-6 flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-semibold font-serif">ANTANANARIVO</span>
            <span className="text-lg font-semibold font-serif"><b className="text-black">4 locaux</b> disponibles aux heures de bureau</span>
          </div>
        </div>
        <div className="flex-1 h-[25rem] bg-slate-400 flex gap-2 rounded-lg">
          <div className="flex-1 bg-tamataveTall bg-center bg-cover bg-no-repeat rounded-l-lg"></div>
          <div className="flex-1 text-center p-6 flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-semibold font-serif">TOAMASINA</span>
            <span className="text-lg font-semibold font-serif"><b className="text-black">5 locaux</b> disponibles aux heures de bureau</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
