import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import ArticleDetails from "../../components/ArticleDetails";
import { MyArticle } from "../../utils/datum";
import Bid from "../../components/Bid";
import { io, Socket } from "socket.io-client";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../utils/socketType";
import { Requests } from "../../utils/requests";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:8000/"
);

const Articles = () => {
  
  const [disponible, setDisponible] = useState(() => {
    const storedDisponible = localStorage.getItem("disponible");
    return storedDisponible ? JSON.parse(storedDisponible) : null;
  });
  const [art, setArt] = useState<MyArticle[]>([]);
  const [details, setDetails] = useState(false);
  const [duration, setDuration] = useState<number>();
  const [product, setProduct] = useState("");
  const [basic, setBasic] = useState<number>();
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [maxMontant, setMaxMontant] = useState({
    montant: 0,
    userId: 0,
    room: 0,
  });
  const [currentUser, setCurrentUser] = useState<number>();
  const [winner, setWinner] = useState("");
  const [showWinnerMessage, setShowWinnerMessage] = useState(false);

  useEffect(() => {

    getUser();

    localStorage.setItem("myArticle", JSON.stringify(MyArticle));
    const storedArticle = localStorage.getItem("myArticle");
    if (storedArticle) {
      const parsedArticle: MyArticle[] = JSON.parse(storedArticle);
      setArt(parsedArticle);
    }
    socket.on("serverMontant", (data) => {
      console.log("mandeeeeh");
      // Vérifiez si le montant est émis par l'utilisateur actuel
      if (data.montant > maxMontant.montant) {
        setMaxMontant({
          montant: data.montant,
          userId: data?.currentUser,
          room: data?.room,
        });
        console.log(data.montant, data.room);
      }
      if (currentUser === data.currentUser) {
        setWinner("vous vous vous");
        console.log("vous vous vous");
      } else {
        console.log("autres");
        setWinner("autres");
      }
    });

    const storedDuration = localStorage.getItem("duration");
    if (storedDuration) {
      let durationInMilliseconds: number;
      // Convertir la durée en millisecondes (si nécessaire)
      durationInMilliseconds = Number(storedDuration) * 60 * 1000; // Si la durée est en minutes

      // Utiliser la durée pour déterminer le délai de setTimeout
      if (!isNaN(durationInMilliseconds)) {
        // Utiliser la durée pour déterminer le délai de setTimeout
        const timeoutId = setTimeout(() => {
          localStorage.removeItem("disponible");
          setDisponible(null); // Mettre à jour l'état pour refléter la suppression
          setShowWinnerMessage(true);
        }, durationInMilliseconds);

        // Nettoyez les écouteurs d'événements lors du démontage du composant
        return () => {
          clearTimeout(timeoutId);
        };
      } else {
        console.log(
          "La durée récupérée du localStorage n'est pas un nombre valide."
        );
      }
    }
  }, [duration, disponible, maxMontant, currentUser]);

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

  const [arts, setArts] = useState<MyArticle>();

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentItems = MyArticle.slice(indexOfFirst, indexOfLast);

  const setPage = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage > Math.ceil(MyArticle.length / perPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  socket.on("idProductEvent", (data) => {
    console.log(data.idprod);
    // Utiliser la durée reçue
    const duration = data.duree;
    console.log("Durée reçue:", duration);
    localStorage.setItem("duration", JSON.stringify(duration));

    const base = MyArticle.filter(
      (basicValue) => basicValue.id === data.idprod
    ).map((val, index) => {
      return val.value;
    });
    const product = MyArticle.filter(
      (product) => product.id === data.idprod
    ).map((val, index) => {
      return val.name;
    });
    const about = MyArticle.filter((about) => about.id === data.idprod).map(
      (val, index) => {
        return val.description;
      }
    );
    const image = MyArticle.filter((image) => image.id === data.idprod).map(
      (val, index) => {
        return val.image;
      }
    );

    socket.emit("basicValue", base);

    let prod: string = product.join("");
    let baseValue: number = base.reduce((acc, curr) => acc + curr, 0);
    let description: string = about.join("");
    let photo: string = image.join("");

    setAbout(description);
    setBasic(baseValue);
    setProduct(prod);
    setDuration(data.idprod);
    setImage(photo);
  });
  socket.on("serverMsg", (message) => {
    setDisponible("disponible");
  });
  return (
    <div className="-translate-y-64 flex flex-col gap-4">
      {showWinnerMessage && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {winner === "vous vous vous"
                        ? "Felicitations, vous avez gagné l'enchère !"
                        : "Malheureusement, un autre utilisateur a gagné l'enchère."}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-prim text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={
                    () => setShowWinnerMessage(false)
                  }
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {disponible ? ( // Vérifie si disponible a une valeur
        <div className="flex flex-col gap-2">
          <span className="text-white text-2xl pl-4 cursor-pointer">
            L'enchère disponible
          </span>
          <Bid
            about={about}
            basicValue={basic}
            duration={duration}
            product={product}
            image={image}
            idProduct={duration}
          ></Bid>
        </div>
      ) : (
        <div className="text-center text-gray-500 ">
          Aucune enchère disponible pour le moment.
        </div>
      )}

      <div className="justify-center items-center flex p-4 text-2xl pl-14">
        <div className="rounded-lg px-3 py-2 flex flex-col items-center justify-center cursor-pointer text-7xl gap-2 text-black font-thin -translate-y-10">
          <span className="">Nos articles</span>
          {/* {showWinnerMessage && (
            <div>
              {winner === "vous vous vous" ? (
                <div>Vous avez gagné l'enchère !</div>
              ) : winner === "autres" ? (
                <div>Un autre utilisateur a gagné l'enchère.</div>
              ) : (
                <div>Aucun vainqueur n'a été déterminé.</div>
              )}
            </div>
          )} */}
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center -translate-y-10">
        {currentItems.map((val, index) => {
          return (
            <div>
              <Article
                // id={val.id}
                name={val.name}
                value={val.value}
                image={val.image}
                cat={val.cat}
                // description={val.description}
                key={index}
                handleArticle={setDetails}
                idd={val.id}
                handle={() => setArts(val)}
                // handleDate={() => setDat(dat)}
              ></Article>
            </div>
          );
        })}
        {details && (
          <div className=" w-full">
            <div className="">
              <ArticleDetails
                // dates={value}
                arts={arts}
                setDetails={setDetails}
              ></ArticleDetails>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          className={`w-fit h-fit m-4 items-center gap-2 px-1.5 ${
            currentPage === 1 ? "text-red-700 cursor-not-allowed" : "text-black"
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <span className="text-sm">Précédent</span>
        </button>
        {MyArticle.length > perPage && (
          <ul className="flex list-none gap-2 flex-wrap">
            {Array.from({ length: Math.ceil(MyArticle.length / perPage) }).map(
              (_, index) => (
                <li key={index} className="rounded hover:bg-slate-500">
                  <button
                    className={`px-3 py-2 rounded-lg ${
                      currentPage === index + 1
                        ? "bg-[#4741A6] text-white"
                        : "bg-inherit text-black"
                    }`}
                    onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
        <button
          className={`w-fit h-fit m-4 items-center text-gray gap-2 px-1.5 ${
            currentPage === Math.ceil(MyArticle.length / perPage)
              ? "bg-inherit text-red-700 cursor-not-allowed"
              : "text-black"
          }`}
          onClick={() => nextPage}
          disabled={currentPage === Math.ceil(MyArticle.length / perPage)}
        >
          <span className="text-sm">Suivant</span>
        </button>
      </div>
    </div>
  );
};

export default Articles;
