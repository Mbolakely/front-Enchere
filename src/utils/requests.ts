import { AxiosHeaders } from "axios";
import api from "../axios/AxiosConfig";
import { SessionType, UserType } from "./types";

type requestType = {
  url: string,
  method: string,
  data?: any,
  headers?: AxiosHeaders
}
const request = async ({ url , method, data, headers }: requestType) => {
  
  return await api({
    url, method, data,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
}

export const Requests = {
  createUser: async (data: UserType) => {
    return await request({url: '/register', method: 'POST', data})
  },
  loginUser: async (data: Partial<UserType>) => {
    return await request({url: '/login', method: 'POST', data})
  },
  getUser: async (id: number) => {
    return await request({url: "/user/get/" + id, method: "GET"})
  },
  createSession: async (data: SessionType) => {
    return await request({url: '/sessions', method: 'POST', data})
  },
  getAllSessions: async () => {
    return await request({url: "/sessions", method: "GET"})
  }
}