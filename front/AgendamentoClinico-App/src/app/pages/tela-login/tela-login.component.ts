import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent {
  constructor(public authService: AuthService) {}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  loginFuncionario(email_funcionario: string, senha_funcionario: string) {
    const auth = {
      email_funcionario,
      senha_funcionario,
    };

    console.log(auth);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    return this.email.hasError('email') ? 'Este não é um e-mail válido' : '';
  }
}
