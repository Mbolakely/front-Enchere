import { SessionType } from './types';

export interface ServerToClientEvents {
  connect: () => void;
  // serverMsg: (data: {msg: object , room: number}) => void
  serverMsg: (message: string) => void
  idProductEvent: (idprod: number) => void
  serverMontant: (data: {currentUser: number , room: number, montant: number}) => void
}

export interface ClientToServerEvents {
  clientMsg: (data: {msg: Object, room: number}) => void
  sessionInfo: (ses: SessionType) => void
  basicValue: (basicValue: number[]) => void
  clientMontant: (data: {currentUser: number | undefined , room: number | undefined, montant: number | undefined}) => void

}