import React, { useState, useEffect } from "react";
import { bidType } from "../../utils/types";
import { io, Socket } from 'socket.io-client';
import { Requests } from "../../utils/requests";
import { ServerToClientEvents, ClientToServerEvents } from "../../utils/socketType";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:8000/");

const Bid: React.FC<bidType> = ({
  about,
  basicValue,
  duration,
  product,
  image,
  idProduct
}) => {

  const [room, setRoom] = useState<number>();
  const [currentUser, setCurrentUser] = useState<number>();
  const [montant, setMontant] = useState<number>();

  useEffect(() => {
    getUser();
  }, []);
  const user = localStorage.getItem("user");
  const parsedUser = user && JSON.parse(user);

  console.log(parsedUser);

  const stringfiedUserId = parseFloat(parsedUser.id);

  async function getUser() {
    const response = await Requests.getUser(stringfiedUserId);
    if (response.status === 200) {
      console.log("GET", response.data);
    }
    setCurrentUser(response.data.id)
    console.log(response.data.id);
  }

  const [chat, setChat] = useState(false);
  const submitOffer = (e) => {
    e.preventDefault();
    setRoom(idProduct)
    setMontant(basicValue)
    console.log(`reto ${currentUser}, ${room}, ${basicValue}`)
    socket.emit("clientMontant", {currentUser, room, montant})
  }
  return (
    <div className="bg-slate-500 h-[28rem] rounded-md p-4 flex">
      <div
        className={`flex-1 bg-${image} bg-center bg-cover bg-no-repeat`}
      ></div>
      {chat && (
        <div className="w-[30rem] h-[26rem] bg-slate-100 rounded-lg">
          <div className="flex justify-center font-medium my-1">
            <span>
              Estimation: <b>{basicValue} $</b>
            </span>
          </div>
          <div className=" h-[75%] overflow-y-scroll w-">
            <div className="p-2">
              <div className="max-w-[30%] bg-primary text-white rounded-b-xl rounded-tr-xl mb-2 p-2 text-center">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-prim text-white rounded-b-xl rounded-tl-xl mb-2 p-2 text-center ml-auto">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-primary text-white rounded-b-xl rounded-tr-xl mb-2 p-2 text-center">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-prim text-white rounded-b-xl rounded-tl-xl mb-2 p-2 text-center ml-auto">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-primary text-white rounded-b-xl rounded-tr-xl mb-2 p-2 text-center">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-prim text-white rounded-b-xl rounded-tl-xl mb-2 p-2 text-center ml-auto">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-primary text-white rounded-b-xl rounded-tr-xl mb-2 p-2 text-center">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-prim text-white rounded-b-xl rounded-tl-xl mb-2 p-2 text-center ml-auto">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-primary text-white rounded-b-xl rounded-tr-xl mb-2 p-2 text-center">
                Lorem ipsum
              </div>
              <div className="max-w-[30%] bg-prim text-white rounded-b-xl rounded-tl-xl mb-2 p-2 text-center ml-auto">
                Lorem ipsum
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
          <div className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[10em] cursor-pointer mt-2"
          onClick={()=>setChat(false)}>
              Abandonner
            </div>
            <div className="w-[15rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden mt-3">
              <input
                type="number"
                name="montant"
                placeholder={basicValue+''}
                min={basicValue}
                className="border-none h-8 w-full px-4 focus-within:outline-none"
              />
            </div>
            <div className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[2em] cursor-pointer mt-2"
            onClick={submitOffer}>
              I
            </div>
          </div>
        </div>
      )}
      {!chat && (
        <div className="flex-1 flex flex-col gap-3 items-center">
          <span className="text-4xl text-center">{product}</span>
          <span className="text-xl text-center">{basicValue}</span>
          <span className="text-xl text-center">{duration}</span>
          <span className="text-lg text-center">{about}</span>
          <div
            className="bg-slate-400 rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer translate-y-5"
            onClick={() => setChat(true)}
          >
            Participer
          </div>
        </div>
      )}
    </div>
  );
};

export default Bid;
