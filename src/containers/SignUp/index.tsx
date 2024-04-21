import React, { useState } from "react";
import api from "../../axios/AxiosConfig";
import { UserType } from "../../utils/types";
import { Requests } from "../../utils/requests";

const SignUp = () => {
  const [user, setUser] = useState<UserType>({
    nom: '',
    prenom: '',
    adress: '',
    contact: '',
    email: '',
    password: '',
    isAdmin: false
  })
  const handleInput = (event) => {
    setUser(prev => ({...prev, [event.target.name] : event.target.value}) )
  }
  async function createUser() {
    console.log(api)

    const response = await Requests.createUser(user)

    if(response.status === 201) {
      console.log(response.data)
    }
  }
  const handleSubmit = () => {
    console.log(user)
    createUser()
    window.location.href = '/login'
  }
  return (
    <div className="h-screen flex justify-center items-center">
    <div className="flex w-[80rem] h-[45rem]">
      <div className="flex-1 rounded-l-lg bg-prim">
        L'autre partie
      </div>
      <div className="flex-1 rounded-tl-4xl rounded-r-lg bg-white flex flex-col gap-2">
        <div className="p-2 pt-2 text-center">
          <span className="text-2xl font-mono">SIGN UP</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col gap-1">
            <label htmlFor="nom">Nom</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="text"
                name="nom"
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Prénom</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="text"
                name="prenom"
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                onChange={handleInput}
              />
            </div>
          </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="">Adresse</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="text"
                name="adress"
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Contact</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="text"
                name="contact"
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="email"
                name="email"
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Mot de passe</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="password"
                name="password"
                className="border-none h-12 w-full px-4 focus-within:outline-none"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[10rem] cursor-pointer mt-4"
          onClick={handleSubmit}>
            Log in
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default SignUp;
