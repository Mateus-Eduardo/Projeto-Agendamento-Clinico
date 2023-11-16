import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosRoutingModule } from './medicos-routing.modules';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { MedicosMaterialModule } from 'src/app/shared/Materials/medicos-mat.modules';
import { CadastroMedicosComponent } from './cadastro-medicos/cadastro-medicos.component';
import { MedicosComponent } from './medicos.component';
import { MatIconModule } from '@angular/material/icon';  
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MedicosComponent,
    CadastroMedicosComponent,
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    MedicosMaterialModule,
    SharedModule,
    MatIconModule,  
    MatCardModule 
  ]
})
export class MedicosModule {}