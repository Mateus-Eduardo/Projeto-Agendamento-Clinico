import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Deve ser um e-mail válido';
    }

    return this.email.hasError('email') ? 'Esse não é um e-mail válido' : '';
  }
  

}
