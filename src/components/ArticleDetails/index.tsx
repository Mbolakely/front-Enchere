import React, { useEffect, useState } from "react";
import { ArticleDetailsType } from "../../utils/types";
import { MyDate } from "../../utils/datum";
// import {format} from 'date-fns';

const ArticleDetails: React.FC<ArticleDetailsType> = ({
  setDetails,
  arts,
  dates,
}) => {
  // useEffect(() => {
  //   const storedDate = localStorage.getItem("MyDates");
  //   if (storedDate) {
  //     const parsedDate: MyDate[] = JSON.parse(storedDate);
  //     // setDats(parsedDate);
  //   }
  //   console.log(storedDate);
  // }, []);

  const closing = () => {
    setDetails!(false);
  };

  // const [dats, setDats] = useState<MyDate[]>([]);
  // const [dat, setDat] = useState<MyDate>();

  // const storedOffer = localStorage.getItem("off");
  // const parsedOffer: number =
  //   storedOffer && JSON.parse(storedOffer).filter((o) => o.id === arts?.id);
  // // const max: number = parsedOffer &&
  // console.log(parsedOffer);

  // const current = parseInt(new Date().setDate(new Date().getDate()).toString());
  // const currentForm = new Date(current);
  const expiration = parseInt(
    MyDate.filter((date) => date.idArt === arts?.id)
      .map((val, index) => {
        return val.date;
      })
      .toString()
  );
  // const form: string = format(new Date(1712752258185), 'MM dd yyyy HH:mm');
  // const expireForm = new Date(expiration);

  // console.log(current);
  // console.log(expiration);

  // console.log(currentForm);
  // console.log(expireForm);

  // const truth = expiration > current;
  // console.log(truth);

  // const [oF, setOF] = useState<number>(0);
  // const [id, setId] = useState<number>();

  // const saveOffer = async () => {
  //   await setId(arts?.id);
  //   interface offer {
  //     id: number;
  //     offerS: Number;
  //   }
  //   var offer: offer = {
  //     id: id!,
  //     offerS: oF! || 0,
  //   };

  //   var off = JSON.parse(localStorage.getItem("off") || "[]");
  //   off.push(offer);
  //   localStorage.setItem("off", JSON.stringify(off));
  // };

  //  const vals: number = parsedOffer ? parsedOffer[1].offerS : 0
  //  console.log('vals ito',vals)
  return (
    <div className="inset-0 z-10 fixed w-screen flex justify-center h-screen pt-6 bg-black bg-opacity-5">
      <div className="bg-white w-[80rem] h-[45rem] rounded-md flex gap-2">
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`bg-${arts?.image} bg-center bg-cover bg-no-repeat w-[35rem] h-[35rem] rounded-md`}
          ></div>
        </div>
        <div className="flex-1 flex flex-col justify-between bg-white p-8 ">
          <div className="flex flex-col flex-1 pt-8 gap-2">
            {/* <span>{arts?.id}</span> */}
            <span className="text-4xl font-bold font-serif">{arts?.name}</span>
            <span>Catégorie :<b>{arts?.cat}</b></span>
            <span>Valeur estimatif de départ <b>{arts?.value} Ar</b></span>
            <span>Description : {arts?.description}</span>
            {/* <span>{dates?.idArt}</span> */}
            {/* <span>{expireForm+''}</span> */}
            {/* {MyDate.filter((date) => date.idArt === arts?.id).map(
              (value, index) => {
                // const re = value.date;
                return <span className="flex">{value.date}</span>;
              }
            )} */}
          </div>
          <div className="flex flex-1 flex-col justify-around px-4">
            {/* {parsedOffer[0].offerS} */}
            {/* {vals} */}
            {/* <div className="w-[10rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="text"
                placeholder={`${arts?.value} Ariary`}
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                disabled
              />
            </div> */}
            {/* <div className="w-[10rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="text"
                // placeholder={`${oF || vals} Ariary`}
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                disabled
              />
            </div>
            <div className="w-full border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="number"
                placeholder="Offre..."
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                required
                // value={oF}
                onChange={(e) => {
                  const offA = parseInt(e.target.value);
                  // setOF(offA);
                  // console.log(oF);
                }}
              />
            </div> */}
          </div>

          <div className="flex gap-5 items-end justify-end pr-5">
            <div
              className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[12rem] cursor-pointer"
              // onClick={saveOffer}
            >
              Participer à l'enchère
            </div>
            <div
              className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer"
              onClick={closing}
            >
              Fermer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
