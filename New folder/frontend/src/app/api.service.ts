import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable()
export class ApiService {
  NODE_API_SERVER = 'http://localhost:3002/users';
  constructor(private httpClient: HttpClient) {}

  createUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.NODE_API_SERVER}`, user);
  }
  readUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.NODE_API_SERVER}`);
  }
  readUser(id:string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.NODE_API_SERVER}/${id}`);
  }
  updateUser(id:number,user: User){
    return this.httpClient.put<User>(`${this.NODE_API_SERVER}/${id}`, user);
  }
  deleteUser(id: number){
    return this.httpClient.delete<User>(`${this.NODE_API_SERVER}/${id}`);
  }
}
