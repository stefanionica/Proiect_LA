import { Component, OnInit } from '@angular/core';
import { Turneu } from '../models/turneu';
import { TurneuapiService } from '../turneuapi.service';

@Component({
  selector: 'app-turneu',
  templateUrl: './turneu.component.html',
  styleUrls: ['./turneu.component.css'],
})
export class TurneuComponent implements OnInit {
  turnee: any[]=[];
  selectedTurneu: Turneu = { id: 0, formatie: '',tara: '',oras:'',locatie:'', dataconcert:new Date(), img:''};
  constructor(private turneuapiService: TurneuapiService) {}

  ngOnInit(): void {
    this.readTurnee();
  }
  readTurnee() {
    // read
    this.turneuapiService.readTurnee().subscribe((turnee: Turneu[]) => {
      this.turnee = turnee['data'];
      console.log('am utilizatori',JSON.stringify(this.turnee));
    });
  }

  createOrUpdateTurneu(form: { value: Turneu; }) {
    if (this.selectedTurneu && this.selectedTurneu.id) {
      this.turneuapiService.updateTurneu(this.selectedTurneu.id,form.value).subscribe((turneu: Turneu) => {
        console.log('Turneu updated', turneu, Image);
      });
    }
    else {
      this.turneuapiService.createTurneu(form.value).subscribe((turneu: Turneu) => {
        this.readTurnee();
        console.log('Turneu created, ', turneu);
      });
    }

  }

  selectTurneu(turneu: Turneu) {
    this.selectedTurneu = turneu;
  }

  deleteTurneu(id:number) {
    this.turneuapiService.deleteTurneu(id).subscribe((turneu: Turneu) => {
      this.readTurnee();

    });
  }

}
