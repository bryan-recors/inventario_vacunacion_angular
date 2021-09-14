import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ListUsuariosComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule

  ]
})
export class AdminModule { }
