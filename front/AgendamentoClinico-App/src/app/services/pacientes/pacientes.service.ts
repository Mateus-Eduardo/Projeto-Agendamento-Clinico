import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Paciente from 'src/app/classes/pacientes/Paciente';



@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> { // Declarando o retorno como um Observable
    return this.http.get<Paciente[]>(`${this.uri}/pacientes`);
  }

  createNewPaciente(
    nome_paciente: string,
    cpf_paciente: number,
    telefone_paciente: number,
    celular_paciente: number,
    endereco_paciente: string,
    cidade_paciente: string
  ) {
    const paciente = {
      nome_paciente,
      cpf_paciente,
      telefone_paciente,
      celular_paciente,
      endereco_paciente,
      cidade_paciente  
    };

    console.log(paciente);

      // (POST - URL no Back-End): http://localhost:3000/api/pacientes
    this.http.post(`${this.uri}/pacientes`, paciente)
    .subscribe((res: any) => console.log('Feito'));
  }

}
