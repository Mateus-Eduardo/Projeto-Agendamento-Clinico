import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importe o MatSnackBar
import Paciente from 'src/app/classes/pacientes/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.uri}/pacientes`);
  }

  createNewPaciente(
    nome_paciente: string,
    cpf_paciente: number,
    telefone_paciente: number,
    celular_paciente: number,
    endereco_paciente: string,
    cidade_paciente: string
  ): Observable<any> {
    const paciente = {
      nome_paciente,
      cpf_paciente,
      telefone_paciente: telefone_paciente || null,
      celular_paciente,
      endereco_paciente,
      cidade_paciente: cidade_paciente || null
    };

    return this.http.post(`${this.uri}/pacientes`, paciente);
  }

  showSuccessMessage() {
    this._snackBar.open('Paciente adicionado com sucesso!', 'Fechar', {
      duration: 2000,
    });
  }


}
