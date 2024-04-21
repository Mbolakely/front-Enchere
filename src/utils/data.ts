export interface MyCategory {
  id: number,
  name: string,
  value: number,
  image: string,
  description: string
}

export const MyCategory: MyCategory[]= [
  {
    id: 1, name: "Arts&Cultures", value: 20000000, image:"arts", description: " Elle regroupe un large éventail d'objets et d'œuvres liés à l'art, à la culture et à l'histoire. Cela peut inclure des peintures, des sculptures, des antiquités, des objets d'artisanat, des livres anciens, des instruments de musique, des pièces de théâtre, des costumes, des artefacts historiques, et bien plus encore. Ces objets sont souvent uniques, précieux et témoignent de différentes périodes et cultures, ce qui les rend très recherchés par les collectionneurs et les amateurs d'art. Les ventes aux enchères dans cette catégorie offrent donc une opportunité unique d'acquérir des pièces exceptionnelles et chargées d'histoire."
  },
  {
    id: 2, name: "Véhicules", value: 20000000, image:"vehicules", description: "Elle comprend une large gamme de véhicules, allant des voitures de collection aux voitures de sport, en passant par les voitures de luxe, les motos, les bateaux, les camping-cars, les camions et autres véhicules spéciaux. Ces véhicules peuvent être neufs, d'occasion ou de collection, et sont souvent vendus aux enchères à des prix compétitifs. Les ventes aux enchères de véhicules offrent aux acheteurs la possibilité d'acquérir des véhicules à des prix avantageux et parfois même des modèles rares ou uniques. C'est également une opportunité pour les vendeurs de vendre rapidement leurs véhicules, sans les tracas associés à la vente traditionnelle."
  },
  {
    id: 3, name: "Immobiliers", value: 20000000, image:"immobiliers", description: "Elle concerne la vente de biens immobiliers tels que des maisons, des appartements, des terrains, des immeubles commerciaux ou des propriétés de luxe. Ces biens peuvent être neufs, anciens, à rénover ou déjà aménagés. Les ventes aux enchères immobilières offrent aux acheteurs la possibilité d'acquérir des biens immobiliers à des prix souvent inférieurs au marché, ainsi que la possibilité de trouver des propriétés uniques ou difficiles à trouver autrement. Pour les vendeurs, les ventes aux enchères immobilières peuvent permettre de vendre leur propriété rapidement et efficacement, en atteignant un large public d'acheteurs potentiels."
  },
  {
    id: 4, name: "Textiles", value: 20000000, image:"textiles", description: "Elle comprend une variété d'articles textiles tels que des vêtements, des tissus, des accessoires de mode, des tapisseries, des tapis et des tapis. Ces articles peuvent être neufs, d'occasion, vintage ou de collection, et sont souvent vendus aux enchères en raison de leur valeur esthétique, historique ou artistique. Les ventes aux enchères de textiles offrent aux acheteurs la possibilité d'acquérir des pièces uniques ou rares, souvent confectionnées à la main ou fabriquées avec des techniques traditionnelles. C'est également une opportunité pour les vendeurs de mettre en valeur leurs pièces et de les vendre à un public intéressé par les textiles de qualité."

  },
  {
    id: 5, name: "Appareils", value: 20000000, image:"appareils", description: "comprend une variété d'appareils électroniques, électroménagers et autres dispositifs technologiques. Cela peut inclure des smartphones, des ordinateurs portables, des téléviseurs, des consoles de jeu, des appareils photo, des appareils audio, des aspirateurs, des machines à laver, des réfrigérateurs, et bien plus encore. Ces appareils peuvent être neufs, d'occasion ou remis à neuf, et sont souvent vendus aux enchères à des prix compétitifs. Les ventes aux enchères d'appareils offrent aux acheteurs la possibilité d'acquérir des produits technologiques à des prix avantageux, tout en offrant aux vendeurs un moyen rapide et efficace de vendre leurs produits."
  },
  {
    id: 6, name: "Autres", value: 20000000, image:"autres", description: " Elle regroupe une grande variété d'objets et de produits qui ne rentrent pas nécessairement dans les autres catégories. Cela peut inclure des objets de collection, des antiquités, des œuvres d'art modernes, des bijoux, des instruments de musique, des articles de mode, des livres rares, des objets de décoration, des équipements sportifs, des articles de maison, et bien plus encore. Cette catégorie est souvent utilisée pour des objets uniques, spéciaux ou inhabituels qui ne trouvent pas leur place dans les autres catégories. Les ventes aux enchères de la catégorie 'Autres' offrent aux acheteurs la possibilité de découvrir des articles uniques et intéressants, souvent à des prix compétitifs."
  }
]
// export const saveToLocalStorage = (key: string, data: MyCategory[]) => {
//   const serialize = JSON.stringify(data);
//   localStorage.setItem(key, serialize);
// }

// saveToLocalStorage("myCategory", myCategory)