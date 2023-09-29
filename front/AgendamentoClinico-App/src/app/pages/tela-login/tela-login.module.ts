import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaLoginRoutingModule } from './tela-login-routing.module';
import { TelaLoginComponent } from './tela-login.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { TelaLoginMaterialModule } from 'src/app/shared/Materials/tela-login-mat.module';






@NgModule({
  declarations: [
    TelaLoginComponent

  ],
  imports: [
    CommonModule,
    TelaLoginComponent,
    TelaLoginMaterialModule,
    TelaLoginRoutingModule,
    SharedModule,
  ]
})
export class TelaLoginModule {}
