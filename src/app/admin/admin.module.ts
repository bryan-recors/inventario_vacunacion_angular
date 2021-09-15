import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';

@NgModule({
  declarations: [
    ListUsuariosComponent,
    NavComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
