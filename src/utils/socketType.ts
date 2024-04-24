import { SessionType } from './types';

export interface ServerToClientEvents {
  connect: () => void;
  // serverMsg: (data: {msg: object , room: number}) => void
  serverMsg: (message: string) => void
  idProductEvent: (data: {idprod: number, duree: number}) => void
  serverMontant: (data: {currentUser: number , room: number, montant: number}) => void
  lastMontant: (data: {userId: string, montant: number}) => void
  youWon: (data: {message: string}) => void
  youLost: (data: {message: string}) => void
  maxBidUpdated: (data: {maxMontant: number, userId: number}) => void

}

export interface ClientToServerEvents {
  clientMsg: (data: {msg: Object, room: number}) => void
  sessionInfo: (ses: SessionType) => void
  basicValue: (basicValue: number[]) => void
  clientMontant: (data: {currentUser: number | undefined , room: number | undefined, montant: number | undefined}) => void
  maxBidUpdated: (data: {maxMontant: number, userId: number}) => void

}