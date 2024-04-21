import React from 'react';
import { useState, useEffect } from 'react';
import Article from '../Article';
import { MyArticle } from "../../utils/datum";
import ArticleDetails from '../ArticleDetails';
import {Swiper, SwiperSlide} from 'swiper/react';
import "Swiper/css";
import "swiper/bundle";
import "Swiper/css";
import "Swiper/css/navigation";
import "swiper/bundle";
import "swiper/css/scrollbar";
import "swiper/css/pagination"

const ArticlesPub = () => {
  const [art, setArt] = useState<MyArticle[]>([])
  const [details, setDetails] = useState(false)
  useEffect(() => {
    localStorage.setItem("myArticle", JSON.stringify(MyArticle));
    const storedArticle = localStorage.getItem("myArticle");
    if(storedArticle) {
      const parsedArticle : MyArticle[] = JSON.parse(storedArticle)
      setArt(parsedArticle)
    }
  },[])

  return (
    <div className="flex flex-col">
        <div className="flex items-center justify-center pt-8">
          <span className="text-6xl text-prim font-mono">Decouvrez aussi!!</span>
        </div>
        <div className="h-[30rem] flex p-4 flex-wrap overflow-visible">
          <Swiper spaceBetween={2}
          className='flex items-center justify-center'
          // modules={[Navigation, Pagination, Scrollbar, Ally]}
          navigation
          pagination={{clickable:true}}
          autoplay={true}
          slidesPerView={5}
          onSlideChange={()=> console.log('slide change')}
          onSwiper={(swiper)=>console.log(swiper)}>
              {MyArticle.map((val, index) => {
          return (
            <SwiperSlide key={index} className='flex justify-center items-center'>
              <Article
               id={val.id}
               name={val.name}
               value={val.value}
               image={val.image}
               cat={val.cat}
              //  description={val.description}
               key={index}
               handleArticle={setDetails}
              ></Article>
            </SwiperSlide>
          );
        })}
          </Swiper>
        {details===true && (
  <ArticleDetails setDetails={setDetails}></ArticleDetails>
)}
        </div>
      </div>
  );
};

export default ArticlesPub;