import React from 'react';

const About = () => {
  return (
    <div>
      <div className='-translate-y-36'>
        <h1 className='text-2xl'>Interenchere,le site n°1 qui démocratise les ventes aux enchères</h1>
        <br /><br />
        <p>
          Interencheres est le site incontournable pour participer aux ventes aux enchères en France et dans le monde.De l'oeuvre d'art d'exception,à la pièce design ou l'objet
          déco,en passant par les véhicules et les biens d'équipement,Interencheres propose une expérience d'achat unique en alliant l'adrénaline des enchères,la transparence
          des prix et de la garantie d'objets expertisés par des professionnels.
        </p>
        <br /><br />
        <h4>Notre mission</h4>
        <br />
        <p>
          Depuis sa création en 2000,Interencheres s'est donné pour mission de rendre les ventes aux enchères accessibles à tous
          <br />
          Chaque jour,Interencheres donne accès à plus de 10 000 nouveaux lots soigneusement sélectionnés par des experts.De l'objet déco à l'oeuvre d'art exeptionnelle,
          en passant par les véhicules d'occasion,les biens d'équipement et le matériel professionnel,les lots mis en vente sont d'une variété intégralée,avec des estimations
          allant de 1 euro à plusieurs millions d'euros.
        <br />
        Interencheres s'est entouré d'un puissant réseau de plus de 380 commissaires-priseurs, installés à Madagascar et à l'international.Ces professionnels qualifiés sont 
        sélectionnés selon des critères de qualité rigoureux,qui permettent de maintenir des normes élées en matière d'expertise et de transparence.Chaque jour,ces 
        experts évaluent et s'assurent de l'authenticité des objets proposés à la vente,livrant des descriptifs détaillés et richements illustrés.
        </p>
        <br /><br />
        <h4>Nos service</h4>
        <br />
        <p>
          Interencheres dispose d'une technologie de ventes 
        </p>

      </div>
    </div>
  );
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