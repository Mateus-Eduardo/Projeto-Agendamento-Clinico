import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { PacientesMaterialModule } from 'src/app/shared/Materials/pacientes-mat.module';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    PacientesComponent

  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    PacientesMaterialModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class PacientesModule {}
