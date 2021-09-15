import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//importo los shared
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
//parac consumir el servicio
import { HttpClientModule } from '@angular/common/http';
//importo el core para tener una sola referencia 
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    //para consumir el servicio
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
