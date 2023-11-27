import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Funcionario  from 'src/app/classes/funcionarios/Funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(funcionario: Funcionario): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(`${this.apiUrl}/cadastrar`, funcionario, { headers })

      .pipe(
        catchError(error => {

          console.error('Erro ao cadastrar o funcionário:', error);
          console.error('Erro completo:', error.error);
          throw error;
        })
      );
  }

}
