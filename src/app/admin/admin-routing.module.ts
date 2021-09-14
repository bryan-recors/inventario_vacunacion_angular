import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'lista',
        component:ListUsuariosComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
