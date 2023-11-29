// tela-login.component.ts
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent {
  constructor(public authService: AuthService, private router: Router) {}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  loginFuncionario(event: Event) {
    event.preventDefault(); // Evitar o envio padrão do formulário
    const email_funcionario = this.email.value || '';
    const senha_funcionario = this.senha.value || '';

    this.authService.loginFuncionario(email_funcionario, senha_funcionario).subscribe(
      (response) => {
        console.log('Funcionário logado com sucesso', response);
        this.router.navigate(['/agendamento']);
      },
      (error) => {
        console.error('Erro ao logar o funcionário:', error);
      }
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    return this.email.hasError('email') ? 'Este não é um e-mail válido' : '';
  }
}
