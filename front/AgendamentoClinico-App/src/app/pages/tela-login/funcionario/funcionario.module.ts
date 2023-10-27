import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FuncionarioComponent } from './funcionario.component'; 
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { FuncionarioMaterialModule } from 'src/app/shared/Materials/funcionario-mat.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





@NgModule({
  declarations: [
    FuncionarioComponent

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

