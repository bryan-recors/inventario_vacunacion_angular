import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpleadoComponent} from './components/empleado/empleado.component';
const routes: Routes = [
  {
    path:'',
    component:EmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
