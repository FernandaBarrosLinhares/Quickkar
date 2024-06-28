import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit{

  cards=[
    {
      titulo:"LAND ROVER",
      imagem:"src/assets/evoque-19.jpg",
      ano:"2019",
      cor:"azul",
      quilometragem:"54.000",
      modelo:"EVOQUE",
    },
    {
      titulo:"FIAT GRAND SIENA",
      imagem:"src/assets/essence",
      ano:"2014",
      cor:"Branco",
      quilometragem:"125.00",
      modelo:"ESSENCE",
    },
    {
      titulo:"FIAT TORO",
      imagem:"",
      ano:"2017",
      cor:"Marron",
      quilometragem:"128.000",
      modelo:"FREEDON",
    }
  ]

  constructor(){


  }
  ngOnInit() {
    for (let i=0;  i<this.cards.length; i++){
      let curso = this.cards[i];
    }
  }

  emCliqueCard(event: string){
    alert(event);
  }


}
