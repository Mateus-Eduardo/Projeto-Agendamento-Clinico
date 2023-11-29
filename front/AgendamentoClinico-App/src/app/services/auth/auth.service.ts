
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Auth from 'src/app/classes/auth/Auth';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  loginFuncionario(
    email_funcionario: string,
    senha_funcionario: string,
  ) {
    const auth = {
      email_funcionario,
      senha_funcionario,
    };

    console.log(auth);



    this.http.post(`${this.uri}/auth/login`, auth)
      .pipe(
        catchError(error => {
          console.error('Erro ao logar o funcionário:', error);
          console.error('Erro completo:', error.error);
          throw error;
        })
      )
      .subscribe((res: any) => console.log('Funcionario Logado'));
  }
}
