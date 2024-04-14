import React, { useEffect, useState } from "react";
import Category from "../../components/Category";
import { MyCategory } from "../../utils/data";

const Categories = () => {
  const [cat, setCat] = useState<MyCategory[]>([]);
  
   useEffect(() => {
    localStorage.setItem("myCategory", JSON.stringify(MyCategory));
    const storedData = localStorage.getItem("myCategory");
    if(storedData) {
      const parsedData : MyCategory[] = JSON.parse(storedData);
      setCat(parsedData)
    }
  },[])

  return (
    <div className="flex flex-col -translate-y-36 gap-8 px-2">
      {MyCategory.map((val, index) => {
        return (
          <Category
            id={val.id}
            name={val.name}
            value={val.value}
            image={val.image}
            key={index}
            description={val.description}
          ></Category>
        );
      })}
 {/* {MyCategory.map((item, i)=>{
      return(
        <div className="w-12 h-full bg-red-400">{item.name}
        <img src={item.image} alt="image" />
        </div>

      )
    }
    )} */}
    </div>
  );
};

export default Categories;
