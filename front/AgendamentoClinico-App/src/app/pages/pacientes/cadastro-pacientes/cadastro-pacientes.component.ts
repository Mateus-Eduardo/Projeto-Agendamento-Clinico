import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from '../../../services/pacientes/pacientes.service';
import { MaskService } from '../../../services/mask/paciente-mask.service';

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent {

  valorCPF!: string;
  cadastroPacienteForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CadastroPacientesComponent>,
    private formBuilder: FormBuilder,
    public pacienteService: PacientesService,
    private maskService: MaskService
  ) {
    this.cadastroPacienteForm = data.cadastroPacienteForm;
    this.createForm();
  }

  onInputChange(event: any) {
    const inputValue = event.target.value;
    const formattedCPF = this.maskService.formatCPF(inputValue);
    this.cadastroPacienteForm.patchValue({ cpf_paciente: formattedCPF }, { emitEvent: true});

    // Desativar Validators.required se o CPF estiver completo
    const cpfControl = this.cadastroPacienteForm.get('cpf_paciente');
    console.log(cpfControl?.value.length);

    cpfControl?.setValidators([Validators.required, Validators.maxLength(14)]);

    cpfControl?.updateValueAndValidity();
  }


  createNewPaciente(nome_paciente: string, cpf_paciente: number, telefone_paciente: number, celular_paciente: number, endereco_paciente: string, cidade_paciente: string) {

    this.pacienteService.createNewPaciente(nome_paciente, cpf_paciente, telefone_paciente, celular_paciente, endereco_paciente, cidade_paciente);
  }

  createForm() {

    this.cadastroPacienteForm = this.formBuilder.group({
      nome_paciente: ['', Validators.required],
      cpf_paciente:['', Validators.required],
      telefone_paciente: [''],
      celular_paciente: ['', Validators.required],
      endereco_paciente: ['', Validators.required],
      cidade_paciente: ['', Validators.required],
    });

  }

  public resetForm(): void{
    this.cadastroPacienteForm.reset();
  }



  // formatarCPF(value: number): void {
  //   this.valorCPF = this.maskService.formatCPF(value);
  // }



  ngOnInit(): void {

  }

  sair(): void {
    this.dialogRef.close();
  }


  // onSubmit() {
  //   if (this.cadastroPacienteForm.valid) {
  //     // Processar o formulário e enviar os dados
  //     console.log('Formulário válido:', this.cadastroPacienteForm.value);
  //   }
  // }
}
