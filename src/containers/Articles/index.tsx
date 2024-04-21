import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import ArticleDetails from "../../components/ArticleDetails";
import { MyArticle } from "../../utils/datum";
import Bid from "../../components/Bid";
import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from "../../utils/socketType";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:8000/");

const Articles = () => {
 
  const [art, setArt] = useState<MyArticle[]>([]);

  const [details, setDetails] = useState(false);
  const [disponible, setDisponible] = useState("");
  const [duration, setDuration] = useState<number>();
  const [product, setProduct] = useState("");
  const [basic, setBasic] = useState<number>();
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    localStorage.setItem("myArticle", JSON.stringify(MyArticle));
    const storedArticle = localStorage.getItem("myArticle");
    if (storedArticle) {
      const parsedArticle: MyArticle[] = JSON.parse(storedArticle);
      setArt(parsedArticle);
    }    
  }, []);
  
  const [arts, setArts] = useState<MyArticle>();

  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 10

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentItems = MyArticle.slice(indexOfFirst, indexOfLast);

  const setPage = pageNumber => setCurrentPage(pageNumber);

  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };

  const nextPage = () => {
    if(currentPage > Math.ceil(MyArticle.length / perPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  socket.on("idProductEvent", (idprod)=>{
    console.log(idprod);
    const base = MyArticle.filter((basicValue)=> basicValue.id === idprod).map(
      (val, index) => {
        return val.value
      }
    )
    const product = MyArticle.filter((product)=> product.id === idprod).map(
      (val, index) => {
        return val.name
      }
    )
    const about = MyArticle.filter((about)=> about.id === idprod).map(
      (val, index) => {
        return val.description
      }
    )
    const image = MyArticle.filter((image)=> image.id === idprod).map(
      (val, index) => {
        return val.image
      }
    )
    let prod: string = product.join("")
    let baseValue: number = base.reduce((acc, curr) => acc + curr, 0)
    let description: string = about.join("")
    let photo: string = image.join("")

    setAbout(description)
    setBasic(baseValue)
    setProduct(prod)
    setDuration(idprod)
    setImage(photo)
    socket.emit("basicValue", base)
  })
  socket.on("serverMsg", (message) => {
    console.log(message);
    ()=>setDisponible(message);
  })
  return (
    <div className="-translate-y-56 flex flex-col gap-4">
      <span className="text-white text-2xl pl-4 cursor-pointer" onClick={()=>setDisponible("disponible")}>L'enchère disponible</span>
      {
        disponible && (
          <div className="flex flex-col gap-2">
      <Bid about={about} basicValue={basic} duration={duration} product={product} image={image} idProduct={duration}></Bid>
      </div>
        )
      }
      <div className="justify-center items-center flex p-4 text-2xl pl-14">
        <div className="rounded-lg px-3 py-2 flex flex-col items-center justify-center cursor-pointer text-7xl gap-2 text-black font-thin">
          <span className="">Nos articles</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
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
      <div className="flex items-center justify-center gap-2 mt-4">
        <button className={`w-fit h-fit m-4 items-center gap-2 px-1.5 ${currentPage === 1 ? 'text-red-700 cursor-not-allowed' : 'text-black'}`}
        onClick={prevPage} disabled={currentPage===1}>
          <span className="text-sm">Précédent</span>
        </button>
        {MyArticle.length > perPage &&
        <ul className="flex list-none gap-2 flex-wrap">
          {
            Array.from({length: Math.ceil(MyArticle.length / perPage)}).map((_, index) => (
              <li key={index} className="rounded hover:bg-slate-500">
                <button className={`px-3 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-[#4741A6] text-white' : 'bg-inherit text-black'}`}
                onClick={()=>setPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))
          }
        </ul>
        }
        <button className={`w-fit h-fit m-4 items-center text-gray gap-2 px-1.5 ${currentPage === Math
        .ceil(MyArticle.length / perPage) ? 'bg-inherit text-red-700 cursor-not-allowed' : 'text-black'}`}
        onClick={()=>nextPage} disabled={currentPage=== Math.ceil(MyArticle.length / perPage)}>
          <span className="text-sm">Suivant</span>
        </button>
      </div>
    </div>
  );
};

export default Articles;
