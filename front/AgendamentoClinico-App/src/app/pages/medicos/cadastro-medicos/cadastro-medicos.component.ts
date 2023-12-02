import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MedicosService } from '../../../services/medicos/medicos.service';
import { MaskService } from '../../../services/mask/paciente-mask.service';

@Component({
  selector: 'app-cadastro-medicos',
  templateUrl: './cadastro-medicos.component.html',
  styleUrls: ['./cadastro-medicos.component.scss']
})
export class CadastroMedicosComponent {

  valorCPF!: string;
  cadastroMedicoForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CadastroMedicosComponent>,
    private formBuilder: FormBuilder,
    public medicoService: MedicosService,
    private maskService: MaskService,
  ) {
    this.cadastroMedicoForm = data.cadastroPacienteForm;
    this.createForm();
  }

  onInputChange(event: any) {
    const inputValue = event.target.value;
    const formattedCPF = this.maskService.formatCPF(inputValue);
    this.cadastroMedicoForm.patchValue({ cpf_medico: formattedCPF }, { emitEvent: true });

    const cpfControl = this.cadastroMedicoForm.get('cpf_medico');
    cpfControl?.setValidators([Validators.required, Validators.maxLength(14)]);
    cpfControl?.updateValueAndValidity();
  }

  createNewMedico() {
    const {
      nome_especialidade,
      nome_medico,
      crm_medico,
      cpf_medico,
      cidade_medico,
      telefone_medico,
      celular_medico,
      email_medico
    } = this.cadastroMedicoForm.value;

    this.medicoService.createNewMedico(
      nome_especialidade,
      nome_medico,
      crm_medico,
      cpf_medico,
      cidade_medico,
      telefone_medico,
      celular_medico,
      email_medico
    ).subscribe(
      (response) => {
        this.medicoService.showSuccessMessage();
        this.resetForm();
      },
      (error) => {
        // Trate os erros aqui
      }
    );
  }

  createForm() {
    this.cadastroMedicoForm = this.formBuilder.group({
      nome_especialidade: ['', Validators.required],
      nome_medico: ['', Validators.required],
      crm_medico: ['', Validators.required],
      cpf_medico: ['', [Validators.required, Validators.maxLength(14)]],
      cidade_medico: ['', Validators.required],
      telefone_medico: ['', Validators.required],
      celular_medico: ['', Validators.required],
      email_medico: ['', Validators.required],
    });
  }

  resetForm(): void {
    this.cadastroMedicoForm.reset();
  }

  ngOnInit(): void {
  }

  sair(): void {
    this.dialogRef.close();
  }
}
