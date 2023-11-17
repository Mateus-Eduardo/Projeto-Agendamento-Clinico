import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-medicos',
  templateUrl: './editar-medicos.component.html',
  styleUrls: ['./editar-medicos.component.scss']
})
export class EditarMedicosComponent {
  editarForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarMedicosComponent>
  ) {
    this.editarForm = data.editarForm;
  }

  ngOnInit(): void {
  }

  sair(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.editarForm.valid) {
      // Processar o formulário e enviar os dados
      console.log('Formulário válido:', this.editarForm.value);
    }
  }

}
