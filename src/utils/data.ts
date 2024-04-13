export interface MyCategory {
  id: number,
  name: string,
  value: number,
  image: string,
  description: string
}

export const MyCategory: MyCategory[]= [
  {
    id: 1, name: "Arts&Cultures", value: 20000000, image:"car", description: "Description des categories"
  },
  {
    id: 2, name: "Véhicules", value: 20000000, image:"desk", description: "Description des categories"
  },
  {
    id: 3, name: "Immobiliers", value: 20000000, image:"ordi", description: "Description des categories"
  },
  {
    id: 4, name: "Textiles", value: 20000000, image:"url('/src/assets/car.jpg')", description: "Description des categories"
  },
  {
    id: 5, name: "Appareils", value: 20000000, image:"url('/src/assets/car.jpg')", description: "Description des categories"
  },
  {
    id: 6, name: "Autres", value: 20000000, image:"url('/src/assets/car.jpg')", description: "Description des categories"
  }
]
// export const saveToLocalStorage = (key: string, data: MyCategory[]) => {
//   const serialize = JSON.stringify(data);
//   localStorage.setItem(key, serialize);
// }

// saveToLocalStorage("myCategory", myCategory)