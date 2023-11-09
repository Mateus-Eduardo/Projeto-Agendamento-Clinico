import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent implements OnInit {
  


  constructor (
  public dialogRef: MatDialogRef<CadastroPacientesComponent>
  ) {}

  ngOnInit (): void{

  }

  Cancelar(): void {
    this.dialogRef.close();
  }

}
