import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { ConsultasMaterialModule } from 'src/app/shared/Materials/consultas-mat.module';




@NgModule({
  declarations: [
    ConsultasComponent

  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    ConsultasMaterialModule,
    SharedModule
  ]
})
export class ConsultasModule {}
