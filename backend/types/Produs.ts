export interface BasicProdus {
    id: number,
  }
  export interface Produs extends BasicProdus {
    suvenir: string,
    pret: string,
    cantitate:string,
    img:string,
    dataadaugare?:Date,
    actiune?:string
  }
  export interface ProdusWithDetails extends BasicProdus, Produs{
    produsId: number,
    produs: Produs,
    
  }