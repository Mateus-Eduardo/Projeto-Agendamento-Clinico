import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuncionarioService } from 'src/app/services/funcionarios/funcionarios.service';
import Funcionario  from 'src/app/classes/funcionarios/Funcionario';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent {

  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public funcionarioService: FuncionarioService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CadastroFuncionarioComponent>
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  cadastrarFuncionario(nome_funcionario: string, email_funcionario: string, senha_funcionario: string): void {
    this.funcionarioService.cadastrarFuncionario(nome_funcionario, email_funcionario, senha_funcionario);
  }

  resetForm(): void {
    this.cadastroForm.reset();
  }

  ngOnInit(): void {
    // lógica de inicialização aqui
  }

  sair(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const novoFuncionario: Funcionario = {
        nome_Funcionario: this.cadastroForm.value.nome,
        email_Funcionario: this.cadastroForm.value.email,
        senha_Funcionario: this.cadastroForm.value.senha,
      };

      // Chamada da função para cadastrar o funcionário
      this.cadastrarFuncionario(
        novoFuncionario.nome_Funcionario,
        novoFuncionario.email_Funcionario,
        novoFuncionario.senha_Funcionario
      );
    }
  }
}
