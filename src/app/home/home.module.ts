import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
//importo los shared
import { SharedModule } from '../shared/shared.module';
//importo material
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmpleadoComponent } from './components/update-empleado/update-empleado.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UpdateEmpleadoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
