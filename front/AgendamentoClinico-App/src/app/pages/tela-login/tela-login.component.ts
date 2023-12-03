import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);
  errorMessage: string = ''; // Adicione esta linha

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Redirecionar automaticamente se o usuário já estiver autenticado

  }

  loginFuncionario(event: Event) {
    event.preventDefault();

    const email_funcionario = this.email.value || '';
    const senha_funcionario = this.senha.value || '';

    this.authService.loginFuncionario(email_funcionario, senha_funcionario).subscribe(
      (response) => {
      const token = response.token;
        this.router.navigate(['/agendamento']);
        this.authService.logadoTrue()

        localStorage.setItem("token", JSON.stringify(token));
      },
      (error) => {
        console.error('Erro ao logar o funcionário:', error);
        this.errorMessage = 'Usuário ou senha incorretos'; // Defina a mensagem de erro
      }
    );
  }
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    return this.email.hasError('email') ? 'Este não é um e-mail válido' : '';
  }
}
