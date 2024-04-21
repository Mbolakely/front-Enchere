import React, { useEffect, useState } from "react";
import { sesType } from "../../utils/types";
import { MyArticle } from "../../utils/datum";
import { act } from "react-dom/test-utils";

const SessionItem: React.FC<sesType> = ({ date, duree, productId, active, setDetails }) => {
  const [art, setArt] = useState<MyArticle[]>([]);

  useEffect(() => {
    localStorage.setItem("myArticle", JSON.stringify(MyArticle));
    const storedArticle = localStorage.getItem("myArticle");
    if (storedArticle) {
      const parsedArticle: MyArticle[] = JSON.parse(storedArticle);
      setArt(parsedArticle);
    }
  }, []);

  const nameArt = MyArticle.filter((date) => date.id === productId)
    .map((val, index) => {
      return val.name;
    })
    .toString();
  const category = MyArticle.filter((date) => date.id === productId)
    .map((val, index) => {
      return val.cat;
    })
    .toString();
    const image = MyArticle.filter((date) => date.id === productId)
    .map((val, index) => {
      return val.image;
    })
    .toString();
  console.log("tyyy", active);
  const [act, setAct] = useState(active);
  return (
    <div className="flex gap-5 h-[4rem] px-4 items-center">
      <div className={`w-[3rem] h-[3rem] bg-${image} bg-center bg-cover bg-no-repeat`}></div>
      <div className="flew justify-between">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-xl">
              {" "}
              Article : <b>{nameArt}</b>
            </span>
            <span className="text-sm">
              {" "}
              Categorie : <b>{category}</b>
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl">
              {" "}
              Date : <b>{date + ""}</b>
            </span>
            <span className="text-sm">
              {" "}
              Durée : <b>{duree} minutes</b>
            </span>
          </div>
        </div>
      </div>
          <div
            className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer"
            onClick={() => {
              setAct(true);
              console.log(act);
              setDetails!(true)
            }}
          >
            Activer
          </div>
    </div>
  );
};

export default SessionItem;
