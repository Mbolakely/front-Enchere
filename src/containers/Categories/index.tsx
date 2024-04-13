import React, { useEffect, useState } from "react";
import Category from "../../components/Category";
import { MyCategory } from "../../utils/data";
import api from '../../axios/AxiosConfig.ts';

const Categories = () => {
  const [cat, setCat] = useState<MyCategory[]>([]);
  async function getUser() {
    console.log(api)
    const response = await api({
      url: '/user/get/6',
      method: 'GET',
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMzAxNjgzMCwiZXhwIjoxNzEzMDIwNDMwfQ.EF3gtQs9SZFzVY7xpig1-epdDiobbw3Hn8WBDo1_bv8'
      },
      // data:
    })
    if (response.status=== 200){
      console.log(response.data)
    }
  }
   useEffect(() => {
    localStorage.setItem("myCategory", JSON.stringify(MyCategory));
    const storedData = localStorage.getItem("myCategory");
    if(storedData) {
      const parsedData : MyCategory[] = JSON.parse(storedData);
      setCat(parsedData)
    }
    getUser()
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
