export interface BasicUser {
    id: number,
  }
  export interface User extends BasicUser {
    nume: string,
    prenume: string,
    email:string,
    cnp:string,
    img:string,
    datanastere:Date, //string
    telefon: string,
    dataadaugare?:Date,
    actiune?:string
  }
  export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,
    
  }