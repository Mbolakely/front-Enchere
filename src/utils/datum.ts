export interface MyArticle {
  id: number,
  cat: string,
  name: string,
  value: number,
  image: string,
  description: string
}


export const MyArticle: MyArticle[] = [
  {
    id: 1, cat: "Arts&Cultures", name: "pot de fleurs de 1800", value: 100000, image: "car", description: "blablabla"
  },
  {
    id: 2, cat: "Véhicules", name: "Nissan", value: 10000000, image: "desk", description: "blablabla"
  },
  {
    id: 3, cat: "Immobiliers", name: "Villa basse", value: 2000000, image: "car", description: "blablabla"
  },
  {
    id: 4, cat: "Textiles", name: "Robe de Ranavalona", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 5, cat: "Appareils", name: "Server IBM", value: 30000000, image: "desk", description: "blablabla"
  },
  {
    id: 6, cat: "Autres", name: "Ossements bien concervés", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 7, cat: "Arts&Cultures", name: "pot de fleurs de 1800", value: 100000, image: "car", description: "blablabla"
  },
  {
    id: 8, cat: "Véhicules", name: "Nissan", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 9, cat: "Immobiliers", name: "Villa basse", value: 2000000, image: "car", description: "blablabla"
  },
  {
    id: 10, cat: "Textiles", name: "Robe de Ranavalona", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 11, cat: "Appareils", name: "Server IBM", value: 30000000, image: "desk", description: "blablabla"
  },
  {
    id: 12, cat: "Autres", name: "Ossements bien concervés", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 13, cat: "Arts&Cultures", name: "pot de fleurs de 1800", value: 100000, image: "car", description: "blablabla"
  },
  {
    id: 14, cat: "Véhicules", name: "Nissan", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 15, cat: "Immobiliers", name: "Villa basse", value: 2000000, image: "car", description: "blablabla"
  },
  {
    id: 16, cat: "Textiles", name: "Robe de Ranavalona", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 17, cat: "Appareils", name: "Server IBM", value: 30000000, image: "car", description: "blablabla"
  },
  {
    id: 18, cat: "Autres", name: "Ossements bien concervés", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 19, cat: "Arts&Cultures", name: "pot de fleurs de 1800", value: 100000, image: "car", description: "blablabla"
  },
  {
    id: 20, cat: "Véhicules", name: "Nissan", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 21, cat: "Immobiliers", name: "Villa basse", value: 2000000, image: "car", description: "blablabla"
  },
  {
    id: 22, cat: "Textiles", name: "Robe de Ranavalona", value: 10000000, image: "car", description: "blablabla"
  },
  {
    id: 23, cat: "Appareils", name: "Server IBM", value: 30000000, image: "car", description: "blablabla"
  },
  {
    id: 24, cat: "Autres", name: "Ossements bien concervés", value: 10000000, image: "car", description: "blablabla"
  },
]

export interface MyDate{
  idArt: number,
  date: number
}

const date = new Date().setDate(new Date().getDate())
const date1 =new Date(1712752258185).setDate(new Date().getDate())
const date2 = new Date(1712752258185).setDate(new Date().getDate())
const date3 = new Date(1712752258185).setDate(new Date().getDate())

// export const storedDate = localStorage.getItem("MyDates");
// if (storedDate) {
  // const difDate: number = (new Date()).getTime()
  // const expiration: number =  new Date().setHours(new Date().getHours() + 1)
// }
// const expiration: number = new Date().setDate(new Date(parsedDate).getDate() + 4)


export const MyDate: MyDate[] = [
  {idArt:1,date:date},
  {idArt:2,date:date1},
  {idArt:3,date:date2},
  {idArt:4,date:date3},
  {idArt:5,date:date},
  {idArt:6,date:date1},
  {idArt:7,date:date2},
  {idArt:8,date:date3},
  {idArt:9,date:date},
  {idArt:10,date:date1},
  {idArt:11,date:date2},
  {idArt:12,date:date3},
  {idArt:13,date:date},
  {idArt:14,date:date1},
  {idArt:15,date:date2},
  {idArt:16,date:date3},
  {idArt:17,date:date},
  {idArt:18,date:date1},
  {idArt:19,date:date2},
  {idArt:20,date:date3},
  {idArt:21,date:date},
  {idArt:22,date:date1},
  {idArt:23,date:date2},
  {idArt:24,date:date3}
]

