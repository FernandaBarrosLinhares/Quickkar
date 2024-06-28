import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  cadastroForm: FormGroup;

  constructor(){
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl (''),
      telefone : new FormControl(''),
      valor: new FormControl (''),
      mensagem:new FormControl('')


    })
  }

  onSubmit(){
    console.log(this.cadastroForm.value);

  }

}
