import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bilet } from './models/bilet';

@Injectable()
export class BiletapiService {
  NODE_API_SERVER = 'http://localhost:3002/bilete';
  constructor(private httpClient: HttpClient) { }
  createBilet(bilet: Bilet): Observable<Bilet>{
    return this.httpClient.post<Bilet>(`${this.NODE_API_SERVER}`, bilet);
  }
  readBilete(): Observable<Bilet[]>{
    return this.httpClient.get<Bilet[]>(`${this.NODE_API_SERVER}`);
  }
  readBilet(id:string): Observable<Bilet[]>{
    return this.httpClient.get<Bilet[]>(`${this.NODE_API_SERVER}/${id}`);
  }
  updateBilet(id:number,bilet: Bilet){
    return this.httpClient.put<Bilet>(`${this.NODE_API_SERVER}/${id}`, bilet);
  }
  deleteBilet(id: number){
    return this.httpClient.delete<Bilet>(`${this.NODE_API_SERVER}/${id}`);
  }

}
