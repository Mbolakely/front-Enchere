import React, { useState } from "react";
import { ArticleType } from "../../utils/types";

const Article: React.FC<ArticleType> = ({
  id: id,
  name: name,
  cat: cat,
  value,
  image,
  description,
  handleArticle,
  idd,
  handle,
  // handleDate
}) => {
  const [getId, setGetId] = useState<number>();
  // console.log(new Date(idd));
  return (
    <div className="w-80 h-72 bg-slate-600 flex flex-col rounded-md hover:scale-105 duration-100 cursor-pointer">
      <div
        className={`h-64 bg-slate-400 bg-${image} bg-center bg-no-repeat bg-cover rounded-t-md`}
      ></div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-[#9e9a7a] text-lg">
          {name} {id}
        </span>
        <span className="text-[#dda9a9] text-lg">{value} Ar</span>
        <span className=" text-[#C3DDFD] text-md">
          {cat} {description}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="bg-slate-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer translate-y-5"
          onClick={() => {
            handleArticle && handleArticle(true);
            setGetId(idd);
            handle!()
            // handleDate()
          }}
          >
          Details 
        </div>
      </div>
    </div>
  );
};

export default Article;
