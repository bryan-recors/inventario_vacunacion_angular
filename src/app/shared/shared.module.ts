import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
//importo material
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  //que sea exportables para ser usados por otros modulos
  exports:[
    HeaderComponent,
  ]
})
export class SharedModule { }
