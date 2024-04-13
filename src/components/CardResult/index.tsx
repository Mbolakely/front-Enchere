import React from 'react';
import { CardResultType } from '../../utils/types';

const CardResult: React.FC<CardResultType> = ({
  article: article,
  category: category,
  offer: offer
}) => {
    return (
      <div className='w-[22.5rem] h-80 flex flex-col rounded-md hover:scale-105 duration-100 cursor-pointer'>
          <div className="h-56 bg-car bg-center bg-no-repeat bg-cover rounded-t-md"></div>
          <div className="flex flex-col justify-center items-center bg-prim rounded-b-md">
              <span className='text-[#9e9a7a] text-2xl'>{article}</span>
              <span className='text-[#dda9a9] text-xl'>{category}</span>
              <span className=' text-[#C3DDFD] text-lg'>{offer} Ar</span>
          </div>
      </div>
  );

};

export default CardResult;