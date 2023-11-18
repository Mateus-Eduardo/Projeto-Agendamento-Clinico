import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Deve ser um e-mail válido';
    }

    return this.email.hasError('email') ? 'Esse não é um e-mail válido' : '';
  }

  
  

}
