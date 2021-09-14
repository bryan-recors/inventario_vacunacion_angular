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
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class MaterialModule { }
