import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.scss']
})
export class EditarPacientesComponent {

  editarPacienteForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarPacientesComponent>,
    private formBuilder: FormBuilder
  ) {
    this.editarPacienteForm = data.editarPacienteForm;
    this.createForm();
  }

  createForm(){
    this.editarPacienteForm = this.formBuilder.group({
      nome_paciente: ['', Validators.required],
      cpf_paciente: ['', Validators.required],
      endereco_paciente: ['', Validators.required],
      celular_paciente: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  sair(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.editarPacienteForm.valid) {
      // Processar o formulário e enviar os dados
      console.log('Formulário válido:', this.editarPacienteForm.value);
    }
  }
}
