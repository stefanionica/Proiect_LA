export interface User {
  id: number,
  nume: string,
  prenume: string,
  email:string,
  cnp:string,
  img:string,
  datanastere:Date, //string
  telefon: string,
  dataadaugare?:Date,
  actiune?:string,

}
