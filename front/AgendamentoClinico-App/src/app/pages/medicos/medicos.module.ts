import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.modules';
import { MedicosComponent } from './medicos.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { MedicosMaterialModule } from 'src/app/shared/Materials/medicos-mat.modules';




@NgModule({
  declarations: [
    MedicosComponent

  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    MedicosMaterialModule,
    SharedModule
  ]
})
export class MedicosModule {}
