import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './shared/Materials/material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { PainelComponent } from './pages/painel/painel.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    PacientesComponent,
    ConsultasComponent,
    SidenavComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    PainelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
