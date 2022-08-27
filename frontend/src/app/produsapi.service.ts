import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produs } from './models/produs';

@Injectable()
export class ProdusapiService {
  NODE_API_SERVER = 'http://localhost:3002/produse';
  constructor(private httpClient: HttpClient) {}

  createProdus(produs: Produs): Observable<Produs>{
    return this.httpClient.post<Produs>(`${this.NODE_API_SERVER}`, produs);
  }
  readProduse(): Observable<Produs[]>{
    return this.httpClient.get<Produs[]>(`${this.NODE_API_SERVER}`);
  }
  readProdus(id:string): Observable<Produs[]>{
    return this.httpClient.get<Produs[]>(`${this.NODE_API_SERVER}/${id}`);
  }
  updateProdus(id:number,produs: Produs){
    return this.httpClient.put<Produs>(`${this.NODE_API_SERVER}/${id}`, produs);
  }
  deleteProdus(id: number){
    return this.httpClient.delete<Produs>(`${this.NODE_API_SERVER}/${id}`);
  }
}

