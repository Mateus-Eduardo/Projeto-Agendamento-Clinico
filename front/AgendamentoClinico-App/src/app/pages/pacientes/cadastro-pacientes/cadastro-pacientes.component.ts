import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent {
  cadastroForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CadastroPacientesComponent>
  ) {
    this.cadastroForm = data.cadastroForm;
  }

  ngOnInit(): void {
  }

  Cancelar(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      // Processar o formulário e enviar os dados
      console.log('Formulário válido:', this.cadastroForm.value);
    }
  }
}
