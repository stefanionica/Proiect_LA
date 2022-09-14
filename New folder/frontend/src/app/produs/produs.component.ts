import { Component, OnInit } from '@angular/core';
import { Produs } from '../models/produs';
import { ProdusapiService } from '../produsapi.service';

@Component({
  selector: 'app-produs',
  templateUrl: './produs.component.html',
  styleUrls: ['./produs.component.css']
})
export class ProdusComponent implements OnInit {
produse: any[]=[];
selectedProdus: Produs = { id: 0, suvenir: '',pret: '',cantitate:'',img:''};
constructor(private produsapiService: ProdusapiService) {}

ngOnInit(): void {
  this.readProduse();
}
readProduse() {
  // read
  this.produsapiService.readProduse().subscribe((produse: Produs[]) => {
    this.produse = produse['data'];
    console.log('am produse',JSON.stringify(this.produse));
  });
}

createOrUpdateProdus(form: { value: Produs; }) {
  if (this.selectedProdus && this.selectedProdus.id) {
    this.produsapiService.updateProdus(this.selectedProdus.id,form.value).subscribe((produs: Produs) => {
      console.log('Produs updated', produs, Image);
    });
  }
  else {
    this.produsapiService.createProdus(form.value).subscribe((produs: Produs) => {
      this.readProduse();
      console.log('Produs created, ', produs);
    });
  }

}

selectProdus(produs: Produs) {
  this.selectedProdus = produs;
}

deleteProdus(id:number) {
  this.produsapiService.deleteProdus(id).subscribe((produs: Produs) => {
    this.readProduse();

  });
}
// afuConfig = {
//   uploadAPI: {
//     url:"http://localhost:3002/"
//   }
// };

}

