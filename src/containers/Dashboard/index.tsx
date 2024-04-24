import React, { useEffect, useState } from "react";
import CardCategory from "../../components/CardCategory";
import ResultsPub from "../../components/ResultsPub";
import AboutPub from "../../components/AboutPub";
import ArticlesPub from "../../components/ArticlesPub";
import { MyCategory } from "../../utils/data";
// import Category from "../../components/Category";

const Dashboard = () => {
  const [cat, setCat] = useState<MyCategory[]>([]);

  useEffect(() => {
    localStorage.setItem("myCategory", JSON.stringify(MyCategory));
    const storedData = localStorage.getItem("myCategory");
    if (storedData) {
      const parsedData: MyCategory[] = JSON.parse(storedData);
      setCat(parsedData);
    }
  }, []);
  return (
    <div>
      <div className="flex flex-col">
        <div className="-translate-y-36 flex justify-around flex-col">
          <div className="h-fit flex gap-4 ml-7">
            <div className="flex flex-wrap gap-4 w-[80rem]">
              {MyCategory.map((val, index) => {
                return (
                  <CardCategory
                    category={val.name}
                    image={val.image}
                    key={index}
                    articles={val.value}
                  ></CardCategory>
                );
              })}
            </div>
          <div className="flex flex-col gap-6 ml-4 translate-y-10">
            <div className="w-[30rem] h-[35rem] bg-logo2 bg-contain bg-center bg-no-repeat rounded-lg">
            </div>
          </div>
          </div>
        </div>
        {/* second part */}
        <AboutPub></AboutPub>
        {/* third part */}
        {/* <ResultsPub></ResultsPub> */}
        {/* fourth part */}
        <ArticlesPub></ArticlesPub>
      </div>
    </div>
  );
};

export default Dashboard;
