import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioComponent } from './funcionario.component'; 
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { FuncionarioMaterialModule } from 'src/app/shared/Materials/funcionario-mat.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';


@NgModule({
  declarations: [
    FuncionarioComponent 

  ],
  imports: [
    CommonModule,
    FuncionarioMaterialModule,
    FuncionarioRoutingModule,
    SharedModule,
  ]
})
export class FuncionarioModule {} 


