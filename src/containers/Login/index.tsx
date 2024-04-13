import axios from 'axios';
import React, { useState } from 'react';
import api from '../../axios/AxiosConfig';

const Login = () => {
  type type = {
    email: string,
    password: string
  }
  // const [data, setData] = useState<type>({
  //   email: '',
  //   password: '',
  // })

  // const handleInput = (event) => {
  //   setData(prev => ({...prev, [event.target.name]: [event.target.value]}))
  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await api({
      url: '/login',
      method: 'POST',
      headers:{
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMzAxNTMxOCwiZXhwIjoxNzEzMDE4OTE4fQ.2c-VpcPG1ong3ZI7kTdsFOpt3h6aS3cfyu8HIypMqT0'
      },
      data: {
        email,
        password
      }
    })
    if(res.status === 201){
      console.log(res.data)
    }
  }
  return (
    <div className="h-screen flex justify-center items-center">
    <div className="flex w-[80rem] h-[45rem]">
      <div className="flex-1 rounded-l-lg bg-prim">
        L'autre partie
      </div>
      <div className="flex-1 rounded-tl-4xl rounded-r-lg bg-white flex flex-col gap-2">
        <div className="p-2 pt-2 text-center">
          <span className="text-2xl font-mono">LOGIN</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="email"
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="border-none h-12 w-full px-4 focus-within:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Mot de passe</label>
            <div className="w-[24rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden">
              <input
                type="password"
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="border-none h-12 w-full px-4 focus-within:outline-none"
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

export default Login;