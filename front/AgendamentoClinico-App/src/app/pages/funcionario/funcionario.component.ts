import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionarios/funcionarios.service';
import Funcionario from 'src/app/classes/funcionarios/Funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent {

  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public funcionarioService: FuncionarioService,
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  cadastrarFuncionario(nome_funcionario: string, email_funcionario: string, senha_funcionario: string): void {
    this.funcionarioService.cadastrarFuncionario(nome_funcionario, email_funcionario, senha_funcionario);
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const novoFuncionario: Funcionario = {
        nome_Funcionario: this.cadastroForm.value.nome,
        email_Funcionario: this.cadastroForm.value.email,
        senha_Funcionario: this.cadastroForm.value.senha,
      };

      this.cadastrarFuncionario(
        novoFuncionario.nome_Funcionario,
        novoFuncionario.email_Funcionario,
        novoFuncionario.senha_Funcionario
      );
    }
  }

  limparFormulario() {
    this.cadastroForm.reset();
  }
}
