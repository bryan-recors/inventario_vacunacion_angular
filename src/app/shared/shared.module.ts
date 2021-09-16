import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
//importo material
import { MaterialModule } from '../material/material.module';
import { FiltroVacunacionPipe } from './pipe/filtro-vacunacion.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FiltroVacunacionPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  //que sea exportables para ser usados por otros modulos
  exports:[
    HeaderComponent,
    FiltroVacunacionPipe
  ]
})
export class SharedModule { }
