import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


    @Input() titulo?: string;
    @Input() imagem?:string;
    @Input() ano?:number;
    @Input() cor?:string;
    @Input () quilometragem?: number;
    @Input() modelo?: string;
    @Output() eventoClique = new EventEmitter<string>();

    constructor(){

    }

    onClick(){
      this.eventoClique.emit("fui clicado Titulo:${this.titulo}");
    }



}
