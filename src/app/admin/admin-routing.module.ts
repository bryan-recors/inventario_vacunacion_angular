import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NavComponent } from './components/nav/nav.component';
import {FormUsuarioComponent} from './components/form-usuario/form-usuario.component';
import {EditUsuarioComponent} from './components/edit-usuario/edit-usuario.component';
import {ReportesComponent} from './components/reportes/reportes.component';

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
      },{
        path:'edit/:id',
        component:EditUsuarioComponent
      },{
        path:'reporte',
        component:ReportesComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
