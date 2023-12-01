// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tela-login', pathMatch: 'full' },
  { path: 'tela-login', loadChildren: () => import('./pages/tela-login/tela-login.module').then(m => m.TelaLoginModule) },
  { path: 'agendamento',canActivate: [AuthGuard],loadChildren: () => import('./pages/agendamento/agendamento.module').then(m => m.AgendamentoModule) },
  { path: 'consultas',  canActivate: [AuthGuard], loadChildren: () => import('./pages/consultas/consultas.module').then(m => m.ConsultasModule) },
  { path: 'pacientes',  canActivate: [AuthGuard], loadChildren: () => import('./pages/pacientes/pacientes.module').then(m => m.PacientesModule) },
  { path: 'medicos',    canActivate: [AuthGuard],loadChildren: () => import('./pages/medicos/medicos.module').then(m => m.MedicosModule) },
  { path: 'funcionario',loadChildren: () => import('./pages/funcionario/funcionario.module').then(m => m.FuncionarioModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
