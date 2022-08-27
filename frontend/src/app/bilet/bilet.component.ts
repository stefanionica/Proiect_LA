import { Component, OnInit } from '@angular/core';
import { BiletapiService } from '../biletapi.service';
import { Bilet } from '../models/bilet';

@Component({
  selector: 'app-bilet',
  templateUrl: './bilet.component.html',
  styleUrls: ['./bilet.component.css']
})
export class BiletComponent implements OnInit {
bilete: any[]=[];
selectedBilet: Bilet = { id: 0, tipdebilet: '', numarbilete: '',oras:'',locatie:'', dataconcert:new Date()};
  constructor(private biletapiService: BiletapiService) { }

  ngOnInit(): void {
    this.readBilete();
  }
  readBilete() {
    // read
    this.biletapiService.readBilete().subscribe((bilete: Bilet[]) => {
      this.bilete = bilete['data'];
      console.log('am utilizatori',JSON.stringify(this.bilete));
    });
  }

  createOrUpdateBilet(form: { value: Bilet; }) {
    if (this.selectedBilet && this.selectedBilet.id) {
      this.biletapiService.updateBilet(this.selectedBilet.id,form.value).subscribe((bilet: Bilet) => {
        console.log('Bilet updated', bilet, Image);
      });
    }
    else {
      this.biletapiService.createBilet(form.value).subscribe((bilet: Bilet) => {
        this.readBilete();
        console.log('Bilet created, ', bilet);
      });
    }

  }

  selectBilet(bilet: Bilet) {
    this.selectedBilet = bilet;
  }

  deleteBilet(id:number) {
    this.biletapiService.deleteBilet(id).subscribe((bilet: Bilet) => {
      this.readBilete();

    });
  }

}
