import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Funcionario from 'src/app/classes/funcionarios/Funcionario';


@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getFuncionario(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.uri}/api`);
  }

  cadastrarFuncionario(
    nome_funcionario: string,
    email_funcionario: string,
    senha_funcionario: string,
  ) {
    const funcionario = {
      nome_funcionario,
      email_funcionario,
      senha_funcionario,
    };

    console.log(funcionario);



    this.http.post(`${this.uri}/funcionarios`, funcionario)
      .pipe(
        catchError(error => {
          console.error('Erro ao cadastrar o funcionário:', error);
          console.error('Erro completo:', error.error);
          throw error;
        })
      )
      .subscribe((res: any) => console.log('Feito'));
  }
}
