import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../axios/AxiosConfig";

const Login = () => {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    adress: "",
    contact: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handleInput = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event) => {
    console.log(data);
    event.preventDefault();
    try {
      const res = await api({
        url: "/login",
        method: "POST",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMzAxNTMxOCwiZXhwIjoxNzEzMDE4OTE4fQ.2c-VpcPG1ong3ZI7kTdsFOpt3h6aS3cfyu8HIypMqT0",
        },
        data: data,
      });
      if (res.status === 200) {
        console.log(res.data);
        // Stocker le token dans le localStorage
       localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify({
          id: res.data.user.id,
          nom: res.data.user.nom,
          prenom: res.data.user.prenom,
          adress: res.data.user.adress,
          contact: res.data.user.contact,
          email: res.data.user.email,
          isAdmin: res.data.user.isAdmin
        }));
        // Rediriger l'utilisateur vers la page d'accueil ou une autre page appropriée
        console.log(res.data.token);
        if(localStorage.getItem('user')?.length){
          console.log(localStorage.getItem('user'))
          window.location.href = "/home"
        }
        // window.location.href = "/home";
      }
    } catch (error) {
      console.error(
        "Erreur lors de la connexion :",
        error.response ? error.response.data : error
      );
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-[80rem] h-[45rem]">
        <div className="flex-1 rounded-l-lg bg-prim">L'autre partie</div>
        <div className="flex-1 rounded-tl-4xl rounded-r-lg bg-white flex flex-col gap-2">
          <div className="p-2 pt-2 text-center">
            <span className="text-2xl font-mono">LOGIN</span>
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
                  onChange={handleInput}
                  className="border-none h-12 w-full px-4 focus-within:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Mot de passe</label>
              <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  className="border-none h-12 w-full px-4 focus-within:outline-none"
                />
              </div>
            </div>
            <div
              className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[10rem] cursor-pointer mt-4"
              onClick={handleSubmit}
            >
              Log in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
