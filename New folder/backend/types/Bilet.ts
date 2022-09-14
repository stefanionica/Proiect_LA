export interface BasicBilet {
    id: number,
  }
  export interface Bilet extends BasicBilet {
    tipdebilet: string,
    numarbilete: string,
    oras:string,
    locatie:string,
    dataconcert:Date, //string
    dataadaugare?:Date,
    actiune?:string
  }
  export interface BiletWithDetails extends BasicBilet, Bilet{
    biletId: number,
    bilet: Bilet,
    
  }