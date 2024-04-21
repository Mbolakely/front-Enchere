import React, { useEffect, useState } from "react";
import { ArticleDetailsType, SessionType } from "../../utils/types";
import { Requests } from "../../utils/requests.ts";
import { sesType } from "../../utils/types";
import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from "../../utils/socketType";


// import {format} from 'date-fns';

const ArticleDetails: React.FC<ArticleDetailsType> = ({ setDetails, arts }) => {

  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:8000/");
  socket.on("connect", ()=> {
    console.log(`client ${socket.id}`)
  })
  const [admin, setAdmin] = useState(false);

  // Fonction pour formater la date et l'heure actuelles
function getCurrentDateTime(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
 }
 

  useEffect(() => {
    getUser();
    getSession()
  }, []);
  const user = localStorage.getItem("user");
  const parsedUser = user && JSON.parse(user);

  console.log(parsedUser);

  const stringfiedUserId = parseFloat(parsedUser.id);

  // SESSIONS
  const [ses, setSes] = useState<sesType[]>([])
  async function getSession() {
    const res = await Requests.getAllSessions()
    if(res.status === 200) {
      console.log('we got these data', res.data);
      setSes(res.data)
    }
  }

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

    const response = await Requests.getUser(stringfiedUserId);
    if (response.status === 200) {
      console.log("GET", response.data);
    }
    setAdmin(response.data.isAdmin);
    console.log(response.data.isAdmin);
    // console.log(response.data.isAdmin)
  }
  const closing = () => {
    setDetails!(false);
  };

  const [session, setSession] = useState<SessionType>({
    date: '',
    duree: 0,
    productId: arts?.id,
    active: false,
  });

  // Logique pour envoyer les données au backend

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log({ session });
    const res = await Requests.createSession(session);

    socket.emit("sessionInfo", session);
    console.log({ res });
    alert("Session crée avec succès");
  };

  return (
    <div className="inset-0 z-10 fixed w-screen flex justify-center h-screen pt-6 bg-black bg-opacity-5">
      <div className="bg-white w-[70rem] h-[45rem] rounded-md flex gap-6">
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`bg-${arts?.image} bg-center bg-cover bg-no-repeat w-[30rem] h-[35rem] rounded-md ml-6`}
          ></div>
        </div>
        <div className="flex-1 flex flex-col bg-white p-8 ">
          <div className="flex flex-col flex-1 pt-8 gap-2">
            <span className="text-4xl font-bold font-serif">{arts?.name}</span>
            <span>
              Catégorie :<b>{arts?.cat}</b>
            </span>
            <span>
              Valeur estimatif de départ <b>{arts?.value} Ar</b>
            </span>
            {
              ses.filter((ses)=>ses.productId === arts?.id).map((val, index)=>{
                return(
                  <div className="flex flex-col gap-2" key={index}>
                    <span> Date de l'enchère : <b>{val.date+''}</b></span>
                    <span> Durée : <b>{val.duree}</b></span>
                  </div>
                )
              })
            }
            <span>Description : {arts?.description}</span>
          </div>
          <div>
            {admin && (
              <form className="flex flex-1 justify-around px-4 flex-col">
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Date</label>
                  <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
                    <input
                      type="datetime-local"
                      name="date"
                      min={getCurrentDateTime()}
                      className="border-none h-12 w-full px-4 focus-within:outline-none"
                      onChange={(event) => {
                        const d = event.target.value;
                        const dt = new Date(d);
                        dt && setSession({ ...session, date: d });
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
                      onChange={(event) =>
                        setSession({
                          ...session,
                          duree: parseInt(event.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-12 mt-6">
                  <button
                    className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[12rem] cursor-pointer"
                    onClick={handleSubmit}
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
            )}
            {
              !admin && (
                <form className="flex flex-1 justify-around px-4 flex-col">
                <div className="flex flex-col gap-1">
                  {/* <label htmlFor="">Offre de depart</label>
                  <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
                    <input
                      type="datetime-local"
                      name="date"
                      className="border-none h-12 w-full px-4 focus-within:outline-none"
                      // onChange={(event) => {
                      //   const d = event.target.value;
                      //   const dt = new Date(d);
                      //   dt && setSession({ ...session, date: dt });
                      // }}
                    />
                  </div> */}
                </div>
                {/* <div className="flex flex-col gap-1">
                  <label htmlFor="">Durée en minutes</label>
                  <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
                    <input
                      type="number"
                      name="duree"
                      className="border-none h-12 w-full px-4 focus-within:outline-none"
                      onChange={(event) =>
                        setSession({
                          ...session,
                          duree: parseInt(event.target.value),
                        })
                      }
                    />
                  </div>
                </div> */}
                <div className="flex gap-12 mt-6">
                  <button
                    className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[12rem] cursor-pointer"
                    onClick={handleSubmit}
                  >
                    Participer à l'enchère
                  </button>
                  <div
                    className="bg-purple-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer"
                    onClick={closing}
                  >
                    Fermer
                  </div>
                </div>
              </form>

              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
