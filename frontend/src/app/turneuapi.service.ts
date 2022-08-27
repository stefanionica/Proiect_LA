import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turneu } from './models/turneu';

@Injectable()
export class TurneuapiService {
  NODE_API_SERVER = 'http://localhost:3002/turnee';
  constructor(private httpClient: HttpClient) {}

  createTurneu(turneu: Turneu): Observable<Turneu>{
    return this.httpClient.post<Turneu>(`${this.NODE_API_SERVER}`, turneu);
  }
  readTurnee(): Observable<Turneu[]>{
    return this.httpClient.get<Turneu[]>(`${this.NODE_API_SERVER}`);
  }
  readTurneu(id:string): Observable<Turneu[]>{
    return this.httpClient.get<Turneu[]>(`${this.NODE_API_SERVER}/${id}`);
  }
  updateTurneu(id:number,turneu: Turneu){
    return this.httpClient.put<Turneu>(`${this.NODE_API_SERVER}/${id}`, turneu);
  }
  deleteTurneu(id: number){
    return this.httpClient.delete<Turneu>(`${this.NODE_API_SERVER}/${id}`);
  }
}

