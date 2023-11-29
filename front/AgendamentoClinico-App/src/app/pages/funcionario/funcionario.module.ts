import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './funcionario.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { FuncionarioMaterialModule } from 'src/app/shared/Materials/funcionario-mat.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

@NgModule({
  declarations: [
    FuncionarioComponent,
    EditarFuncionarioComponent,
    CadastroFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioMaterialModule,
    FuncionarioRoutingModule,
    MatGridListModule,
    SharedModule,
    MatDatepickerModule,

    MatNativeDateModule,
  ]
})
export class FuncionarioModule {}
