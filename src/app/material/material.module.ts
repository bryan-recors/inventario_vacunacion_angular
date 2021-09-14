import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importar botones
import {MatButtonModule} from '@angular/material/button';
//importo navbar
import {MatToolbarModule} from '@angular/material/toolbar';
//importo iconos
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
