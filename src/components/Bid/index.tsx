import React, { useState, useEffect } from "react";
import { bidType } from "../../utils/types";
import { io, Socket } from "socket.io-client";
import { Requests } from "../../utils/requests";
import { MyArticle } from "../../utils/datum";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../utils/socketType";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:8000/"
);

const Bid: React.FC<bidType> = ({
  about,
  basicValue,
  duration,
  product,
  image,
  idProduct,
}) => {
  const [productState, setProductState] = useState(() => {
    const storedProduct = localStorage.getItem("product");
    return storedProduct ? JSON.parse(storedProduct) : product;
  });
  const [basicValueState, setBasicValueState] = useState(() => {
    const storedBasicValue = localStorage.getItem("basicValue");
    return storedBasicValue ? JSON.parse(storedBasicValue) : basicValue;
  });
  const [aboutState, setAboutState] = useState(() => {
    const storedAbout = localStorage.getItem("about");
    return storedAbout ? JSON.parse(storedAbout) : about;
  });
  const [durationState, setDurationState] = useState(() => {
    const storedDuration = localStorage.getItem("duration");
    return storedDuration ? JSON.parse(storedDuration) : duration;
  });

  const [room, setRoom] = useState<number>();
  const [currentUser, setCurrentUser] = useState<number>();
  const [montant, setMontant] = useState<number>();
  const [art, setArt] = useState<MyArticle[]>([]);
  // const montants: number[] = [];
  const [montantsUtilisateur, setMontantsUtilisateur] = useState<number[]>([]);
  const [montantsAutresUtilisateurs, setMontantsAutresUtilisateurs] = useState<
    number[]
  >([]);
  const [maxMontant, setMaxMontant] = useState({ montant: 0, userId: 0 });

  useEffect(() => {
    socket.on("serverMontant", (data) => {
      // Vérifiez si le montant est émis par l'utilisateur actuel
      if (data.currentUser === currentUser) {
        setMontantsUtilisateur((prevMontants) => [
          ...prevMontants,
          data.montant,
        ]);
      } else {
        setMontantsAutresUtilisateurs((prevMontants) => [
          ...prevMontants,
          data.montant,
        ]);
      }
      if (data.montant > maxMontant.montant) {
        setMaxMontant({ montant: data.montant, userId: data?.currentUser });
        // socket.emit("maxBidUpdated", {
        //   maxMontant: maxMontant.montant,
        //   userId: maxMontant.userId,
        // });
      }
    });
    getUser();
    localStorage.setItem("myArticle", JSON.stringify(MyArticle));
    const storedArticle = localStorage.getItem("myArticle");
    if (storedArticle) {
      const parsedArticle: MyArticle[] = JSON.parse(storedArticle);
      setArt(parsedArticle);
    }
    console.log(idProduct);
    setRoom(duration);

    // Mettre à jour le localStorage chaque fois que les états changent
    localStorage.setItem("product", JSON.stringify(productState));
    localStorage.setItem("basicValue", JSON.stringify(basicValueState));
    localStorage.setItem("about", JSON.stringify(aboutState));
    localStorage.setItem("duration", JSON.stringify(durationState));

    // Supprimer les valeurs après un certain délai (par exemple, 5 minutes)
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("product");
      localStorage.removeItem("basicValue");
      localStorage.removeItem("about");
      localStorage.removeItem("duration");
      // Mettre à jour les états pour refléter la suppression
      setProductState(null);
      setBasicValueState(null);
      setAboutState(null);
      setDurationState(null);
    }, 5 * 60 * 1000); // 5 minutes en millisecondes

    // Nettoyer le timeout lors du démontage du composant
    return () => {
      socket.off("serverMontant");
      clearTimeout(timeoutId);
    };
  }, [
    currentUser,
    maxMontant.montant,
    productState,
    basicValueState,
    aboutState,
    durationState,
  ]);

  const user = localStorage.getItem("user");
  const parsedUser = (user && JSON.parse(user)) || [];

  console.log(parsedUser);

  const stringfiedUserId = parseFloat(parsedUser.id);

  async function getUser() {
    const response = await Requests.getUser(stringfiedUserId);
    if (response.status === 200) {
      console.log("GET", response.data);
    }
    setCurrentUser(response.data.id);
    console.log(response.data.id);
  }

  const [chat, setChat] = useState(false);
  const [emittedMontantsByUser, setEmittedMontantsByUser] = useState({});

  const submitOffer = (e) => {
    e.preventDefault();
    console.log(`reto ${currentUser}, ${room}, ${montant}`);

    // Vérifier si le montant a déjà été émis par cet utilisateur
    if (
      !emittedMontantsByUser[currentUser!] ||
      !emittedMontantsByUser[currentUser!].has(montant)
    ) {
      // Si le montant n'existe pas, ajoutez-le à l'array
      setMontantsUtilisateur([montant!]); // Remplacez le tableau par le nouveau montant

      // Émettez le montant au serveur
      socket.emit("clientMontant", { currentUser, room, montant });

      // Mettre à jour l'état pour suivre les montants émis par cet utilisateur
      setEmittedMontantsByUser((prev) => ({
        ...prev,
        [currentUser!]: new Set([...(prev[currentUser!] || []), montant]),
      }));
    } else {
      console.log("Ce montant a déjà été ajouté par cet utilisateur.");
    }
  };

  return (
    <div className="bg-slate-500 h-[28rem] rounded-md p-4 flex">
      <div
        className={`flex-1 bg-${image} bg-center bg-cover bg-no-repeat`}
      ></div>
      {chat && (
        <div className="w-[40rem] h-[26rem] bg-slate-100 rounded-lg">
          <div className="flex flex-col justify-center font-medium my-1">
            <span>
              Estimation: <b>{basicValue} $</b>
            </span>
            <div>
              Le montant le plus élevé est de {maxMontant.montant} par
              l'utilisateur {maxMontant.userId}.
            </div>
          </div>
          <div className=" h-[75%] overflow-y-scroll">
            <div className="flex">
              <div className="flex-1">
                {montantsAutresUtilisateurs.map((val, index) => (
                  <div
                    className="max-w-[80%] bg-prim text-white rounded-xl mb-2 p-2 text-center ml-auto"
                    key={index}
                  >
                    {val}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              {montantsUtilisateur.map((val, index) => (
                <div
                  className="max-w-[80%] bg-primary text-white rounded-xl mb-2 p-2 text-center"
                  key={index}
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <div
              className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[10em] cursor-pointer mt-2"
              onClick={() => setChat(false)}
            >
              Abandonner
            </div>
            <div className="w-[15rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden mt-3">
              <input
                type="number"
                name="montant"
                placeholder={basicValue + ""}
                min={basicValue}
                className="border-none h-8 w-full px-4 focus-within:outline-none"
                onChange={(e) => setMontant(parseFloat(e.target.value))}
              />
            </div>
            <div
              className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[2em] cursor-pointer mt-2"
              onClick={submitOffer}
            >
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
