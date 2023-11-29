// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedValue: boolean = false;
  private authToken: string = '';

  uri = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  loginFuncionario(
    email_funcionario: string,
    senha_funcionario: string
  ): Observable<any> {
    const auth = {
      email_funcionario,
      senha_funcionario,
    };

    console.log(auth);

    return this.http.post(`${this.uri}/login`, auth).pipe(
      catchError((error) => {
        console.error('Erro ao logar o funcionário:', error);
        console.error('Erro completo:', error.error);
        throw error;
      }),
      map((response: any) => {
        const token = response.token;

        if (token) {
          this.authToken = token;
          this.setAuthenticated(true);
        }

        return response;
      })
    );
  }

  logout() {
    // Lógica de logout, chamada à API, etc.
    // Aqui, você pode adicionar qualquer lógica necessária para deslogar o usuário.
    // Por exemplo, chamar uma API para invalidar o token de autenticação.
    this.setAuthenticated(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticatedValue = isAuthenticated;
  }
}
