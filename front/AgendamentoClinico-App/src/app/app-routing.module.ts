import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tela-login', pathMatch: 'full' },  
  { path: 'agendamento', loadChildren: () => import('./pages/agendamento/agendamento.module').then(m => m.AgendamentoModule) },
  { path: 'consultas', loadChildren: () => import('./pages/consultas/consultas.module').then(m => m.ConsultasModule) },
  { path: 'pacientes', loadChildren: () => import('./pages/pacientes/pacientes.module').then(m => m.PacientesModule) },
  { path: 'medicos', loadChildren: () => import('./pages/medicos/medicos.module').then(m => m.MedicosModule) },
  { path: 'tela-login', loadChildren: () => import('./pages/tela-login/tela-login.module').then(m => m.TelaLoginModule) },
  { path: 'funcionario', loadChildren:() => import('./pages/tela-login/funcionario/funcionario.module').then(m => m.FuncionarioModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
