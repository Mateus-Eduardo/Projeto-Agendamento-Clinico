import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuncionarioService } from 'src/app/services/funcionarios/funcionarios.service';
import Funcionario  from 'src/app/classes/Funcionario';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent{

  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CadastroFuncionarioComponent>
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const novoFuncionario: Funcionario = {
        nome_Funcionario: this.cadastroForm.value.nome,
        email_Funcionario: this.cadastroForm.value.email,
        senha_Funcionario: this.cadastroForm.value.senha,
      };

      this.funcionarioService.cadastrarFuncionario(novoFuncionario).subscribe(
        (data) => {
          console.log('Funcionário cadastrado:', data);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Erro ao cadastrar o funcionário:', error);
          // Adicione lógica aqui para lidar com o erro no front-end, se necessário
        }
      );
    }
  }

  limparFormulario() {
    this.cadastroForm.reset();
  }

  sair(): void {
    this.dialogRef.close();
  }
};

