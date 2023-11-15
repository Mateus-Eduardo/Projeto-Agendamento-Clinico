import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-cadastro-medicos',
  templateUrl: './cadastro-medicos.component.html',
  styleUrls: ['./cadastro-medicos.component.scss']
})
export class CadastroMedicosComponent {
  cadastroForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CadastroMedicosComponent>
  ) {
    this.cadastroForm = data.cadastroForm;
  }

  ngOnInit(): void {
  }

  sair(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      // Processar o formulário e enviar os dados
      console.log('Formulário válido:', this.cadastroForm.value);
    }
  }
}

