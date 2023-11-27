import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Funcionario  from 'src/app/classes/Funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(funcionario: Funcionario): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(`${this.apiUrl}/Cadastrar`, funcionario, { headers })

      .pipe(
        catchError(error => {
          // Erro ao cadastrar o funcionário
          console.error('Erro ao cadastrar o funcionário:', error);
          console.error('Erro completo:', error.error);
          throw error; // Lançar o erro para que possa ser tratado pelo componente que chamou o serviço
        })
      );
  }

}
