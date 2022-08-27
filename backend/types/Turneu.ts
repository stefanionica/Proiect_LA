export interface BasicTurneu {
    id: number,
  }
  export interface Turneu extends BasicTurneu {
    formatie: string,
    tara: string,
    oras:string,
    locatie:string,
    dataconcert:Date, //string
    img:string,
    dataadaugare?:Date,
    actiune?:string
  }
  export interface TurneuWithDetails extends BasicTurneu, Turneu{
    turneuId: number,
    turneu: Turneu,
    
  }