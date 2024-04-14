import React, { useEffect, useState } from "react";
import { ArticleDetailsType, SessionType } from "../../utils/types";
import { Requests } from "../../utils/requests.ts";
// import {format} from 'date-fns';

const ArticleDetails: React.FC<ArticleDetailsType> = ({ setDetails, arts }) => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUser = user && JSON.parse(user);

    console.log(parsedUser);

    const stringfiedUserId = parseFloat(parsedUser.id);
    
    // getUser()
    async function getUser() {
      // const response = await api({
      //   url: `/user/get/${stringfiedUserId}`,
      //   method: "GET",
      //   headers: {
      //     // 'Access-Control-Allow-Origin': '*',
      //     "Content-Type": "application/json",
      //   },
      //   // data:
      // });

      const response = await Requests.getUser(stringfiedUserId)
      if (response.status === 200) {
        console.log("GET", response.data);
      }
    }
    getUser();
  }, []);
  const closing = () => {
    setDetails!(false);
  };

  const [session, setSession] = useState<SessionType>({
    date: new Date(),
    duree: 0,
    productId: arts?.id,
    active: false,
  });
// const [session, setSession] = useState();
const [debut, setDebut] = useState<Date>();
const [duree, setDuree] = useState<number>();
// const [idProd, setIdProd] = useState<number>();
// const [active, setActive] = useState(false)
  // const handleInput = (event) => {
  //   setSession((prev) => ({
  //     ...prev,
  //     date: new Date(event.target.value),
  //     duree: parseInt(event.target.value),
  //     productId: event.target.value,
  //     active: false
  //   }));
  // };

  // Logique pour envoyer les données au backend

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSession({
      date: debut!,
      duree: duree!,
      productId: arts?.id,
      active: false}
    );
    const res = await Requests.createSession(session);

    console.log({res})
    // console.log("session", session);
  };

  return (
    <div className="inset-0 z-10 fixed w-screen flex justify-center h-screen pt-6 bg-black bg-opacity-5">
      <div className="bg-white w-[70rem] h-[45rem] rounded-md flex gap-6">
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`bg-${arts?.image} bg-center bg-cover bg-no-repeat w-[30rem] h-[35rem] rounded-md ml-6`}
          ></div>
        </div>
        <div className="flex-1 flex flex-col justify-between bg-white p-8 ">
          <div className="flex flex-col flex-1 pt-8 gap-2">
            {/* <span>{arts?.id}</span> */}
            <span className="text-4xl font-bold font-serif">{arts?.name}</span>
            <span>
              Catégorie :<b>{arts?.cat}</b>
            </span>
            <span>
              Valeur estimatif de départ <b>{arts?.value} Ar</b>
            </span>
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
          <div>
            <form
              className="flex flex-1 justify-around px-4 flex-col"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="">Date</label>
                <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
                  <input
                    type="datetime-local"
                    name="date"
                    className="border-none h-12 w-full px-4 focus-within:outline-none"
                    onChange={(event)=>{
                      const d = event.target.value;
                      const dt = new Date(d)
                      dt && setDebut(dt)
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Durée en minutes</label>
                <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
                  <input
                    type="number"
                    name="duree"
                    className="border-none h-12 w-full px-4 focus-within:outline-none"
                    onChange={(event)=>setDuree(parseInt(event?.target.value))}
                  />
                </div>
              </div>
              <div className="flex gap-12 mt-6">
                <button
                  className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[12rem] cursor-pointer"
                  type="submit"
                >
                  Commencer l'enchère
                </button>
                <div
                  className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer"
                  onClick={closing}
                >
                  Fermer
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
