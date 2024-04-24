import React from 'react';
import { CategoriesType } from "../../utils/types";

const Category: React.FC<CategoriesType> = ({
  id: id,
  name: name,
  value: value,
  image: image,
  description: description
}) => {
  return (
    <div className="bg-slate-400 bg-opacity-80 h-[30rem] rounded-md flex p-4 cursor-pointer">
    <div className={`flex-1 bg-${image} bg-center bg-cover bg-no-repeat`}></div>
    <div className="flex-1 flex flex-col gap-4 items-center">
      <span className='text-xl text-center'> {id} </span>
      <span className='text-4xl text-center'>{name}</span>
      <span className="text-xl text-center"> {value}</span>
      <span className='text-lg text-center'>{description}</span>
    </div>
  </div>
  );
};

export default Category;