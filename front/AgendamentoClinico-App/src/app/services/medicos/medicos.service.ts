import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importe o MatSnackBar
import Medico from 'src/app/classes/medicos/Medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.uri}/medicos`);
  }

  createNewMedico(
    nome_especialidade: string, // Corrigido para ser uma string
    nome_medico: string,
    crm_medico: number,
    cpf_medico: number,
    cidade_medico: string,
    telefone_medico: number,
    celular_medico: number,
    email_medico: string

  ): Observable<any> {
    const medico = {
      nome_especialidade,
      nome_medico,
      crm_medico,
      cpf_medico,
      cidade_medico,
      telefone_medico,
      celular_medico,
      email_medico,
    };

    return this.http.post(`${this.uri}/medicos`, medico);
  }

  showSuccessMessage() {
    this._snackBar.open('Medico adicionado com sucesso!', 'Fechar', {
      duration: 2000,
    });
  }
}
