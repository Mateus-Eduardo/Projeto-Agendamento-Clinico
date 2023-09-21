import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { PainelMaterialModule } from 'src/app/shared/Materials/painel-mat.module';






@NgModule({
  declarations: [
    PainelComponent

  ],
  imports: [
    CommonModule,
    PainelRoutingModule,
    PainelMaterialModule,
    SharedModule,
  ]
})
export class PainelModule {}
