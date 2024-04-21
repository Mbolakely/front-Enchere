import React from "react";

const About = () => {
  return (
    <div className="-translate-y-36">
      <div className="bg-logo1 bg-contain bg-center bg-no-repeat w-[40rem] h-[15rem]"></div>
      <div className="flex flex-col items-center gap-2">
      <div className="flex justify-around flex-wrap px-4 gap-4">
        <div className="flex-1">
          <br />
          <span className="">
            <b>Coins des Enchères</b> est le site incontournable pour participer aux ventes
            aux enchères en France et dans le monde. De l’œuvre d’art
            d’exception, à la pièce design ou l’objet déco, en passant par les
            véhicules et les biens d’équipement, <b>Coins des Enchères</b> propose une
            expérience d’achat unique alliant l’adrénaline des enchères, la
            transparence des prix et la garantie d’objets expertisés par des
            professionnels.
          </span>
          <br />
          <br />
          <h2 className="text-xl">
            <b>Notre mission</b>
          </h2>
          <br />
          <span className="">
            Chaque jour, <b>Coins des Enchères</b> donne accès à plus de 10 000 nouveaux
            lots soigneusement sélectionnés par des experts. De l’objet déco à
            l’œuvre d’art exceptionnelle, en passant par les véhicules
            d’occasion, les biens d’équipement et le matériel professionnel, les
            lots mis en vente sont d'une variété inégalée, avec des estimations
            allant de 1 euro à plusieurs millions d’euros. <br />
            <b>Coins des Enchères</b> s’est entouré d'un puissant réseau de plus de 380
            commissaires-priseurs, installés en France et à l’international. Ces
            professionnels qualifiés sont sélectionnés selon des critères de
            qualité rigoureux, qui permettent de maintenir des normes élevées en
            matière d'expertise et de transparence. Chaque jour, ces experts
            évaluent et s’assurent de l’authenticité des objets proposés à la
            vente, livrant des descriptifs détaillés et richement illustrés.
          </span>
        </div>
        <div className="w-[20rem] h-[20rem] bg-illustration bg-center bg-contain bg-no-repeat"></div>
      </div>

      <div className="flex justify-around flex-wrap px-4 gap-4">
        <div className="w-[20rem] h-[20rem] bg-contain bg-center bg-no-repeat bg-illustration2"></div>
        <div className="flex-1">
          <h2 className="text-xl">
            <b>Nos services</b>
          </h2>
          <br />
          <span className="">
            <b>Coins des Enchères</b> est le site incontournable pour participer aux ventes
            aux enchères en France et dans le monde. De l’œuvre d’art
            d’exception, à la pièce design ou l’objet déco, en passant par les
            véhicules et les biens d’équipement, <b>Coins des Enchères</b> propose une
            expérience d’achat unique alliant l’adrénaline des enchères, la
            transparence des prix et la garantie d’objets expertisés par des
            professionnels.
          </span>
          <br />
          <br />
          <h2 className="text-xl">
            <b>Notre mission</b>
          </h2>
          <br />
          <span className="">
            <b>Coins des Enchères</b> dispose d'une technologie de ventes aux enchères en
            ligne, permettant à tous d’enchérir en un clic, à tout moment et en
            tout lieu. Avec les ventes « Live », les internautes peuvent suivre
            en temps réel le feu des enchères retransmis en vidéo, et enchérir
            en un clic comme s’ils étaient en salle. Des ventes « Chrono »,
            entièrement dématérialisées, offrent également accès, sur plusieurs
            jours, à une grande variété de lots. Ces ventes chronométrées
            offrent davantage de temps aux internautes qui peuvent ainsi flâner
            sur le site, et déposer une enchère au gré de leurs envies. Pour
            faciliter encore davantage l’accès aux enchères, <b>Coins des Enchères</b> a
            enrichi son catalogue de nombreux services. Les internautes peuvent
            créer des alertes sur les lots convoités, afin de ne manquer aucune
            opportunité et, pour plus de flexibilité, déposer des ordres d’achat
            en amont de chaque vente.
          </span>
        </div>
      </div>
      <div className="flex justify-around flex-wrap px-4 gap-4">
        <div className="flex-1">
          <h2 className="text-xl">
            <b>Notre histoire</b>
          </h2>
          <br />
          <span className="">
            <b>Coins des Enchères</b> est le fruit d’une formidable aventure collective
            initiée au début des années 2000 par trois commissaires-priseurs
            français visionnaires, Armand Torossian, Henri Gondran et Guy
            Laurent qui, alors qu’Internet en était à ses balbutiements, ont
            compris que l’avenir de la profession de commissaire-priseur se
            jouerait sur sa faculté à se rassembler et à se réinventer en
            prenant le virage du numérique. Ce pari osé, a séduit rapidement
            l’ensemble de la profession. En unissant leurs forces, les
            commissaires-priseurs ont façonné un formidable outil collaboratif,
            dont les évolutions ont été imaginées sur-mesure, en prenant en
            compte les spécificités du secteur et les besoins grandissants des
            internautes en demande de toujours plus de services.
          </span>
          <br />
          <br />
          <h2 className="text-xl">
            <b>Nos engagements</b>
          </h2>
          <br />
          <span className="">
            En redonnant vie aux objets, <b>Coins des Enchères</b> répond aux nouvelles
            aspirations des consommateurs, désireux d'adopter un mode d'achat
            plus économique et respectueux de l'environnement. Dans une ère où
            l'économie circulaire est primordiale, le site offre à chacun
            l'opportunité d'acquérir des objets de seconde main chargés
            d'histoire, et dont <b>Coins des Enchères</b> s’assure de la qualité en
            s’entourant de commissaires-priseurs triés sur le volet.
          </span>
        </div>
        <div className="w-[20rem] h-[20rem] bg-slate-500"></div>
      </div>
    </div>

    </div>  );
};

export default About;

// import React, { useEffect, useState } from 'react';
// import {useTranslation} from 'react-i18next'
// import { MultilingualDatabase, initialData } from '../../utils/store';

// const About = () => {
//   const [mul, setMul] = useState<MultilingualDatabase[]>([])
//   useEffect(()=>{
//     localStorage.setItem("multilingualDatabase", JSON.stringify(initialData));
//     const storedData = localStorage.getItem("multilingualDatabase");
//     if(storedData) {
//       const parsedData : MultilingualDatabase[] = JSON.parse(storedData);
//       setMul(parsedData)
//     }
//   },[]);
//   const [t, i18next] = useTranslation('en')
//   // const render = () => {
//   //    MultilingualDatabase
//   // }
//  return(
//   <div className='w-full h-12 bg-cyan-400 flex gap-2'>
//     {initialData.authors.map((item, i)=>{
//       return(
//         <div className="w-12 h-full bg-red-400">{item.id}</div>

//       )
//     }
//     )}
//   </div>
//  )
// };

// export default About;
