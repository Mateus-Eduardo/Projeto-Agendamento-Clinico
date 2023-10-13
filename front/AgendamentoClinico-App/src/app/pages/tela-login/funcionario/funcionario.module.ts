import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
=======

import { FuncionarioRoutingModule } from './funcionario-routing.module';
>>>>>>> Stashed changes
import { FuncionarioComponent } from './funcionario.component'; 
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { FuncionarioMaterialModule } from 'src/app/shared/Materials/funcionario-mat.module';

<<<<<<< Updated upstream
@NgModule({
  declarations: [
    FuncionarioComponent 

  ],
  imports: [
    CommonModule,
    FuncionarioMaterialModule,
    SharedModule,
  ]
})
export class FuncionarioModule {} 

=======

@NgModule({
  declarations: [
    FuncionarioComponent 
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule, 
    SharedModule,

  ]
})
export class FuncionarioModule {}
>>>>>>> Stashed changes
