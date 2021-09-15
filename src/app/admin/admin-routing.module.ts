import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NavComponent } from './components/nav/nav.component';
import {FormUsuarioComponent} from './components/form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',

      },
      {
        path:'lista',
        component:ListUsuariosComponent
      },{
        path:'create',
        component:FormUsuarioComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
