import React from "react";

const index = () => {
  return (
   <div className="flex px-4 -translate-y-48 gap-5">
      <div className="w-[55rem] h-[45rem] bg-purple-500 flex">
        <div className="w-[30rem] bg-slate-500">
          Nom de l'article
        </div>
        <div className="text-center ">
          <span>OFFRES</span>
        </div>
      </div>
     <div className="flex items-center flex-col">
      <div className="bg-primary h-[45rem] w-[60rem] flex flex-col">
        <div className="">EN cours</div>
        <div className="flex flex-col">
          <div className="flex gap-5 h-[4rem] px-4 bg-blue-500 items-center">
            <div className="w-[3rem] h-[3rem] bg-slate-500"></div>
            <div className="flex flex-col gap-1">
              <span className="text-xl"> Article : <b>Nom de l'article</b></span>
              <span className="text-sm"> Categorie : <b>Nom du categorie</b></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          ffffffff
        </div>
      </div>
    </div>
   </div>
  );
};

export default index;
