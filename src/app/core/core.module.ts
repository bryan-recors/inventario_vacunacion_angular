import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importo el servicio
import {EmpleadosService} from './services/empleados/empleados.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  //para servicios
  providers:[
    EmpleadosService
  ]
})
export class CoreModule { }
