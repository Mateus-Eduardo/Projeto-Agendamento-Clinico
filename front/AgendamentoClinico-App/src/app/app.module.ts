import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PainelComponent } from './pages/painel/painel.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    AgendamentoComponent,
    PacientesComponent,
    ConsultasComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
