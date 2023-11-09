import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { PacientesMaterialModule } from 'src/app/shared/Materials/pacientes-mat.module';
import { CadastroPacientesComponent } from './cadastro-pacientes/cadastro-pacientes.component';





@NgModule({
  declarations: [
    PacientesComponent,
    CadastroPacientesComponent

  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    PacientesMaterialModule,
    SharedModule,
    
  ]
})
export class PacientesModule {}
