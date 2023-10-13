import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { FuncionarioComponent } from './funcionario.component'; 

const routes: Routes = [{ path: 'funcionario', component: FuncionarioComponent }];
=======
import { FuncionarioComponent } from './funcionario.component';


const routes: Routes = [{ path: '', component: FuncionarioComponent }];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
