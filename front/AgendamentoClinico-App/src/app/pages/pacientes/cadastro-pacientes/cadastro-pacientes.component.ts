import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent {

  cadastroPacienteForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CadastroPacientesComponent>,
    private formBuilder: FormBuilder
  ) {
    this.cadastroPacienteForm = data.cadastroPacienteForm;
    this.createForm();
  }

  createForm(){
    this.cadastroPacienteForm = this.formBuilder.group({
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
    if (this.cadastroPacienteForm.valid) {
      // Processar o formulário e enviar os dados
      console.log('Formulário válido:', this.cadastroPacienteForm.value);
    }
  }
}
