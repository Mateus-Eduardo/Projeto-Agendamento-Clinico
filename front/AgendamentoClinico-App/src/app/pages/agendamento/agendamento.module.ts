import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoComponent } from './agendamento.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { AgendamentoMaterialModule } from 'src/app/shared/Materials/agendamento-mat.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AgendamentoComponent

  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    AgendamentoMaterialModule,
    MatDatepickerModule,
    MatCardModule,
    SharedModule
  ]
})
export class AgendamentoModule {}
