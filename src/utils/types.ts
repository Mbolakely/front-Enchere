import { MyArticle, MyDate } from "./datum";

export type CategoryType = {
    category: string,
    value?: number,
    articles: number,
    image: string,
    description: string
    // handleClick: ()=>void,
};
export enum Navigation {
    home = 'home',
    category ='category',
    article = 'article',
    location = 'location',
    calendar = 'calendar',
    about = 'about'
};
export type CardResultType = {
    article: string,
    category: string,
    offer: number
};
export type ArticleType = {
    id?: number,
    cat: string,
    name: string,
    value: number,
    image: string,
    description?: string
    handleArticle?: React.Dispatch<React.SetStateAction<boolean>>
    idd: number,
    setArts?:  React.Dispatch<React.SetStateAction<MyArticle>>,
    handle: ()=> void,
    handleDate?: ()=> void,
};
export type CategoriesType = {
    id: number,
    name: string,
    value: number,
    image: string,
    description: string
    
};
export type LocationType = {
    province: string,
    local: number,
    background: string
    handleLocation?: React.Dispatch<React.SetStateAction<boolean>>
}

export type ArticleDetailsType = {
    setDetails?: React.Dispatch<React.SetStateAction<boolean>>,
    id?: number
    cat?: string,
    name?: string,
    value?: number,
    image?: string,
    description?: string
    arts?: MyArticle | undefined
    dates?: MyDate | undefined
}



export interface MyOffer {
    idA: number,
    offer: number
}

export type SessionType = {
    date: Date,
    duree: number,
    productId: number | undefined,
    active: boolean,
  }
  


export type UserType = {
    nom: string,
    prenom: string,
    adress: string,
    contact: string,
    email: string,
    password: string,
    isAdmin: boolean
}