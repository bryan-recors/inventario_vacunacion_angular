import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importo el home
import {HomeComponent} from './components/home/home.component';
import {UpdateEmpleadoComponent} from './components/update-empleado/update-empleado.component'


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },{
    path:'edit/:id',
    component:UpdateEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
