import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { EditUsuarioComponent } from './components/edit-usuario/edit-usuario.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import {SharedModule} from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListUsuariosComponent,
    NavComponent,
    FormUsuarioComponent,
    EditUsuarioComponent,
    ReporteComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule 

  ]
})
export class AdminModule { }
