import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importar botones
import {MatButtonModule} from '@angular/material/button';
//importo navbar
import {MatToolbarModule} from '@angular/material/toolbar';
//importo iconos
import {MatIconModule} from '@angular/material/icon';

//importaciones para tolbar
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
//tabla
import {MatTableModule} from '@angular/material/table';
//cards
import {MatCardModule} from '@angular/material/card';
//material para imputs del formulario
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
