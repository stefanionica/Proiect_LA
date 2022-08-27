import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[]=[];
  constructor(private apiService: ApiService) { };


  ngOnInit(): void {
    this.readUsers();

  }
readUsers() {
  this.apiService.readUsers().subscribe((users: User[]) => {
    this.users = users['data'];
    console.log('am utilizatori', JSON.stringify(this.users));
  });

}


}




