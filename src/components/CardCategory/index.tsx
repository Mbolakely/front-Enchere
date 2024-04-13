import React from 'react';
import { CategoryType } from '../../utils/types';

const CardCategory: React.FC<CategoryType> = ({
    category: title,
    value: value,
    articles: article,
    image: image,
    description: description
}) => {
    return (
       <div className='w-96 h-80 bg-slate-600 flex flex-col rounded-md hover:scale-105 duration-100 cursor-pointer'>
            <div className={`h-60 bg-slate-400 bg-${image} bg-center bg-no-repeat bg-cover rounded-t-md`}></div>
            <div className="flex flex-col justify-center items-center">
                <span className='text-[#9e9a7a] text-2xl'>{title}</span>
                <span className='text-[#dda9a9] text-xl'>{value} Ar</span>
                <span className=' text-[#C3DDFD] text-lg'>{article}</span>
                <span className=' text-[#C3DDFD] text-lg'>{description}</span>
            </div>
        </div> 
    );
};

export default CardCategory;