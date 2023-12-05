import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  onSubmit(form: NgForm) {
    // Adicione aqui a lógica para processar o formulário
    console.log(form.value); // Exemplo de como acessar os valores do formulário
  }
}

